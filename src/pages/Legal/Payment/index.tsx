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
                  <h1>Ödəniş və kredit</h1>

                  <h4>SİFARİŞİNİZİ NECƏ ÖDƏMƏLİ?</h4>

                  <h4>Sifarişiniz üçün ödəniş edə bilərsiniz:</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Mövcud ödəniş üsulları:
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Ödəniş nağd və bank köçürməsi, o cümlədən kart hesabına,
                      həmçinin çatdırılma zamanı nağd şəkildə mümkündür.
                      Sifarişinizi verərkən uyğun üsulu seçə bilərsiniz, lakin
                      əvvəlcə aşağıdakı məlumatları oxuyun - bəzi ödəniş növləri
                      müəyyən şərtlərə riayət etməyi tələb edir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>Nağd ödəniş:</span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Yalnız Bakıda kuryer çatdırılma xidmətindən istifadə
                      etsəniz mümkündür. Bu halda məbləğ malı əldə etdikdən
                      sonra ödənilir.Yalnız Bakı daxilində sifariş verdikdə
                      mövcuddur. Çatdırılmada nağd pul seçimi yalnız 30 AZN-dən
                      yuxarı sifarişlər üçün mövcuddur. Yəni ödəniş məbləği 30
                      AZN-dən az olan mallar əvvəlcədən ödəniş əsasında
                      göndəriləcək.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Şirkətinizin bank hesabından nağdsız ödənişlə
                      (qaimə-fakturanı əvvəlcədən sifariş edin). ≥300 AZN
                      dəyərində sifarişlər üçün uyğundur.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      IBAN məlumatlarından istifadə etməklə - cari hesabınıza
                      mədaxil etmək üçün ən yaxın bank filialına, bank
                      terminalına və ya ibox-a baş çəkərək. Və ya hər hansı
                      mobil bank proqramından istifadə edin (smartfon, planşet
                      və ya kompüter, planşetdə quraşdırılmış).
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      <b>(!)</b> * Bəzi hallarda, xüsusilə fərdi sifariş üçün
                      təklif olunan mallar üçün tam və ya qismən ilkin ödəniş
                      tələb olunacaq.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Mövcudluğu təsdiqləndikdən və ödəniş üçün hesab-faktura
                      alındıqdan sonra 2 iş günü ərzində (sifarişin təsdiq
                      olunduğu gün nəzərə alınmır; iş günü hesab olunur) rezerv
                      edilmiş məhsul üçün ödənişin həyata keçirilməsi zərurətinə
                      <b>(!)</b> diqqətinizi cəlb edirik. bank günü). Göstərilən
                      vaxt ərzində ödəniş alınmazsa, Dental Shop :) mağazası
                      rezervasiyanın saxlanmasına və anbarda lazımi miqdarda
                      malların olmasına cavabdeh deyil və bu sifarişi birtərəfli
                      qaydada ləğv etmək hüququnu özündə saxlayır (bu halda
                      ödəniş alındı ödənişin geri qaytarılması üçün düzgün
                      doldurulmuş ərizə alındıqdan sonra 5 iş günü ərzində
                      alıcıya geri qaytarılır).
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Onu da diqqətinizə çatdırırıq ki <b>(!)</b> Sizin
                      rahatlığınız üçün cari məzənnə dəyişdikdə formalaşmış
                      sifariş dəyərə uyğunlaşdırılmır. Alıcı bu sifarişi 2 iş
                      günü ərzində ödəməyi öhdəsinə götürür.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      DİQQƏT <b>(!)</b> MİNİMUM İCAZƏ VERİLƏN SİFARİŞ MƏBLƏĞİ 30
                      AZN-DİR.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      ƏHƏMİYYƏTLİ <b>(!)</b> Sifariş verərkən alıcı “Sifariş
                      ver” düyməsini sıxmaqla avtomatik olaraq SİFARİŞ / ÖDƏNİŞ
                      / ÇATDIRILMA / ZƏMANƏT bəndlərində göstərilən şərtləri
                      oxuduğunu və qəbul etdiyini təsdiq edir və satınalma
                      şərtləri ilə razılaşır.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      DİQQƏT <b>(!)</b> Ödəniş yalnız əvvəlcədən sifariş edilmiş
                      hesab-fakturaya əsasən aparılmalıdır.
                    </span>
                  </p>

                  <h4>Malların dəyişdirilməsi və qaytarılması</h4>

                  <h4>
                    Veb saytımızda malları qaytarmaq və ya dəyişdirmək üçün sizə
                    lazımdır:
                  </h4>
                  <ol>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        “İstehlakçıların Hüquqlarının Müdafiəsi” haqqında qanuna
                        uyğun olaraq satınalma tarixindən 14 gündən çox
                        olmamasına əmin olun;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Menecerimizlə əlaqə saxlayın və geri qayıtma səbəbini
                        göstərin;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Malların dəyişdirilməsinin/qaytarılmasının sizin üçün
                        necə rahat olacağını müəyyənləşdirin; (malların satıcıya
                        daşınması (geri qaytarılması) üçün ödəniş alıcının
                        hesabına həyata keçirilir)
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Menecerə vəsaiti qaytarmağın əlverişli yolunu göstərin;
                      </span>
                    </li>
                  </ol>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Məhsullar geri qaytarıla bilməz, əgər:
                    </span>
                  </p>
                  <ol>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        İstifadə olunurdusa;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Məhsulun qablaşdırması əskik və ya zədələnmişdirsə;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Məhsulda görünən texniki zədə varsa;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Qəbz və zəmanət kartı yoxdursa.
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Nəzərə alın ki, malların daşınması və pul köçürməsi ilə
                        bağlı pullar geri qaytarılmır.
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
