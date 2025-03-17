import { Outlet } from "react-router-dom";
import Header from "../../components/website/Header";
import Footer from "../../components/website/Footer";


const LayoutWebsite = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
