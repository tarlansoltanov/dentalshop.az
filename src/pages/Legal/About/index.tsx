import { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const About = () => {
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
                    <span>Haqqımızda</span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="contentbox-body">
              <div className="row">
                <div className="col-12">
                  <h1>"Dental Shop" stomatoloji material mağazası</h1>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Dental Shop Azərbaycanda İLK Stomotoloji onlayn satış
                      mağazasıdır. Onlayn mağazamızın əməkdaşları 2008-ci ildən
                      Azərbaycan stomatoloji bazarında fəaliyyət göstərirlər.
                      Onlayn mağazamızda malların satışı internet saytında
                      yerləşdirilən məhsul kataloquna uyğun olaraq məsafədən
                      həyata keçirilir. Alıcı müstəqil olaraq kataloqdan
                      məhsulları seçir və sifariş verir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Dental Shop Azərbaycanda İLK Stomotoloji onlayn satış
                      mağazasıdır.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Onlayn mağazamızın əməkdaşları 2008-ci ildən Azərbaycan
                      stomatoloji bazarında fəaliyyət göstərirlər.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Onlayn mağazamızda malların satışı internet saytında
                      yerləşdirilən məhsul kataloquna uyğun olaraq məsafədən
                      həyata keçirilir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Alıcı müstəqil olaraq kataloqdan məhsulları seçir və
                      sifariş verir.
                    </span>
                  </p>

                  <h4>
                    Dental Shop onlayn mağazasında məhsul almaq niyə sərfəlidir?
                  </h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Mal axtarışında ofisə getməyə ehtiyac yoxdur.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Sərgilərdə çoxsaylı satıcıların stendlərində məhsul
                      axtarıb tapmağa ehtiyac yoxdur.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Azərbaycan stomatoloji bazarında olan məhsulların
                      əksəriyyətini siz evdə olarkən belə sizin üçün əlverişli
                      vaxtda kompüterdən və ya mobil tətbiqdən istifadə edərək
                      mağazamıza sifariş edib ala bilərsiniz.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Saytda malların dəyəri, onların istehlak xassələri,
                      malların istifadəsi, eləcə də müxtəlif klinik hallarda
                      stomatoloji məhsulların istifadəsi ilə bağlı tövsiyələr
                      haqqında məlumat verilir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Saytda məhsullar kateqoriyalara bölünür. Hər bir
                      kateqoriya eyni təyinatlı, müxtəlif istehsalçıların
                      mallarını ehtiva edir. Qiymət və keyfiyyət baxımından sizə
                      uyğun məhsulları seçə bilərsiniz.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Malların çatdırılması və ödənişi sizin üçün əlverişli
                      şəkildə həyata keçirilir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Onlayn mağazamızda malların alınması vaxtınıza qənaət
                      edir.
                    </span>
                  </p>

                  <h4>
                    Daimi müştərilər üçün endirimlər sistemi təqdim olunur.
                    Daimi müştərilərə Promokod verilir.
                  </h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Dental Shop, əsas ixtisası stomatoloji avadanlıq, alətlər
                      və materialların satışı olan dinamik inkişaf edən
                      Azərbaycan şirkətidir. Baş ofisi Bakıda olan şirkət diş
                      həkimlərini ağız boşluğunun müxtəlif xəstəlikləri olan
                      xəstələrin müalicəsi zamanı lazım olan bütün lazımi dərman
                      və alətlərlə təmin etmək üçün bir neçə il əvvəl
                      yaradılmışdır.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Məhsul kataloqu müxtəlif ölkələrdə istehsal olunan
                      müxtəlif məhsullarla təmsil olunur. Stomatoloji məhsullar
                      stomatoloji kabinetlərə, klinikalara və yüksək keyfiyyətli
                      sertifikatlaşdırılmış dərmanlardan istifadə edərək yüksək
                      ixtisaslı tibbi yardım göstərən tibb mərkəzlərinə
                      yönəldilmişdir.
                    </span>
                  </p>

                  <h4>Dental məhsul çeşidi:</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Şirkətimiz ortodontiya, implantasiya, üz-çənə
                      cərrahiyyəsi, plastik periodontiya və peşəkar ağız
                      gigiyenası üçün geniş çeşiddə məhsullar təklif edir.
                    </span>
                  </p>

                  <h4>Kataloq aşağıdakı sahələrdə təqdim olunur:</h4>

                  <ol>
                    <li>
                      <span style={{ fontSize: "medium" }}>Avadanlıq;</span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>Materiallar;</span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>Ortodontiya;</span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Müalicə vasitələri;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Dezinfeksiya məhlulları;
                      </span>
                    </li>
                  </ol>

                  <h4>
                    Müştərilərin alış zamanı onlayn mağazamıza üstünlük
                    verməsinin səbəbləri:
                  </h4>

                  <ol>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Məhsulun mütləq təhlükəsizliyi;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Materialların tövsiyə olunan temperatur şəraitinə və
                        saxlama müddətinə riayət olunmasına ciddi nəzarət;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Bir nöqtədə tələb olunan həcmdə material almaq imkanı;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Sifarişlərin operativ şəkildə işlənməsi və istədiyiniz
                        yerə çatdırılması;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Yüksək səviyyəli xidmət və ixtisaslı məsləhətlərin
                        verilməsi;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Alış-veriş üçün sərfəli qiymətlər.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
