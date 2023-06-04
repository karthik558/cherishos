import React, { useState } from "react";
import deviceData from "../../data/device.json";

const DownloadSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const tags = [...new Set(deviceData.map((device) => device.tag))];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDevices = deviceData.filter((device) => {
    const searchValue = searchQuery.toLowerCase();
    return (
      device.tag.toLowerCase().includes(searchValue) ||
      device.info.title.toLowerCase().includes(searchValue) ||
      device.info.dev_code.toLowerCase().includes(searchValue)
    );
  });

  const sidebarItems = filteredTags.map((tag) => {
    const count = filteredDevices.filter((device) => device.tag === tag).length;
    return (
      <li key={tag}>
        <a href="#0">
          {tag} <span>{count}</span>
        </a>
      </li>
    );
  });

  return (
    <div className="sidebar md-mb50">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <div className="search mb-30">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  name="device"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button>
                  <span className="icon pe-7s-search"></span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-12 col-md-6">
          <div className="box gat mb-30">
            <h6 className="title mb-30">Devices</h6>
            <ul>{sidebarItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSidebar;
