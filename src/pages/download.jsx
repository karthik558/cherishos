import React from "react";
import Head from "next/head";
import DarkTheme from "../layout/Dark";
import PageHeader from "../components/HeaderDownload/header-download";
import NavBar from "../components/DownloadNavBar/navbar";
import Footer from "../components/Footer/footer";
import DownloadHome from "../components/Download/download-home";

const Download = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DarkTheme mobileappstyle>
        <NavBar nr={navbarRef} />
        <div className="circle-blur"></div>
        <PageHeader       
          title="Downloads"
          // links={[
          //   { id: 1, name: "Home", url: "/" },
          //   {
          //     id: 2,
          //     name: "Download",
          //     url: "/download/",
          //   },
          // ]}
        />    
        <DownloadHome />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default Download;
