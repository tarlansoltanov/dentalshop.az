import React from "react";

// Assets
import {
  LogoPNG,
  FacebookIconSVG,
  InstagramIconSVG,
  LinkedinIconSVG,
  PinterestIconSVG,
  TwitterIconSVG,
  WhatsappIconSVG,
  YoutubeIconSVG,
  NewsletterIconSVG,
} from "@/assets/images";

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-row-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                {/* Logo */}
                <div className="footer-logo">
                  <a href="#" aria-label="Logo">
                    <img src={LogoPNG} alt="Logo" />
                  </a>
                </div>

                {/* Newsletter */}
                <div className="newsletter">
                  <div className="newsletter-title">
                    <div>Elektron bülletenimizə e-poçt ünvanınızla üzv ola bilərsiniz.</div>
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
                <div className="footer-menu-container" data-menu-type="accordion">
                  <div className="row">
                    {/* Company */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div className="footer-menu-title">Şirkət</div>
                        <div className="footer-menu-content">
                          <ul>
                            <li>
                              <a href="#">Haqqımızda</a>
                            </li>

                            <li>
                              <a href="#">Əlaqə</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Help */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div className="footer-menu-title">Alış-veriş</div>
                        <div className="footer-menu-content">
                          <ul>
                            <li>
                              <a href="#">Mesafeli Satış Sözleşmesi</a>
                            </li>
                            <li>
                              <a href="#">Gizlilik ve Güvenlik</a>
                            </li>
                            <li>
                              <a href="#">İptal İade Koşullari</a>
                            </li>
                            <li>
                              <a href="#">Kişisel Veriler Politikası</a>
                            </li>
                            <li>
                              <a href="#">Endirimlər</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Account */}
                    <div className="col-md-4">
                      <div className="footer-menu">
                        <div className="footer-menu-title">Hesab</div>
                        <div className="footer-menu-content">
                          <ul>
                            <li>
                              <a href="#">Qeydiyyat</a>
                            </li>
                            <li>
                              <a href="#">Giriş</a>
                            </li>
                            <li>
                              <a href="#">Şifrəmi Unutdum</a>
                            </li>
                            <li>
                              <a href="#">Hesabımı Sil</a>
                            </li>
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
                      <a className="footer-social-facebook" href="#" target="_blank">
                        <img src={FacebookIconSVG} alt="Facebook Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-twitter" href="#" target="_blank">
                        <img src={TwitterIconSVG} alt="Twitter Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-instagram" href="#" target="_blank">
                        <img src={InstagramIconSVG} alt="Instagram Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-youtube" href="#" target="_blank">
                        <img src={YoutubeIconSVG} alt="Youtube Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-pinterest" href="#" target="_blank">
                        <img src={PinterestIconSVG} alt="Pinterest Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-linkedin" href="#" target="_blank">
                        <img src={LinkedinIconSVG} alt="Linkedin Icon" />
                      </a>
                    </div>

                    <div>
                      <a className="footer-social-whatsapp" href="#" target="_blank">
                        <img src={WhatsappIconSVG} alt="Whatsapp Icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="col-lg-4">
                <div className="copyright">
                  {new Date().getFullYear()} Dentalshop - Bütün hüquqlar qorunur.
                </div>
              </div>

              {/* Card Payment */}
              <div className="col-lg-4">
                <div className="footer-ssl">
                  <div className="secure text-center text-md-left">
                    <i className="fab fa-cc-mastercard" aria-hidden="true"></i>
                    <i className="fab fa-cc-visa" aria-hidden="true"></i>
                    <i className="fab fa-cc-amex" aria-hidden="true"></i>
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="codeshift">
        <a href="https://www.codeshift.az" target="_blank" title="CodeShift" rel="noopener">
          CodeShift<sup>®</sup>
        </a>{" "}
        şirkəti tərəfindən hazırlanmışdır.
      </div>
    </React.Fragment>
  );
};

export default Footer;
