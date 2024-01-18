import React from "react";

// Components
import Copyright from "@/components/Copyright";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      {children}
      <Copyright />
    </React.Fragment>
  );
};

export default AuthLayout;
