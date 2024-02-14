import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { ScrollToTop };
