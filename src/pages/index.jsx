import React from "react";
import Head from "next/head";
import DarkTheme from "../layout/Dark";
import NavBar from "../components/NavBar/navbar";
import Header from "../components/Header/header";
import Features from "../components/Features/features";
import Screenshots from "../components/Screenshots/screenshots";
import Collaborate from "../components/Collaborate/collaborate";
import Teams from "../components/Teams/Teams";
import Footer from "../components/Footer/footer";
import FAQ from "../components/Faq/faq";

const Home = () => {
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
        <Header />
        <div className="circle-blur"></div>        
        <Features />
        <Screenshots />        
        <Teams />
        <Collaborate />
        <FAQ />
        <Footer />        
      </DarkTheme>      
    </>
  );
};

export default Home;
