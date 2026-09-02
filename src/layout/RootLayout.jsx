import react from "react";
import Navbar from "./components/common/Navbar";
import {Outlet, outlet} from "react-router-dom";
import Footer from "./components/common/Footer";

const RootLayout = () => {

  return (
    <div >
      <Navbar />
      <main >
     <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;          