import React from "react";

const Progress = () => {
  return (
    <section id="join-us" className="app-process section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Collaborate
                <span className="right"></span>
              </h6>
              <h2>Become a part of our amazing team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-config"></span>
              <h5>Build CherishOS</h5>
              <a href="https://github.com/CherishOS/android_manifest" span className="step-number">Step 01</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-download"></span>
              <h5>Release Build</h5>
              <a href="https://github.com/CherishOS/android_manifest/blob/twelve/assets/xda.md" span className="step-number">Step 02</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-add-user"></span>
              <h5>Request Maintainership</h5>
              <a href="https://forms.gle/BWg1mPxHNv2W8eK79" span className="step-number">Step 03</a>              
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>    
  );
};

export default Progress;
