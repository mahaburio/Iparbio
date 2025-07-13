import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "orgchart";

import dataSources from "./DataSources.js"; // Move your dataSources object to this file

const OrgChartTree = () => {
  const chartContainerRef = useRef(null);
  const [currentBC, setCurrentBC] = useState("BC5-401");
  const [zoomLevel, setZoomLevel] = useState(1);
  const originalData = useRef(JSON.parse(JSON.stringify(dataSources)));
  
  
  let zoomTimer = useRef(null);

  const filterLevels = (node, depth, maxDepth) => {
    if (depth >= maxDepth - 1) return { ...node, children: [] };
    return {
      ...node,
      children: node.children
        ? node.children.map((child) => filterLevels(child, depth + 1, maxDepth))
        : [],
    };
  };

  const createNodeContent = (data) => {
    return $(`
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
            <div class="lft-vl"><span>${data.leftTotal}</span><a href="#" class="crl">+</a></div>
            <div class="center"><span class="ar-up"><i class="ri-arrow-up-line"></i></span><button class="make-top">Make Top</button></div>
            <div class="rgt-vl"><span>${data.rightTotal}</span><a href="#" class="crl">+</a></div>
          </div>
        </div>
      </div>
    `);
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
          <div className="make-top-pst">
            <i className="ri-arrow-up-s-line"></i>
            <span>Make Top</span>
          </div>
          <div className="back-top-pst" onClick={resetChart}>
            <i className="ri-skip-up-line"></i>
            <span>Back to Top</span>
          </div>
        </div>

        <div id="chart-container" ref={chartContainerRef}></div>

        <div className="reset-sec">
          <div className="zoomin-btn">
            <div
              className="zoomin"
              onMouseDown={() => {
                zoomTimer.current = setInterval(() => setZoomLevel((z) => z + 0.1), 100);
              }}
              onMouseUp={() => clearInterval(zoomTimer.current)}
              onClick={() => setZoomLevel((z) => z + 0.1)}
            >
              +
            </div>
          </div>

          <button className="reset-btn" onClick={() => setZoomLevel(1)}>
            Reset
          </button>

          <div className="zoomout-btn">
            <div
              className="zoomout"
              onMouseDown={() => {
                zoomTimer.current = setInterval(() =>
                  setZoomLevel((z) => (z > 0.2 ? z - 0.1 : z)),
                100);
              }}
              onMouseUp={() => clearInterval(zoomTimer.current)}
              onClick={() => setZoomLevel((z) => (z > 0.2 ? z - 0.1 : z))}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChartTree;