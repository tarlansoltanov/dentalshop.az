import { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const Insurance = () => {
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
                    <span>Zəmanət</span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="contentbox-body">
              <div className="row">
                <div className="col-12">
                  <h1>Zəmanət</h1>

                  <h4>Nəyə zəmanət veririk?</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Dental Shop onlayn mağazası brendlərin məhsullarını satır.
                      Biz yalnız keyfiyyətinə nəzarət etdiyimiz məhsulları
                      təqdim edirik. Beləliklə, etibarlı və davamlı məhsullar
                      əldə edirsiniz. Amma nəzarət nə qədər sərt olsa da, heç
                      bir alət qəfil xarab olmaqdan qorunmur. Bəzən baş verən
                      müəyyən istehlak materiallarının bərpası təmiri
                      ağırlaşdırır.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Müəyyən bir cihazın işləmə şərtlərinə düzgün əməl
                      olunarsa, zəmanət müddəti ərzində və hətta ondan sonra
                      uğursuzluq çox nadirdir. Nə olursa olsun, gözlənilməz və
                      xoşagəlməz vəziyyətə düşən diş həkimi üçün bu problemdir
                      və dərhal həll edilməlidir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      DentalShop müştərilərinin qayğısına qalır. Satılan bütün
                      avadanlıqlara istehsalçı tərəfindən zəmanət verilir. Biz
                      bütün zəmanət müddəti ərzində müştərilərimizə etibarlı
                      dəstək veririk. Biz yüksək ixtisaslı mütəxəssislər
                      tərəfindən aparılan texniki xidmət və təmir işləri üzrə
                      məsləhətləşmələrə cavabdehik.
                    </span>
                  </p>

                  <h4>Qaytarma və ya mübadilə: nə və nə vaxt mümkündür?</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Yanlış məhsul alsanız, onun dəyişdirilməsi 14 gün ərzində
                      mümkündür - satınalma günü nəzərə alınmır, bu, Azərbaycan
                      qanunvericiliyi ilə müəyyən edilir.
                    </span>
                  </p>

                  <h4>Məhsulun qaytarılması şərtləri aşağıdakılardır:</h4>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Orijinal təqdimatı və istehlak keyfiyyətləri ilə sübut
                      olunduğu kimi istifadə edilməmişdir;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Möhürləmə, etiketlər, qoruyucu filmlər və aksesuarlar
                      qırılmamış və zədələnməmişdir;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Satınalmanı təsdiq edən sənədlər var;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Stomatoloji cihazın geri qaytarılması alıcı tərəfindən
                      ödənilir.(bizim kuryer xidmətindən istifadə edilmədikdə)
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Geri qaytarılma yalnız qaytarma hərtərəfli yoxlanıldıqdan
                      sonra həyata keçiriləcək. Bu, başqa bir cihazla
                      dəyişdirilməyə də aiddir.
                    </span>
                  </li>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Vacibdir! Plombları və ya qablaşdırma materialları
                      zədələnmiş məhsullar satıcı tərəfindən QƏBUL EDİLMƏYƏCƏK.
                      Əgər məhsul standarta və ya sifarişə uyğun gəlmirsə və
                      yuxarıda təsvir edilən bütün qaydalara əməl olunubsa, biz
                      satınalma məbləğini geri qaytaracağıq.
                    </span>
                  </p>

                  <h4>İstifadə tarixləri:</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Bir məhsulun kifayət qədər rəf ömrü 6 ay və ya daha çox
                      hesab olunur. Bu halda, mağaza (öz mülahizəsinə görə) son
                      satış tarixi barədə istehlakçıya xəbərdarlıq etməyə borclu
                      deyil. Bu səbəbdən sualı menecerlə dəqiqləşdirməyi tövsiyə
                      edirik. Məhsulu satan şirkət hesabına geri qaytarmaq
                      olmaz.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      İstifadə müddəti ilə bağlı "şübhə doğuran" bir məhsul
                      kateqoriyası var. Buraya raf ömrü 5 aydan az olan
                      məhsullar daxildir. Dental Shop belə bir sifarişi
                      göndərməzdən əvvəl sizə xəbər verəcəkdir. Müştəri aldığı
                      ilə razı deyilsə, satan tərəfin hesabına dəyişdirmə
                      mümkündür. Məhsulu endirimli qiymətə, satışda və s.
                      alsanız, alıcı geri qaytarma/dəyişmə üçün ödəyir.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      “Kritik” rəf ömrü olan məhsullar 3 aydan az müddət ərzində
                      satılmalıdır. Mağaza işçiləri göndərilməzdən əvvəl bu
                      barədə müştəriyə məlumat verməlidirlər. Qaytarma/mübadilə
                      ilə bağlı əvvəlki paraqrafda olduğu kimi.
                    </span>
                  </p>

                  <h4>
                    Zəmanət müddəti ərzində və zəmanət müddəti bitdikdən sonra
                    təmir:
                  </h4>

                  <h4>
                    Texniki dəstək müddətində sıradan çıxan stomatoloji
                    avadanlıq aşağıdakı şərtlər daxilində təmir edilməli və ya
                    yeni, işlək cihazla əvəz edilməlidir:
                  </h4>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Kuponun və ya müqavilənin təqdim edilməsi;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Orijinal qablaşdırmanın olması;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Düzgün əməliyyat;
                    </span>
                  </li>

                  <li>
                    <span style={{ fontSize: "medium" }}>
                      Aparatın daşınması alıcının hesabınadır.
                    </span>
                  </li>

                  <h4>
                    Təmir öhdəlikləri bütün nasazlıqlara şamil edilmir. Zəmanət
                    siyahısına aşağıdakı zərərlər daxil deyil:
                  </h4>

                  <ol>
                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Istifadəçinin təqsiri üzündən təsadüfi;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>Mexaniki;</span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Ehtiyatsız əməliyyat nəticəsində;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Uyğun olmayan materiallar və ya hissələr səbəbindən;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Hissəciklərin struktura nüfuz etməsi nəticəsində;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Elektrik təchizatı şəbəkəsindəki dalğalanmalara görə;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Fors-majorun təsiri altında;
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        Normal aşınma və köhnəlmə nəticəsində.
                      </span>
                    </li>

                    <li>
                      <span style={{ fontSize: "medium" }}>
                        İstifadə edilmiş və texniki xidmət tələb edən alətlər
                        dezinfeksiya edilməli və avtoklavda saxlanılmalıdır.{" "}
                      </span>
                    </li>
                  </ol>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Vacibdir! Zəmanət kartı olmadan avadanlıq təmir edilə
                      bilməz. Əgər bağlamanızı aldığınız zaman onu tapmadınızsa,
                      zəhmət olmasa 14 gün ərzində whatsapp vasitəsilə bizimlə
                      əlaqə saxlayın. Məktubda cihazın nomenklaturasını və
                      seriya nömrəsini göstərin. Hər şeyi düzəldəcəyik və öz
                      hesabımıza göndərəcəyik. Üstəlik 2 həftəlik zəmanət əlavə
                      edəcəyik.
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      İstehsalçıdan və ya onun xidmət mərkəzindən cavab almaq
                      mümkün olmadıqda, DentalShop özü qərar verir. Zəmanətdən
                      sonrakı müddət ərzində qiymət cədvəlinə uyğun olaraq
                      cihazı təmir edəcəyik və ya ehtiyat hissələrini ödənişlə
                      təmin edəcəyik.
                    </span>
                  </p>

                  <h4>Dental Shop sizi problemlərinizlə tək qoymayacaq.</h4>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Seçiminiz üçün təşəkkür edirik!
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "medium" }}>
                      Xoş alış-verişlər. Biz qarşılıqlı faydalı əməkdaşlığa ümid
                      edirik.
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

export default Insurance;
