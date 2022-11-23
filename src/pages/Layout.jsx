import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <TopNav />
        <Sidebar />
        <div class="content-wrapper">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
