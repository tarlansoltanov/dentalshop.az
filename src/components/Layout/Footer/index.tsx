import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Assets
import {
  LogoPNG,
  FacebookIconSVG,
  InstagramIconSVG,
  LinkedinIconSVG,
  WhatsappIconSVG,
  YoutubeIconSVG,
  NewsletterIconSVG,
  CashSVG,
  VisaSVG,
  MasterCardSVG,
  SecureSVG,
} from "@/assets/images";

// Components
import Copyright from "@/components/Copyright";

const Footer = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-row-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                {/* Logo */}
                <div className="footer-logo">
                  <Link to="/" aria-label="Logo">
                    <img src={LogoPNG} alt="Logo" />
                  </Link>
                </div>

                {/* Newsletter */}
                <div className="newsletter">
                  <div className="newsletter-title">
                    <div>
                      Elektron bülletenimizə e-poçt ünvanınızla üzv ola
                      bilərsiniz.
                    </div>
                  </div>

                  <div className="newsletter-content">
                    <form>
                      <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        placeholder="E-poçt ünvanınızı yazın"
                      />

                      <button type="submit" aria-label="Submit">
                        <img src={NewsletterIconSVG} alt="Icon Newsletter" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 offset-xl-1">
                <div
                  className="footer-menu-container"
                  data-menu-type="accordion">
                  <div className="row">
                    {/* Company */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div
                          className="footer-menu-title"
                          onClick={(e) => {
                            e.currentTarget.parentElement?.classList.toggle(
                              "active"
                            );
                          }}>
                          Şirkət
                        </div>
                        <div className="footer-menu-content">
                          <ul>
                            <li>
                              <Link to="/about">Haqqımızda</Link>
                            </li>

                            <li>
                              <Link to="/insurance">Zəmanət</Link>
                            </li>

                            <li>
                              <Link to="/payment">Ödəniş və kredit</Link>
                            </li>

                            <li>
                              <Link to="/delivery">Çatdırılma</Link>
                            </li>

                            <li>
                              <Link to="/contact">Əlaqə</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Help */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div
                          className="footer-menu-title"
                          onClick={(e) => {
                            e.currentTarget.parentElement?.classList.toggle(
                              "active"
                            );
                          }}>
                          Alış-veriş
                        </div>

                        <div className="footer-menu-content">
                          <ul>
                            <li>
                              <Link to="/free-zone">Azad Zona</Link>
                            </li>
                            <li>
                              <Link to="/products?is_new=true">
                                Yeni Gələnlər
                              </Link>
                            </li>
                            <li>
                              <Link to="/products?discount=true">
                                Endirimli Məhsullar
                              </Link>
                            </li>
                            <li>
                              <Link to="/catalog">Katalog</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Account */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div
                          className="footer-menu-title"
                          onClick={(e) => {
                            e.currentTarget.parentElement?.classList.toggle(
                              "active"
                            );
                          }}>
                          Hesab
                        </div>
                        <div className="footer-menu-content">
                          <ul>
                            {isAuth ? (
                              <React.Fragment>
                                <li>
                                  <Link to="/account">Mənim Hesabım</Link>
                                </li>
                                <li>
                                  <Link to="/account/orders">
                                    Mənim Sifarişlərim
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/auth/logout">Hesabdan çıxış</Link>
                                </li>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <li>
                                  <Link to="/auth/login">Giriş</Link>
                                </li>
                                <li>
                                  <Link to="/auth/register">Qeydiyyat</Link>
                                </li>
                              </React.Fragment>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-row-2">
          <div className="container">
            <div className="row">
              {/* Social */}
              <div className="col-lg-4">
                <div className="footer-social">
                  <div className="footer-social-content">
                    <div>
                      <a
                        className="footer-social-facebook"
                        href="https://facebook.com"
                        target="_blank">
                        <img src={FacebookIconSVG} alt="Facebook Icon" />
                      </a>
                    </div>

                    <div>
                      <a
                        className="footer-social-instagram"
                        href="https://instagram.com"
                        target="_blank">
                        <img src={InstagramIconSVG} alt="Instagram Icon" />
                      </a>
                    </div>

                    <div>
                      <a
                        className="footer-social-youtube"
                        href="https://youtube.com"
                        target="_blank">
                        <img src={YoutubeIconSVG} alt="Youtube Icon" />
                      </a>
                    </div>

                    <div>
                      <a
                        className="footer-social-linkedin"
                        href="https://linkedin.com"
                        target="_blank">
                        <img src={LinkedinIconSVG} alt="Linkedin Icon" />
                      </a>
                    </div>

                    <div>
                      <a
                        className="footer-social-whatsapp"
                        href="https://whatsapp.com"
                        target="_blank">
                        <img src={WhatsappIconSVG} alt="Whatsapp Icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="col-lg-4">
                <div className="copyright">
                  {new Date().getFullYear()} Dentalshop - Bütün hüquqlar
                  qorunur.
                </div>
              </div>

              {/* Card Payment */}
              <div className="col-lg-4">
                <div className="footer-ssl">
                  <div className="secure text-center text-lg-left">
                    <img width={50} src={VisaSVG} alt="" />
                    <img width={50} src={MasterCardSVG} alt="" />
                    <img width={50} src={CashSVG} alt="" />
                    <img width={50} src={SecureSVG} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Copyright />
    </React.Fragment>
  );
};

export default Footer;
