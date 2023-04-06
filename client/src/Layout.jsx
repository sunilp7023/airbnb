import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    
    <div className="py-4 px-4 flex flex-col min-h-screen  mx-auto">
      <Header />
      <Outlet />
      <Footer />
   </div>
  );
}