import { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const Delivery = () => {
  useEffect(() => {
    document.body.classList.add("current-page-page-detail");

    return () => {
      document.body.classList.remove("current-page-page-detail");
    };
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-12">
            <div id="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">
                    <span property="name">
                      <span>Ana Səhifə</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <span>
                    <i></i>
                    <span>Çatdırılma</span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="contentbox-body">
              <div className="row">
                <div className="col-12">
                  <h1>Çatdırılma</h1>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Biz Azərbaycanın hər bölgəsilə işləyirik, mümkün qədər tez
                      muddetdə sifarisləri göndəririk. Biz bir neçə çatdırılma
                      variantını - götürmə, kuryer və poçt, həmçinin müxtəlif
                      ödəniş variantlarını təklif edirik. Şərtlər aşağıda daha
                      ətraflı təsvir edilmişdir, müvafiq sütunda sifariş prosesi
                      zamanı təklif olunan variantlardan birini seçə bilərsiniz;
                      Satınalmanızı qeydiyyatdan keçirdikdən sonra əməkdaşımız
                      sizinlə əlaqə saxlayacaq və siz sifarişin göndərilməsi
                      üçün bütün detalları yenidən dəqiqləşdirə biləcəksiniz.
                      Çatdırılma və ödənişlə bağlı hər hansı sualınız olarsa,
                      hər zaman telefonla məsləhətçilərimizə müraciət edə
                      bilərsiniz - nömrələr saytın yuxarı hissəsində qeyd
                      olunub.
                    </span>
                  </p>
                  <h4>SİFARİŞİNİZİ NECƏ QƏBUL EDƏCƏKSİNİZ?</h4>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Sifarişinizi qəbul etməyin nə qədər rahat olduğunu özünüz
                      seçirsiniz.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      - Baş ofisə yaxınlaşaraq gəlib ala bilərsiniz. (ünvan
                      Nərimanov rayonu ərazisində yerləşir)
                    </span>
                  </p>

                  <h4>
                    Azərbaycan və bölgələrə sifarişlərin çatdırılma şərtləri:
                  </h4>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Kuryer vasitəsilə çatdırılma 2 cür mümkündür:
                    </span>
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        1. Sifariş 30 AZN’dən az olduqda yaxud təcili çatdırılma
                        lazım olduqda - Bu halda ödənişi alıcı tərəfin ödəməsi
                        şərtilə çatdırılma xidməti göstərən hər hansısa bir
                        şirkət vasitəsilə çatdırıla bilər.
                      </span>
                    </li>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        2. Çatdırılma kuryer xidmətimiz tərəfindən həyata
                        keçirilir. (Minimum sifariş 30 AZN olmalıdır.)
                      </span>
                    </li>
                  </ul>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Çatdırılma və ödənişin bütün təfərrüatları menecerlə
                      müzakirə olunur, o, alışınızı tamamladıqdan sonra sizinlə
                      əlaqə saxlayacaq. Lazım gələrsə, ağır yüklərin
                      qaldırılması üçün də onunla danışıqlar aparmalı
                      olacaqsınız.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Sifariş qəbul edildikdən sonra 24-48 saat ərzində
                      çatdırılma edilir. Bəzi hallarda çatdırılma vaxtları fərdi
                      olaraq müzakirə edilə bilər.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "medium" }}>
                      ƏHƏMİYYƏTLİ (!) Sifariş verərkən alıcı “Sifariş ver”
                      düyməsini sıxmaqla avtomatik olaraq SİFARİŞ / ÖDƏNİŞ /
                      ÇATDIRILMA / ZƏMANƏT bəndlərində göstərilən şərtləri
                      oxuduğunu və qəbul etdiyini təsdiq edir və satınalma
                      şərtləri ilə razılaşır.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
