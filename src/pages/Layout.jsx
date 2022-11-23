import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
