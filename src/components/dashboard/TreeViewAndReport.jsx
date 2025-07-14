import React, { useState } from 'react';
import OrgChartTree from '../../components/enrollment/OrgChart';
import { dataSources, bcData, optionItems } from '../../utils/DataSources';
import Modal from '../../components/common/PopupModal';
import DisplayRowSelector from '../../components/enrollment/DisplayRow';
import EnrollmentNetworkReport from '../enrollment/EnrollmentNetworkReport';

const TreeViewAndReport = () => {
  const [activeTab, setActiveTab] = useState('tree');

  const [selectedTreeBC, setSelectedTreeBC] = useState('BC1-401');
  const [selectedReportBC, setSelectedReportBC] = useState('BC1-401');

  const treeBCList = Object.keys(dataSources);
  const reportBCList = Object.keys(bcData);

  const currentReportData = bcData[selectedReportBC] || [];

  const [showStructureModal, setShowStructureModal] = useState(false);

  const handleOpen = () => setShowStructureModal(true);
  const handleClose = () => setShowStructureModal(false);

  return (
    <div>


      <div className="main-content-sec mt-4">
        {/* Tree-specific BC buttons */}
        {activeTab === 'tree' && (
          <div className="sub-navigation mt-4">
            <div className="sub-title">Business Center (Tree)</div>
            <div className="btn-sec mt-2">
              {treeBCList.map((bc) => (
                <button
                  key={bc}
                  className={selectedTreeBC === bc ? 'activeBlackBtn' : ''}
                  onClick={() => setSelectedTreeBC(bc)}
                >
                  {bc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Report-specific BC buttons */}
        {activeTab === 'report' && (
          <div className="sub-navigation mt-4">
            <div className="sub-title">Business Center (Report)</div>
            <div className="btn-sec mt-2">
              {reportBCList.map((bc) => (
                <button
                  key={bc}
                  className={selectedReportBC === bc ? 'activeBlackBtn' : ''}
                  onClick={() => setSelectedReportBC(bc)}
                >
                  {bc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation tab switch */}
        <div className="sub-navigatermenu mt-3">
          <div className="sub-navigate">
            <a
              className={activeTab === 'tree' ? 'activeNavigateMenu' : ''}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('tree');
              }}
            >
              Volume tree (Genealogy *)
            </a>
            <span>/</span>
            <a
              className={activeTab === 'report' ? 'activeNavigateMenu' : ''}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('report');
              }}
            >
              Report
            </a>
          </div>

          {/* Edit structure only for Tree tab */}
          {activeTab === 'tree' && (
            <div
              className="edit-structure d-flex align-items-center gap-1"
              onClick={handleOpen}
            >
              <div className="icon-pen"><i className="ri-pencil-line"></i></div>
              <span>Edit Structure</span>
            </div>
          )}
        </div>

        <div className="">

          <div>
            {/* Render Tree */}
            {activeTab === 'tree' && (
              <OrgChartTree data={dataSources[selectedTreeBC]} currentBC={selectedTreeBC} />
            )}

            {/* Render Report */}
            {activeTab === 'report' && (
              <EnrollmentNetworkReport
                selectedBC={selectedReportBC}
                currentData={currentReportData}
              />
            )}
          </div>
        </div>
        {/* Edit Structure Modal */}
        <Modal isOpen={showStructureModal} onClose={handleClose} className="medium-modal">
          <div className="editStructure">
            <h5 className="main-head-title">Edit Structure</h5>
            <DisplayRowSelector optionItems={optionItems} />
            <div className="btn-sec text-end mt-3">
              <button className="tsp-btn" onClick={handleClose}>Cancel</button>
              <button className="black-btn black-btn-sm nextBtn">Apply</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TreeViewAndReport;
