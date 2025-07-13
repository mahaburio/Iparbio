import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "orgchart";
import "orgchart/dist/css/jquery.orgchart.css";
import { dataSources } from "../../utils/DataSources";
import Modal from "../common/PopupModal";

const OrgChartTree = ({currentBC}) => {
  const chartContainerRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const originalData = useRef(JSON.parse(JSON.stringify(dataSources)));
  const zoomTimer = useRef(null);

  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterLevels = (node, depth, maxDepth) => {
    if (depth >= maxDepth - 1) return { ...node, children: [] };
    return {
      ...node,
      children: node.children
        ? node.children.map((child) => filterLevels(child, depth + 1, maxDepth))
        : [],
    };
  };

  const moveNodeUp = (node) => {
    const $chartContainer = $(chartContainerRef.current);
    function findAndReplaceParent(currentNode, parent = null, index = null) {
      if (!currentNode.children) return false;
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].uniqueId === node.uniqueId) {
          const newNode = {
            ...node,
            children: currentNode.children[i].children || [],
          };
          const $node = $(`.orgchart .custom-node:contains(${node.firstName})`).closest(".node-wrapper");
          if ($node.length) {
            $node.animate({ opacity: 0.5, top: "-100%" }, 200, function () {
              if (parent) parent.children[index] = newNode;
              else dataSources[currentBC] = newNode;
              $chartContainer.fadeOut(200, function () {
                renderChart();
                $chartContainer.fadeIn(200);
              });
            });
          } else {
            if (parent) parent.children[index] = newNode;
            else dataSources[currentBC] = newNode;
            renderChart();
          }
          return true;
        }
        if (findAndReplaceParent(currentNode.children[i], currentNode, i)) return true;
      }
      return false;
    }
    findAndReplaceParent(dataSources[currentBC]);
  };

  const makeNodeTop = (data) => {
    const $chartContainer = $(chartContainerRef.current);
    function findNode(parent, targetBC, parentNode = null) {
      if (!parent.children) return null;
      for (let i = 0; i < parent.children.length; i++) {
        let child = parent.children[i];
        if (child.uniqueId === targetBC) return { node: child, parent: parentNode };
        let foundNode = findNode(child, targetBC, parent);
        if (foundNode) return foundNode;
      }
      return null;
    }

    let foundData = findNode(dataSources[currentBC], data.uniqueId);
    if (!foundData) return;

    let newRoot = JSON.parse(JSON.stringify(foundData.node));
    if (foundData.parent) {
      foundData.parent.children = foundData.parent.children.filter(child => child.uniqueId !== data.uniqueId);
    }

    const applyDepthRestriction = (node, maxDepth, currentDepth = 0) => {
      if (currentDepth >= maxDepth) {
        node.children = [];
        return node;
      }
      if (node.children) {
        node.children = node.children.map(child => applyDepthRestriction(child, maxDepth, currentDepth + 1));
      }
      return node;
    };

    newRoot = applyDepthRestriction(newRoot, 4);

    const $node = $(`.orgchart .custom-node:contains(${data.firstName})`).closest(".node-wrapper");
    if ($node.length) {
      $node.animate({ opacity: 0.5, top: "-100%" }, 200, function () {
        $chartContainer.fadeOut(200, function () {
          dataSources[currentBC] = newRoot;
          renderChart();
          $chartContainer.fadeIn(200);
        });
      });
    } else {
      dataSources[currentBC] = newRoot;
      renderChart();
    }
  };

  const createNodeContent = (data) => {
    const $node = $(`
      <div class="node-wrapper">
        <div class="custom-node">
          <div class="info-icon"><i class="ri-information-line"></i></div>
          <div class="node-header header-green" title="Business Center">
            <span>${data.businessCenter}</span>
          </div>
          <div class="node-body">
            <div class="firstName">${data.firstName}</div>
            <div class="lastName">${data.lastName}</div>
            <div class="title-user">${data.title}</div>
          </div>
          <div class="node-bottom">
            <div class="lft-vl"><span>${data.leftTotal}</span></div>
            <div class="center"><span class="ar-up"><i class="ri-arrow-up-line"></i></span><button class="make-top">Make Top</button></div>
            <div class="rgt-vl"><span>${data.rightTotal}</span></div>
          </div>
        </div>
      </div>
    `);

    $node.find(".make-top").on("click", function (e) {
      e.stopPropagation();
      makeNodeTop(data);
    });

    $node.find(".ar-up").on("click", function (e) {
      e.stopPropagation();
      moveNodeUp(data);
    });

    $node.find(".node-header").on("click", function (e) {
      e.stopPropagation();
      setModalData(data);
      setIsModalOpen(true);
    });

    return $node;
  };

  const renderChart = () => {
    const datascource = filterLevels(dataSources[currentBC], 0, 4);
    const $chartContainer = $(chartContainerRef.current);
    $chartContainer.empty();

    $chartContainer.orgchart({
      data: datascource,
      toggleSiblingsResp: true,
      verticalDepth: 4,
      direction: "t2b",
      createNode: function ($node, data) {
        const $customContent = createNodeContent(data);
        $node.children(".title").remove();
        $node.append($customContent);
      },
    });
  };

  const applyZoom = () => {
    $(".orgchart").css({
      transform: `scale(${zoomLevel})`,
      transformOrigin: "top left",
    });
  };

  const resetChart = () => {
    dataSources[currentBC] = JSON.parse(JSON.stringify(originalData.current[currentBC]));
    renderChart();
  };

  useEffect(() => {
    renderChart();
    applyZoom();
  }, [currentBC]);

  useEffect(() => {
    applyZoom();
  }, [zoomLevel]);

  return (
    <div className="tree-section">
      <div className="container">
        <div className="right-btn-sec d-flex justify-content-end p-4">
          <div className="reset-position" onClick={resetChart}>
            <i className="ri-reset-right-line"></i>
          </div>
          <div className="make-top-pst"><i className="ri-arrow-up-s-line"></i><span>Make Top</span></div>
          <div className="back-top-pst" onClick={resetChart}><i className="ri-skip-up-line"></i><span>Back to Top</span></div>
        </div>

        <div id="chart-container" ref={chartContainerRef}></div>

        <div className="reset-sec">
          <div className="zoomin-btn">
            <div className="zoomin"
              onMouseDown={() => zoomTimer.current = setInterval(() => setZoomLevel(z => z + 0.1), 100)}
              onMouseUp={() => clearInterval(zoomTimer.current)}
              onClick={() => setZoomLevel(z => z + 0.1)}>+</div>
          </div>
          <button className="reset-btn" onClick={() => setZoomLevel(1)}>Reset</button>
          <div className="zoomout-btn">
            <div className="zoomout"
              onMouseDown={() => zoomTimer.current = setInterval(() => setZoomLevel(z => (z > 0.2 ? z - 0.1 : z)), 100)}
              onMouseUp={() => clearInterval(zoomTimer.current)}
              onClick={() => setZoomLevel(z => (z > 0.2 ? z - 0.1 : z))}>-</div>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="medium-modal">
        <div className="modal-body">
          <div className="ipar-id">
            <table cellPadding="10">
              <tbody>
                <tr><td>Unique ID</td><td>{modalData?.uniqueId}</td></tr>
                <tr><td>Business Center</td><td>{modalData?.businessCenter}</td></tr>
                <tr><td>First Name</td><td>{modalData?.firstName}</td></tr>
                <tr><td>Last Name</td><td>{modalData?.lastName}</td></tr>
                <tr><td>Address</td><td>{modalData?.address}</td></tr>
                <tr><td>City</td><td>{modalData?.city}</td></tr>
                <tr><td>State</td><td>{modalData?.state}</td></tr>
                <tr><td>Zip</td><td>{modalData?.zip}</td></tr>
                <tr><td>Country</td><td>{modalData?.country}</td></tr>
                <tr><td>Email</td><td>{modalData?.email}</td></tr>
                <tr><td>Phone</td><td>{modalData?.phone}</td></tr>
                <tr><td>Left Total</td><td>{modalData?.leftTotal}</td></tr>
                <tr><td>Right Total</td><td>{modalData?.rightTotal}</td></tr>
                <tr><td>PV Amount</td><td>{modalData?.pvAmount}</td></tr>
                <tr><td>URL</td><td><a href={modalData?.url1} target="_blank" rel="noreferrer">{modalData?.url1}</a></td></tr>
                <tr><td>URL</td><td><a href={modalData?.url2} target="_blank" rel="noreferrer">{modalData?.url2}</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrgChartTree;
