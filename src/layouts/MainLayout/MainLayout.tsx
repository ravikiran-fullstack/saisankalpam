import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BannerTop from "../../components/bannerTop/BannerTop";
import BannerHome from "../../components/bannerHome/BannerHome";
import BannerFooter from "../../components/bannerInFooter/BannerFooter";

import "../../index.css";


const MainLayout = () => {
  return (
    <div className="container">
      <BannerTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <BannerHome />
      <BannerFooter />
      <Footer />
    </div>
  );
};

export default MainLayout;
