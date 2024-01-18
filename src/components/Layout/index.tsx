import React from "react";

// Layout components
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Footer from "./Footer";
import WhatsappOrder from "./WhatsappOrder";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <WhatsappOrder />
      <MobileNavigation />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
