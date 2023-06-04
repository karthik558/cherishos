import React from "react";
import DownloadSidebar from "../DownloadSidebar/download-sidebar";
import DownloadList from "../DownloadList/download-list";

const DownloadPage = () => {
  return (
    <section className="download section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <DownloadSidebar />
          </div>
          <div className="col-lg-9">
            <DownloadList /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadPage;
