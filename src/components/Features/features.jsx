import React from "react";

const Features = () => {
  return (
    <section id="features" className="app-services section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Features
                <span className="right"></span>
              </h6>
              <h2>Thrilling CherishOS: Unleashing Exciting Features!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-paint"></span>
                </div>
                <div className="text-tit">
                  <h5>Aesthetic Interface</h5>
                </div>
              </div>

              <p>
                Immerse yourself in a visually stunning and modern user interface tailored for a delightful experience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-rocket"></span>
                </div>
                <div className="text-tit">
                  <h5>Responsive UI</h5>
                </div>
              </div>

              <p>
                Enjoy a seamless and adaptive user experience across devices, ensuring optimal performance and usability.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-refresh-cloud"></span>
                </div>
                <div className="text-tit">
                  <h5>Up-To-Date</h5>
                </div>
              </div>

              <p>
                Stay at the forefront of innovation with the latest features and advancements in our AOSP-based project.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sm-mb50">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-headphones"></span>
                </div>
                <div className="text-tit">
                  <h5>24/7 Support</h5>
                </div>
              </div>

              <p>
                Our dedicated team is available round-the-clock to assist you with any inquiries or technical support needs.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sm-mb50">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-mail-open-file"></span>
                </div>
                <div className="text-tit">
                  <h5>Opensource</h5>
                </div>
              </div>

              <p>
                Embrace the spirit of collaboration and customization with our fully open-source AOSP project.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <div className="item-tit mb-15">
                <div className="icon">
                  <span className="pe-7s-key"></span>
                </div>
                <div className="text-tit">
                  <h5>Secure</h5>
                </div>
              </div>

              <p>
                Prioritizing your privacy and data protection, our AOSP project incorporates robust security measures.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default Features;
