import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.body.classList.add("current-page-page-detail");

    return () => {
      document.body.classList.remove("current-page-page-detail");
    };
  }, []);

  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-12">
            <div id="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">
                    <span property="name">
                      <span>Anasayfa</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <i></i>
                    <span>Hakkımızda</span>
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
                      Azərbaycanda ilk dəfə olaraq Dentalshop.az internet mağaza saytı vasitəsi ilə
                      hər növ stomatoloji material və avadanlıqların satışını Sizin xidmətinizə
                      təqdim edirik. İnternet mağazada stomatoloji materialları və avadanlıqları
                      sifariş etməklə, Siz öz dəyərli vaxtınıza və büdcənizə qənaət etmiş
                      olacaqsınız. Həmçinin saytımızdan yararlanaraq Siz stomatoloji yeniliklər
                      barəsində məlumatlar əldə edə bilərsiniz. Hər gün 24 saat ərzində istənilən
                      sifarişinizi edə bilərsiniz. Sizin sifarişiniz, sifariş etdiyiniz gün ərzində
                      və ya Sizin üçün müvafiq istənilən gündə ünvanınıza çatdırılacaq. Bu barədə
                      Sizinlə telefon əlaqəsi saxlayan operatorla razılığa gələ bilərsiniz.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
