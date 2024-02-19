import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Loader from "@/components/Loader";

// Helpers
import { getAccessToken, getRefreshToken } from "@/helpers/token";

// Actions
import { refreshToken, verifyToken } from "@/store/actions";

interface Props {
  children: React.ReactNode;
}

export const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <React.Fragment>{children}</React.Fragment>;
};

export const Authmiddleware = ({ children }: Props) => {
  const { isAuth, status } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const checkAuth = async (access: string, refresh: string) => {
    if (access) {
      dispatch(verifyToken(access));
      return;
    } else if (refresh) {
      dispatch(refreshToken(refresh));
      return;
    }
  };

  useEffect(() => {
    const access = getAccessToken();
    const refresh = getRefreshToken();

    if (!isAuth && (access || refresh)) checkAuth(access, refresh);
  }, [dispatch]);

  if (status.loading) return <Loader />;

  return <React.Fragment>{children}</React.Fragment>;
};
