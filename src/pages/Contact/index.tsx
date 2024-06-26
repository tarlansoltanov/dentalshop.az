import { BankLogo } from "@/assets/images";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-12">
            <div className="contentbox-header">
              <h4>Əlaqə Məlumatlarımız</h4>
            </div>

            <div className="contentbox-body">
              <div className="list-group list-group-flush contact-us">
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Firma Adı</div>
                    <div className="col-12 col-lg-4">Dental Shop</div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Firma Resmi Adı</div>
                    <div className="col-12 col-lg-4">Stomfarm MMC</div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Səlahiyyətli şəxs</div>
                    <div className="col-12 col-lg-4">Elnur Abasov</div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Telefon 1</div>
                    <div className="col-12 col-lg-4">
                      <a href="tel:+994505115141">+994 (50) 511 51 41</a>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Telefon 2</div>
                    <div className="col-12 col-lg-4">
                      <a href="tel:+994705115141">+994 (70) 511 51 41</a>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Telefon 3</div>
                    <div className="col-12 col-lg-4">
                      <a href="tel:+994775115141">+994 (77) 511 51 41</a>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Telefon 4</div>
                    <div className="col-12 col-lg-4">
                      <a href="tel:+994105115141">+994 (10) 511 51 41</a>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">E-mail</div>
                    <div className="col-12 col-lg-4">
                      <a href="mailto:info@dentalshop.az">info@dentalshop.az</a>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Adres</div>
                    <div className="col-12 col-lg-4">
                      Nərimanov Rayonu, Oruc Əliyev küçəsi 30/6 Blok 78, Mənzil
                      26A
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Ölkə</div>
                    <div className="col-12 col-lg-4">Azərbaycan</div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Şəhər</div>
                    <div className="col-12 col-lg-4">Bakı</div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-lg-3">Vergi №</div>
                    <div className="col-12 col-lg-4">2101026041</div>
                  </div>
                </div>
              </div>

              <div id="contact-custom-field">
                <ul>
                  <li>Əlaqə: info@dentalshop.az</li>

                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=994505115141&text=Salam&type=phone_number&app_absent=0"
                      target="_blank"
                      style={{ fontWeight: "bold", color: "rgb(0, 160, 0)" }}>
                      Whatsapp
                    </a>
                    : +9994 (50) 511 51 41 ilə əlaqə saxlamaq üçün{" "}
                    <a
                      href="https://api.whatsapp.com/send/?phone=994505115141&text=Salam&type=phone_number&app_absent=0"
                      target="_blank"
                      style={{ fontWeight: "bold", color: "rgb(0, 160, 0)" }}>
                      buraya
                    </a>
                    klik edin.
                  </li>
                </ul>

                <ul></ul>
              </div>

              <div className="contact-us banks">
                <div className="contentbox-sub-title mb-2">Bank Hesabı</div>

                <div className="contact-us-bank-item">
                  <div className="row">
                    <div className="col-12 col-md-2">
                      <div className="bank-logo">
                        <img src={BankLogo} alt="Kapital Bank" />
                      </div>
                    </div>

                    <div className="col-12 col-md-10">
                      <div className="bank-detail">
                        <strong>
                          IBAN: AZ11 AIIB 4006 0019 4408 2092 8108
                        </strong>
                        Hesab Sahibi: "STOMFARM" MMC. Hesap Növü: AZN Hesabı
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
