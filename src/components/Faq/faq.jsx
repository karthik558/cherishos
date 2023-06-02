import React from "react";
import handleAccordion from "../../common/handleAccordion";

const Faq = () => {

  return (
    <section id="faq" className="app-faq section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Faqs
              </h6>
              <h2 className="mb-30">
                FAQ: Any questions on your mind? Frequently asked.
              </h2>              
              <a href="https://t.me/CherishOS_Chat" className="butn-gr rounded buton mt-30">
                <span>Support Group</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      When update?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      We typically release an update after Google publishes a Security Bulletin to the public. However, there are some edge cases that may block the release. If this happens, we will notify you through our Support Channels.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Can I root?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info active">
                    <p>
                      We do not recommend rooting your device, but you may do so if you wish. Please note that updating your device may remove root access, in which case you will need to root your device again.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Why my SafetyNet didnt pass?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      It is likely that you rooted your device and did not hide the root status, or you installed a modification framework like EdXposed.
                    </p>
                  </div>
                </div>

                <div
                  className="item"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Can I downgrade?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      We do not recommend using an older version of CherishOS because it may have compatibility issues or cause data loss. If you attempt to downgrade, you may lose your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Faq;
