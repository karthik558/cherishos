import React from "react";
import Link from "next/link";

const DownloadHeader = ({ title, links }) => {
  return (
    <header
      className="page-app-header valign bg-img"
      data-overlay-dark="8"
      // style={{ backgroundImage: "url(/img/p1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1>{title}</h1>
                {/* <div className="links">
                  {links.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <Link href={item.url} >
                        {item.name}
                      </Link>
                      {index + 1 != links.length ? (
                        <span className="icon pe-7s-angle-right"></span>
                      ) : (
                        ""
                      )}
                    </React.Fragment>
                  ))}
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DownloadHeader;
