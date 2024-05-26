import React from "react";

// Layout components
import Header from "./Header";
import Footer from "./Footer";
import WhatsappOrder from "./WhatsappOrder";
import MobileNavigation from "./MobileNavigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main id="main">{children}</main>
      <WhatsappOrder />
      <MobileNavigation />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
