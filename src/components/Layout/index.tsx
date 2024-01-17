import React from "react";

// Layout components
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <MobileNavigation />
    </React.Fragment>
  );
};

export default Layout;
