import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// React Number Format
import { PatternFormat } from "react-number-format";

// Libphonenumber-js
import { parsePhoneNumber } from "libphonenumber-js";

// Components
import AuthLayout from "@/components/AuthLayout";

// Assets
import { LogoPNG } from "@/assets/images";

// Actions
import { register } from "@/store/actions";

const Register = () => {
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { errors, status, isAuth } = useSelector(
    (state: RootState) => state.auth
  );

  // Data
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    password: "",
    password_confirm: "",
  });

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!terms) return;
    dispatch(
      register({
        ...data,
        phone: parsePhoneNumber(data.phone, "AZ").number.slice(4),
      })
    );
  };

  const [termsModal, setTermsModal] = useState(false);
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <AuthLayout>
      <div className="signup-page-logo">
        <Link to="/">
          <img src={LogoPNG} alt="Logo" />
        </Link>
      </div>

      <div className="container">
        <div className="signup-container">
          <div className="contentbox-header">
            <h4>Qeydiyyatdan keçin...</h4>
          </div>

          <div className="contentbox-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="form-group row">
                <label
                  htmlFor="first_name"
                  className="col-12 col-lg-4 control-label">
                  Ad
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      value={data.first_name}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.first_name ? "invalid" : ""
                      }`}
                      required
                    />
                    <span className="required">*</span>
                  </div>

                  {errors?.first_name && (
                    <div>
                      <span className="text-danger">{errors.first_name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="form-group row">
                <label
                  htmlFor="last_name"
                  className="col-12 col-lg-4 control-label">
                  Soyad
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      value={data.last_name}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.last_name ? "invalid" : ""
                      }`}
                      required
                    />
                    <span className="required">*</span>
                  </div>

                  {errors?.last_name && (
                    <div>
                      <span className="text-danger">{errors.last_name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Birth Date */}
              <div className="form-group row">
                <label className="col-12 col-lg-4 control-label">
                  Doğum Tarixi
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="date"
                      name="birth_date"
                      value={data.birth_date}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.birth_date ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.birth_date && (
                    <div>
                      <span className="text-danger">{errors.birth_date}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="form-group row">
                <label
                  htmlFor="phone"
                  className="col-12 col-lg-4 control-label">
                  Telefon nömrəsi
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <PatternFormat
                      type="tel"
                      name="phone"
                      format="+994 (##) ###-##-##"
                      allowEmptyFormatting
                      mask="_"
                      className={`form-control ${
                        errors?.phone ? "invalid" : ""
                      }`}
                      placeholder="Telefon nömrəsi daxil edin"
                      value={data.phone}
                      onChange={handleChange}
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.phone && (
                    <div>
                      <span className="text-danger">{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="form-group row">
                <label
                  htmlFor="password"
                  className="col-12 col-lg-4 control-label">
                  Şifrə
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <div className="toggle-password">
                      <i className="fa fa-eye"></i>
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.password ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.password && (
                    <div>
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Password Confirm */}
              <div className="form-group row">
                <label
                  htmlFor="password_confirm"
                  className="col-12 col-lg-4 control-label">
                  Şifrə Təkrarı
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <div className="toggle-password">
                      <i className="fa fa-eye"></i>
                    </div>

                    <input
                      type="password"
                      name="password_confirm"
                      value={data.password_confirm}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.password_confirm ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.password_confirm && (
                    <div>
                      <span className="text-danger">
                        {errors.password_confirm}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group row signup-agreement">
                <div className="col-12 col-lg-8">
                  <div className="checkbox-custom">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={terms}
                      onChange={() => setTerms(!terms)}
                    />

                    <label htmlFor="agreement">
                      <a href="#" onClick={() => setTermsModal(true)}>
                        <u>Üzvlük müqaviləsini qəbul edirəm.</u>
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12 col-lg-9 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ backgroundColor: "#0b8ccd" }}
                    disabled={status.loading || !terms}>
                    {/* Qeydiyyat */}
                    Qeydiyyat
                  </button>
                </div>
              </div>
            </form>
          </div>

          {termsModal && (
            <div className="fancybox-container fancybox-is-open">
              <div className="fancybox-bg"></div>
              <div className="fancybox-inner">
                <div className="fancybox-stage">
                  <div className="fancybox-slide fancybox-slide--inline fancybox-slide--current fancybox-slide--complete">
                    <div
                      id="user-agreement-wrapper"
                      style={{ display: "inline-block" }}>
                      <div className="contentbox-header">
                        <h4>Üzvlük müqaviləsi</h4>
                      </div>
                      <p>
                        <strong>MALLARIN ALQI-SATQISI MÜQAVİLƏSİ</strong>
                      </p>
                      <ol>
                        <li>
                          <strong>ÜMUMİ MÜDDƏALAR</strong>
                          <ol>
                            <li>
                              Malların alqı-satqısına dair müqavilə (“Müqavilə”)
                              Azərbaycan Rеspublikasının qanunvеriciliyinə
                              əsasən təsis еdilmiş hüquqi şəxs, vеrgi
                              ödəyicisinin еyniləşdirmə nömrəsi 2101026041 оlan,
                              “STOMFARM ” MMC (“<u>Şirkət</u>”) ilə Alıcı
                              arasında Müqavilə üzrə Malların alınmasına görə
                              şərt və müddəaları müəyyən edir.
                            </li>
                            <li>
                              Alıcı, şəxsi kabinetdə qeydiyyatdan keçməklə,
                              Sifarişləri rəsmiləşdirməklə və ya telefon nömrəsi
                              ilə Verifikasiya olunmaqla Şirkətin saytındakı
                              bütün tətbiqlər və əlavə bölmələr üzrə Müqavilənin
                              tam mətni ilə razılaşır. Göstərilən hərəkətlərdən
                              hər hansı birinin yerinə yetirilməsi Alıcı ilə
                              Şirkət arasında müqavilənin bağlanmasını təsdiq
                              edən faktdır.
                            </li>
                            <li>
                              Bu Müqavilə ilə nəzərdə tutulan şərt və müddəalara
                              əlavə olaraq və onlara xələl gətirmədən, Alıcı
                              həmçinin Malların əldə edilməsi və onlardan
                              istifadə edilməsi ilə bağlı Şirkətin vaxtaşırı
                              olaraq təqdim edə biləcəyi hər hansı digər
                              təlimatlara və müəyyən edə biləcəyi şərt və
                              qaydalara riayət etməlidir.
                            </li>
                            <li>
                              Aksiyalar kimi həvəsləndirici tədbirlər
                              keçirildiyi təqdirdə, Şirkətin saytında
                              yerləşdirilən aksiyalar barəsində şərtlərdə
                              Sifarişin rəsmiləşdirilməsi və Malın qaytarılması
                              qaydasını tənzimləyən xüsusi müddəalar müəyyən
                              edilə bilər. Belə halda, aksiyaların şərtləri bu
                              Müqavilənin ayrılmaz hissəsi hesab olunur və
                              aksiyalarda iştirak edən şəxslərə şamil olunur.
                              Aksiyada Sifarişin rəsmiləşdirilməsi və/və ya
                              aksiyada iştirakın digər şərtlərinin yerinə
                              yetirilməsi Alıcının müvafiq aksiyanın şərtlərinə
                              razılığını bildirir.
                            </li>
                            <li>
                              Alış Məbləğinin ödənilməsi Elektron Vasitələr ilə
                              Satış Portalından və mobil proqram təminatı
                              əlavəsi (“mobile application”) üzərindən həyata
                              keçirilə bilər.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>TƏRİFLƏR</strong>
                          <ol>
                            <li>
                              Bu Müqavilənin mətnində, digər tərif verilmədikdə,
                              baş hərflərlə verilmiş anlayışlar aşağıda müəyyən
                              edilən mənanı daşıyır:
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                “<u>Elektron Vasitələr”</u>
                              </p>
                            </td>
                            <td>
                              <p>
                                Kompüter, [ağıllı mobil telefon, ağıllı
                                televiziya, kiosk və ya bunlarla
                                məhdudlaşdırılmamaqla], “onlayn” ödənişin
                                aparılması məqsədi ilə istifadə edilə bilən hər
                                hansı texnoloji vasitələr deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Hakimiyyət Orqanı</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                Azərbaycan Respublikasının dövlət hakimiyyəti və
                                inzibati orqanları, ədliyyə və məhkəmə orqanları
                                və təşkilatları, həmçinin onların inzibati-ərazi
                                və ya yerli bölmələri deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Mal(lar)</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                Şirkət ilə Alıcı arasında Alqı - satqı
                                Müqaviləsi üzrə təqdim edilən Mallar deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <u>“Çatdırılma xidməti”</u>
                              </p>
                            </td>
                            <td>
                              <p>
                                Şirkət ilə müqavilə əsasında Alıcılara
                                Sifarişlərin çatdırılması üzrə xidmətlər
                                göstərən üçüncü şəxs deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Şirkətin saytı</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                [<em>www._____.az</em>] ünvanı üzrə İnternet
                                qlobal kompüter şəbəkəsində yerləşən Şirkətin
                                rəsmi saytı deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Alıcı</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                Alqı - satqı Müqaviləsinə əsasən Malları satın
                                alan şəxs deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Alış Məbləği</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                Alqı - satqı Müqaviləsinə əsasən müəyyən
                                edilmiş, Şirkətə Mallar müqabilində ödənilən
                                haqq deməkdir;
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                “<u>Satış Portalı</u>”
                              </p>
                            </td>
                            <td>
                              <p>
                                Şirkətin saytı [və ya proqram təminatı]
                                vasitəsilə Elektron Vasitələrdən istifadə
                                etməklə Alqı - satqı Müqaviləsinə əsasən Alqı -
                                satqı paketinə nəzarəti və Alqı - satqı ilə
                                bağlı müəyyən əməliyyatların həyata keçirilə
                                biləcəyi internet məkanı (www._______) deməkdir.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <u>“Sifariş”</u>
                              </p>
                            </td>
                            <td>
                              <p>
                                Şirkətin saytında seçilmiş Malların siyahısının
                                göstərilən ünvana çatdırılması üçün Alıcının
                                lazımi qaydada rəsmiləşdirilmiş sorğusu
                                deməkdir.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                <u>“Verifikasiya”</u>
                              </p>
                            </td>
                            <td>
                              <p>
                                Müəyyən mobil telefon nömrəsinin mövcudluğunu və
                                konkret fiziki şəxsə mənsub olduğunu
                                müəyyənləşdirməyə imkan verən prosedur deməkdir.
                                Həmin prosedur nəticəsində Alıcıya verifikasiya
                                olunan telefon nömrəsinə təhkim edilmiş müəyyən
                                identifikasiya nömrəsi və şəxsi kabinet (bundan
                                sonra – “Hesab”) verilir.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <ol>
                        <li>
                          <strong>ALICININ VERİFİKASİYASI</strong>
                          <ol>
                            <li>
                              Şirkətin saytında qeydiyyatdan keçmək və/və ya
                              Sifariş vermək üçün Alıcı mobil telefon nömrəsi
                              ilə aşağıdakı Verifikasiya prosedurundan
                              keçməlidir:
                              <ul>
                                <li>
                                  xüsusi xanaya mobil telefon nömrəsini daxil
                                  etməli, sonra “Kodu Göndər” düyməsini basmalı;
                                </li>
                                <li>
                                  mobil telefon nömrəsi sahibinə SMS-lər və/və
                                  ya puş-bildirişlər vasitəsilə və/və
                                  smartfonlar üçün tətbiqlər və/ və ya
                                  messencerlər vasitəsilə və / və ya digər
                                  şəkildə Alıcı tərəfindən göstərilən mobil
                                  telefon nömrəsinə kod üçün nəzərdə tutulmuş
                                  sahəyə daxil ediləcək fərdi kod göndərilir;
                                </li>
                                <li>
                                  göndərilən və daxil edilən kod uyğun gəldikdə
                                  Verifikasiya müvəffəqiyyətlə aparılmış hesab
                                  olunur – mobil telefon nömrəsinin Hesabda
                                  və/və ya Sifarişin rəsmiləşdirilməsi
                                  mərhələsində Alıcı haqqında məlumatlarda
                                  (“Sizin məlumatlarınız” – “Adınız və
                                  soyadınız”) əks olunan müəyyən fiziki şəxsə
                                  məxsus olduğu müəyyən edilir.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Alıcının artıq Şirkətin saytında Hesabı varsa,
                              uğurlu Verifikasiyadan sonra həmin Hesaba
                              avtomatik giriş baş verir. Əks halda Alıcıya
                              mövcud Hesabdan elektron poçt ünvanı və şifrəni
                              daxil etmək və ya yeni Hesab yaratmaq təklif
                              olunur.
                            </li>
                            <li>
                              [Mobil telefon nömrəsi dəyişdirildikdə, Alıcı
                              “Telefon nömrəsi dəyişdirilmişdir” düyməsinə
                              basmaqla və Şirkətin saytında/mobil tətbiqdə
                              təlimatlara əməl etməklə Hesabdakı mobil telefon
                              nömrəsinin dəyişdirilməsi prosedurundan yararlana
                              bilər.]
                            </li>
                            <li>
                              Telefon nömrəsinin Verifikasiyası üçün göndərilən
                              birdəfəlik kod sadə elektron imzadır ki, onunla
                              Alıcı həmin telefon nömrəsinin Alıcıya məxsus
                              olduğunu və bu Şərtlərlə razılaşdığını təsdiq
                              edir.
                            </li>
                            <li>
                              Verifikasiyadan keçərək, Alıcı qeydiyyat zamanı
                              göstərilən elektron poçt ünvanına və / və ya
                              SMS-lər və/və ya puş-bildirişlər vasitəsilə və/və
                              smartfonlar üçün tətbiqlər və/ və ya messencerlər
                              vasitəsilə və / və ya digər şəkildə Alıcının
                              qeydiyyat və/ və ya Sifarişin rəsmiləşdirilməsi
                              zamanı göstərdiyi mobil telefon nömrəsinə
                              göndərilən, Sifarişin vəziyyəti, çatdırılma
                              şərtləri, Alıcının səbətində olan və / və ya Alıcı
                              tərəfindən “Seçilmiş mallar”a əlavə edilən,
                              həmçinin əldə edilmiş Mal haqqında servis
                              xarakterli məlumatların alınması, həmçinin
                              Şirkətin rəy bildirməsi xahişi ilə razılaşır.
                            </li>
                            <li>
                              Alıcı razılaşır ki, Alıcı bu Müqavilənin icrasının
                              təhlükəsizliyi və ya pozulması ilə bağlı, həmçinin
                              texniki xarakterli səbəblərdən onun Hesabına
                              müəyyən məhdudiyyətlər (o cümlədən, Hesabın bloka
                              salınması) tətbiq oluna bilər. Bundan əlavə, bu
                              Şərtləri qəbul edərkən, Alıcı Hesabındakı
                              məhdudiyyətlərin istənilən vaxt heç bir səbəb
                              göstərmədən və Alıcıya bildirişi verilmədən tətbiq
                              oluna biləcəyi ilə razılaşır.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>KOMMERSİYA BİLDİRİŞLƏRİ</strong>
                        </li>
                      </ol>
                      <div>
                        <ol>
                          <li>
                            Şirkətin saytında qeydiyyatdan keçməklə, Alıcı
                            reklam xarakterli mesajların (kommersiya
                            bildirişlərinin) (Alıcının göstərdiyi mobil telefon
                            nömrəsinə, elektron poçt ünvanına SMS-lər və/və ya
                            puş-bildirişlər formasında və/və smartfonlar üçün
                            tətbiqlər və/ və ya messencerlər və / və ya telefon
                            zəngləri vasitəsilə və / və ya digər şəkildə)
                            alınmasına ilkin razılığını bildirir. Reklam
                            xarakterli mesajlar almaq istəmədikdə,
                          </li>
                        </ol>
                      </div>
                      <ol>
                        <li>
                          <strong>ALIŞ MƏBLƏĞİ</strong>
                          <ol>
                            <li>
                              Alış Məbləği üzrə ödəniş həyata keçirildikdən və
                              Şirkətin hesabına daxil olduqdan sonra, Şirkətin
                              seçiminə əsasən, Şirkət tərəfindən Alıcıya, Alış
                              Məbləğinin ödənilməsi ilə bağlı, elektron poçt
                              ünvanına göndərilən məktub və ya Satış Portalında
                              ödəniş aparıldıqdan və başa çatdıqdan sonra
                              Alıcıya təqdim edilən bildiriş vasitəsi ilə
                              məlumat təqdim edilir.
                            </li>
                            <li>
                              Alış Məbləği üzrə bütün ödənişlər aşağıda
                              sadalanan növlərdən olan plastik kartların
                              birindən istifadə etməklə həyata keçirilməlidir: [
                              <em>
                                Visa, Visa Electron, MasterCard, Maestro, AMEX
                                və s. kimi kartları daxil edin
                              </em>
                              ].
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>MALIN DƏYƏRİNİN ÖDƏNİLMƏSİ</strong>
                          <ol>
                            <li>
                              Malların qiyməti Şirkətin saytında göstərilir.
                              Alıcı tərəfindən sifariş edilmiş Malların qiyməti
                              düzgün göstərilmədikdə, Şirkət ilk fürsətdə
                              Sifarişin yenidən baxılmış qiyməti ilə təsdiq
                              edilməsi və ya Sifarişin ləğv edilməsi üçün
                              Alıcıya məlumat verir. Alıcı ilə əlaqə saxlamaq
                              mümkün olmadıqda, müvafiq Sifariş ləğv edilmiş
                              sayılır. Əgər Sifariş ödənilibsə, Şirkət Sifariş
                              üçün ödənilmiş məbləği ödənişin həyata keçirildiyi
                              bank kartına və ya Mallar başqa üsullarla
                              ödənilmişdirsə, məbləğin Alıcının İstifadəçi
                              hesabında əks olunması yolu ilə 5 iş günü ərzində
                              Alıcıya qaytarır.
                            </li>
                            <li>
                              Şirkətin saytında göstərilən Malların qiyməti
                              Şirkət tərəfindən birtərəfli qaydada dəyişdirilə
                              bilər. Malların qiyməti, Sifarişin
                              rəsmiləşdirilməsinin son mərhələsində “Sifarişi
                              təsdiq et” düyməsini basarkən etibarlıdır. Qeyd
                              edilən andan etibarən, Alıcı tərəfindən sifariş
                              edilmiş Malların qiyməti dəyişdirilə bilməz.
                            </li>
                            <li>
                              Mallar əvvəlcədən ödənildikdə, Sifariş yalnız
                              alıcının pul vəsaitlərinin Şirkətin hesablaşma
                              hesabına köçürüldükdən sonra emal üçün qəbul
                              edilir.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>TƏHÜLKƏSİZLİK QAYDALARI</strong>
                          <ol>
                            <li>
                              Alıcı Satış Portalından istifadə məqsədi ilə
                              qeydiyyatdan keçərkən Alıcıya təqdim edilən
                              istifadəçi adı, şifrə və parolu hər zaman tam
                              məxfi saxlamalı və heç kəsə öz parollarını
                              (şifrələrini) açıqlamamalıdır. Alıcı öz istifadəçi
                              adı, parolunun (şifrəsinin) kiməsə məlum
                              olmasından şübhələnərsə və ya bu barədə xəbər
                              tutarsa, dərhal Şirkətə bu barədə məlumat verməli
                              və dərhal parolunu (şifrəsini) dəyişməlidir.
                              Alıcının parolları (şifrələri) özünəməxsus və
                              digər şəxslər tərəfindən asanlıqla tapıla və
                              ehtimal edilə bilməyən və ya əldə oluna bilməyən
                              olmalıdır.
                            </li>
                            <li>
                              Satış Portalı ilə əlaqədar istifadələr üçün
                              Alıcıya məxsus məlumatların təhlükəsizliyi
                              Alıcının normal təhlükəsiz istifadə qaydalarına
                              riayət etməsindən asılıdır və Alıcı ona məxsus
                              məlumatların təhlükəsizliyinin qorunmasına
                              məsuldur. Alıcı razılaşır ki, Alış Məbləğinin
                              ödənilməsi zamanı hər hansı məxfi məlumatın (kart,
                              bank hesabı və s.) kimsəyə açıqlanmamasının təmin
                              olunması üçün bütün lazımı tədbirlər görür.
                            </li>
                            <li>
                              Alıcı Alış Məbləğinin ödənilməsi ilə əlaqədar
                              Şirkətin tələb edə biləcəyi istənilən əlavə
                              təhlükəsizlik tələblərinə riayət etməyə borcludur.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>ŞİRKƏTİN HÜQUQLARI</strong>
                          <ol>
                            <li>
                              Şirkət aşağıdakı hüquqlara malikdir:
                              <ul>
                                <li>
                                  Alıcıya məxsus fərdi məlumatların işlənməsini
                                  həyata keçirmək və həmçinin Azərbaycan
                                  Respublikasının "Fərdi məlumatlar haqqında"
                                  Qanununa uyğun olaraq, bu Qaydaların
                                  məqsədlərinə münasibətdə fəxri məlumatlarının
                                  işlənməsi üçün üçüncü şəxsləri cəlb etmək;
                                </li>
                                <li>
                                  Alıcını əvvəlcədən xəbərdar etməklə,
                                  Müqaviləni ləğv etmək və ya qüvvəsini
                                  müvəqqəti dayandırmaq. Şirkət Müqavilənin
                                  ləğvi və ya qüvvəsinin müvəqqəti
                                  dayandırılması nəticəsində yarana bilən hər
                                  hansı itki və ziyana görə Alıcı qarşısında hər
                                  hansı məsuliyyət daşımır;
                                </li>
                                <li>
                                  Alıcının Alış Məbləğinə görə ödəniş
                                  məbləğlərini istifadəçi hesabından akseptsiz
                                  qaydaya silmək;
                                </li>
                                <li>
                                  Alıcıya əvvəlcədən xəbərdarlıq etmədən Alış
                                  Məbləğinin “onlayn” ödənilməsini aşağıdakı
                                  hallarda dayandırmaq (bloklaşdırmaq):
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Müqavilənin müddəaları Alıcı tərəfindən pozulduqda,
                          sözügedən pozuntular və onun fəsadları Alıcı
                          tərəfindən aradan qaldırılanadək;
                        </li>
                        <li>
                          Satış Portalında texniki nasazlıqlar yarandıqda, onlar
                          və fəsadları aradan qaldırılmasınadək;
                        </li>
                        <li>
                          Satış Portalında Şirkətin istifadə etdiyi avadanlığı
                          və (yaxud) proqram təminatını dəyişdirmək, texniki
                          xidmət üçün və s. zamanı – onun dəyişdirilməsi, xidmət
                          və s. üçün tələb olunan müddətdə;
                        </li>
                        <li>
                          Satış Portalının məxfiliyi pozulduğu halda, müvafiq
                          pozuntu və onun fəsadları aradan qaldırılanadək;
                        </li>
                        <li>
                          Satış Portalına Alıcı və ya Alıcının səlahiyyətli
                          nümayəndəsi olmayan şəxs tərəfindən daxil olunmasına
                          və (yaxud) istifadə edilməsinə şübhə yarandığı
                          təqdirdə, bu hallara Şirkəti qane edən dərəcədə
                          aydınlıq gətirilənədək;
                        </li>
                      </ol>
                      <p>
                        bu şərtlə ki, Şirkət bu hallarda, yarana bilən hər hansı
                        itki və ziyana görə Alıcı qarşısında hər hansı
                        məsuliyyət daşımır.
                      </p>
                      <ol>
                        <li>
                          <strong>Tərəflərİn məsulİyyətİ</strong>
                          <ol>
                            <li>
                              Müqavilələr üzrə öz öhdəliklərinin yerinə
                              yetirilməməsi və (yaxud) lazımınca yerinə
                              yetirilməməsi üçün Tərəflər Tətbiq Edilən
                              Qanunvericiliklə müəyyən edilmiş məsuliyyəti
                              daşıyır.
                            </li>
                            <li>
                              Şirkət yalnız özünün qəsdən etdiyi hərəkətlər
                              nəticəsində Alıcının məruz qaldığı birbaşa itki və
                              ya zərərlər üçün məsuliyyət daşıyır, bu şərtlə ki,
                              Şirkət heç bir halda hər hansı dolayı zərər və ya
                              itkilər, o cümlədən əldən çıxmış gəlir və ya
                              mənfəət üçün məsuliyyət daşımır.
                            </li>
                            <li>
                              Şirkət aşağıdakı hallara görə heç bir məsuliyyət
                              və ya öhdəlik daşımır:
                              <ul>
                                <li>
                                  Alış Məbləğinin ödənilməsinin Şirkətdən asılı
                                  olmayan səbəblərdən ləngiməsinə və nəticə
                                  etibarı ilə Alıcının Malları almaq hüququnun
                                  qüvvəyə minməməsinə görə;
                                </li>
                                <li>
                                  Alıcı tərəfindən Satış Portalından istifadə və
                                  / yaxud Alış Məbləğinin ödənilməsi ilə
                                  əlaqədar hər hansı parametrlər düzgün
                                  quraşdırılmadıqda, əmələ gələn problemlər və
                                  ya əngəllər olduqda və yaxud onun istifadə
                                  etdiyi kompüter və ya rabitə avadanlıqlarının
                                  təhlükəsizlik sistemlərinin sıradan çıxması
                                  səbəbindən yaranan problemlərə (sistemə
                                  müdaxilələrə və s.) görə;
                                </li>
                                <li>
                                  Alıcının istifadə etdiyi avadanlığın
                                  xüsusiyyətləri ilə bağlı olan səbəblərdən
                                  Alıcının Alış Məbləğini ödəmək imkanının
                                  olmamasına görə;
                                </li>
                                <li>
                                  Məlumatların məxfiliyinin qorunması və
                                  məxfiliyinin təmin edilməsi üzrə tələblərə
                                  Alıcı tərəfindən riayət edilməməsi nəticəsində
                                  ona dəyə biləcək hər hansı zərərə görə;
                                </li>
                                <li>
                                  Alıcının özünün qərəzli, ehtiyatsız və ya
                                  etinasız hərəkətləri (hərəkətsizliyi)
                                  nəticəsində üçüncü şəxslərin Şirkətin Alıcıya
                                  təqdim etdiyi Satış Portalına səlahiyyət
                                  olmadan girişinə və ondan istifadəsinə, habelə
                                  belə səlahiyyətsiz girişin və ya istifadənin
                                  səbəb olduğu nəticələrə görə;
                                </li>
                                <li>
                                  Alıcının Şirkətə yazılı, şifahi, internet və
                                  (yaxud) elektron sistemlər vasitəsilə verdiyi
                                  məlumatların dolğun və düzgün olmasına, belə
                                  olmadığı halda isə yarana biləcək zərərlərə
                                  görə;
                                </li>
                                <li>
                                  Həyata keçirilən əməliyyatların Tətbiq Edilən
                                  Qanunvericiliyə uyğun olaraq tərtib
                                  edilməsinə, əməliyyatların təhlükəsizlik
                                  vasitələrindən istifadə etməklə müvafiq
                                  qaydada təsdiq edilməsinə, habelə Alıcı
                                  tərəfindən Satış Portalına daxil edilən
                                  məlumatların dürüstlüyünə və tamlığına görə.
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>
                            SİFARİŞİN RƏSMİLƏŞDİRİLMƏSİ VƏ YERİNƏ YETİRİLMƏ
                            MÜDDƏTLƏRİ
                          </strong>
                          <ol>
                            <li>
                              Sifariş rəsmiləşdirilərkən Alıcı Verifikasiya
                              prosedurundan keçməlidir.
                            </li>
                            <li>
                              Sifarişi rəsmiləşdirdikdə, Alıcıya Sifarişin
                              çatdırılmasının gözlənilən tarixi barədə məlumat
                              verilir. Bu tarix, Çatdırılma xidmətinin Sifarişi
                              Alıcıya təqdim etməyə hazır olduğu vaxt deməkdir.
                              Qeyd edilən tarix Şirkətin anbarında sifariş
                              edilmiş Malların mövcudluğundan, Sifarişin emalı
                              üçün lazım olan vaxtdan, ödənişin aparılması
                              vaxtından və Çatdırılma Xidmətinin Sifarişin
                              rəsmiləşdirilməsi zamanı seçildiyi Göndərişin
                              çatdırılma müddətlərindən asılıdır.
                            </li>
                            <li>
                              Şirkətin anbarında Malların olması barədə məlumat
                              və Şirkətin anbarına Malların çatdırılmasının
                              gözlənilən müddəti Şirkətin saytında göstərilir.
                            </li>
                            <li>
                              Şirkətin saytında təqdim olunan Mallar haqqında
                              bütün informasiya materialları məlumat xarakteri
                              daşıyır və Malların ölçüləri və formaları daxil
                              olmaqla, Malların xüsusiyyətləri və
                              xarakteristikaları haqqında düzgün məlumatı tam
                              həcmdə göstərməyə bilər.
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <ol>
                        <li>
                          <strong>
                            SİFARİŞİN LƏĞV EDİLMƏSİ VƏ YA MALLARIN QAYTARILMASI
                          </strong>
                          <ol>
                            <li>
                              Sifarişin icrası Alıcının və ya Şirkətin
                              iradəsindən asılı olmayan səbəblərdən mümkün
                              olmamışdırsa və ya hər hansı digər əsaslı səbəb
                              olduqda, Şirkət Sifarişi ləğv edə bilər və bu
                              barədə Alıcıya məlumat verir. Bu halda müvafiq
                              Sifarişin qiyməti 30 iş günü ərzində Alıcıya
                              qaytarılmalıdır.
                            </li>
                            <li>
                              Əgər müəyyən fərdi xüsusiyyətlərə malik olan
                              lazımi keyfiyyətli Mallar yalnız onu əldə edən
                              Alıcı tərəfindən istifadə oluna bilərsə, Alıcı
                              istənilən halda qeyd edilən Mallardan imtina edə
                              bilməz.
                            </li>
                            <li>
                              Sifariş Alıcı tərəfindən, alınan Mallarda hər
                              hansı qüsur və ya çatışmazlıq olmadan ləğv
                              edildikdə, müvafiq Sifarişin qiyməti 30 iş günü
                              ərzində Alıcıya qaytarılmalıdır və bu halda
                              müvafiq Malların qaytarılması və Satıcıya
                              çatdırılması ilə bağlı olan bütün xərcləri Alıcı
                              ödəməlidir.
                            </li>
                            <li>
                              Sifariş Alıcı tərəfindən, alınan Mallarda hər
                              hansı qüsur və ya çatışmazlıq səbəbindən ləğv
                              edildikdə, müvafiq Sifarişin qiyməti 30 iş günü
                              ərzində Alıcıya qaytarılmalıdır və bu halda
                              müvafiq Malların qaytarılması və Satıcıya
                              çatdırılması ilə bağlı olan bütün xərcləri Satıcı
                              ödəməlidir.
                            </li>
                            <li>
                              Sifarişin cari statusu ilə Alıcı Şəxsi kabinetində
                              tanış ola bilər. Bank kartı ilə ödənilən
                              Sifarişlər və Mallar üçün avtomatik olaraq
                              ödənişin həyata keçirildiyi karta qaytarılma
                              həyata keçiriləcəkdir.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>ÇATDIRILMA</strong>
                          <ol>
                            <li>
                              Çatdırılma, __________(Çatdıran şəxs göstərilməli)
                              və ya Çatdırılma xidməti tərəfindən həyata
                              keçirilir. Malların çatdırılma üsulları Şirkətin
                              saytında göstərilmişdir. Alıcının ünvanına
                              çatdırılma imkanı Sifarişin rəsmiləşdirilməsi
                              zamanı müəyyən edilir. Sifarişin rəsmiləşdirilməsi
                              zamanı Alıcının mövcud çatdırılma üsullarından
                              seçdiyi üsul razılaşdırılmış çatdırılma üsulu
                              sayılır.
                            </li>
                            <li>
                              Çatdırılma yalnız [Azərbaycan Respublikasının]
                              ərazisində həyata keçirilir.
                            </li>
                            <li>
                              Şirkət, Şirkətin saytında göstərilən çatdırılma
                              müddətlərinə riayət etmək üçün bütün səylər
                              göstərəcək, buna baxmayaraq Şirkətin təqsiri
                              olmadan baş vermiş gözlənilməz hallarla əlaqədar
                              çatdırılma zamanı ləngimələr mümkündür və Şirkət
                              bu kimi hallar üçün məsuliyyət daşımır.
                            </li>
                            <li>
                              Çatdırılma zamanı Sifariş Alıcıya və ya Sifariş
                              alan qismində göstərilən şəxsə verilir. Yuxarıda
                              göstərilən şəxslər tərəfindən nağd hesablaşma
                              əsasında rəsmiləşdirilmiş Sifarişi almaq mümkün
                              olmadıqda, Sifariş barəsində məlumatlı (göndərilmə
                              nömrəsi və/və ya Alıcının SAA) olan, həmçinin
                              Sifarişin qiymətini Sifarişin çatdırılmasını
                              həyata keçirən şəxsə tam həcmdə ödəməyə hazır olan
                              şəxsə təqdim edilir.
                            </li>
                            <li>
                              Qabaqcadan ödənilmiş Sifarişi təqdim edərkən,
                              Sifarişin çatdırılmasını həyata keçirən şəxs
                              Alıcının şəxsiyyətini təsdiq edən sənədi tələb edə
                              bilər. Şirkət Alıcının fərdi məlumatlarının
                              məxfiliyinə və qorunmasına zəmanət verir.
                            </li>
                            <li>
                              [Sifariş verilərkən Alıcı Sifarişin çatdırılmasını
                              həyata keçirən şəxsin iştirakı ilə Sifarişin
                              xarici görünüşünü və qablaşdırılmasını, Sifarişdə
                              olan Malların miqdarını, Malların xarici
                              görünüşünü və qablaşdırılmasını, komplektliyini
                              yoxlamalıdır.]
                            </li>
                            <li>
                              Şirkətin saytında nəzərdə tutulan və ya ağlabatan
                              müddətdə Sifarişin Alıcı tərəfindən alınmaması,
                              Alıcının Müqavilədən imtina etməsi sayılır və
                              Sifarişin Şirkət tərəfindən ləğv edilməsi üçün
                              əsasdır. Əgər alınmamış Sifariş əvvəlcədən
                              ödənilmişdirsə, pul vəsaitləri Şirkətin Sifarişi
                              çatdırma və digər ağlabatan xərcləri çıxılmaqla 30
                              iş günü ərzində Alıcının istifadəçi hesabına
                              qaytarılır.
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <ol>
                        <li>
                          <strong>ƏQLİ MÜLKİYYƏT</strong>
                          <ol>
                            <li>
                              Saytda olan bütün mətn tipli məlumatlar və qrafik
                              təsvirlər Şirkətin mülkiyyətidir.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>MƏXFİLİK</strong>
                          <ol>
                            <li>
                              Şirkət Malların satışı ilə bağlı Alıcı ilə əlaqə
                              qurmaq məqsədilə, həmçinin xidmətlərin
                              göstərilməsi üçün zəruri olan Alıcı məlumatını
                              toplayır. Şirkət Alıcının fərdi məlumatlarını
                              üçüncü şəxslərə satmır və ya vermir. Lakin Şirkət
                              müəyyən Alıcı məlumatını Şirkətin adından xidmət
                              göstərən və ya Şirkətin müəyyən mal və ya xidmət
                              təklif etmək üçün tərəfdaşlıq münasibətləri
                              bağladığı üçüncü şəxslərə ötürə və bu müqavilədə
                              göstərilmiş hallarda açıqlaya bilər.
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <ul typeof="disc">
                        <li>
                          Şirkətin məxfilik siyasəti dəyişərsə, Şirkət müvafiq
                          qaydaların yenilənmiş versiyasını dərc edir. Alıcı,
                          Şirkətin vaxtaşırı Alıcı məlumatının toplaması qaydası
                          ilə bağlı öz seçimini edə bilər.
                        </li>
                      </ul>
                      <ul typeof="disc">
                        <li>
                          Şirkət Alıcının könüllü olaraq Şirkətə ötürdüyü,
                          aşağıdakı məlumatları toplaya bilər:
                        </li>
                      </ul>
                      <ul typeof="disc">
                        <li>Alıcının adı, soyadı, telefon nömrəsi,ünvanı</li>
                        <li>
                          Alıcının sosial şəbəkə ünvanı və elektron poçt ünvanı
                          məlumatı (tətbiq ediləcəyi halda);
                        </li>
                        <li>
                          Alıcının Alıcı adı (login), parolu (tətbiq ediləcəyi
                          halda) kimi təhlükəsizlik məlumatı və siyasətlərin
                          qəbulu;
                        </li>
                        <li>
                          Müştərilərə dəstək xidmətinə və texniki dəstəklə bağlı
                          sorğular
                          <ul typeof="circle">
                            <li>
                              Alıcı proqram yüklənməsi, Şirkətin saytında
                              qeydiyyatdan keçmə, sifarişin yerləşdirilməsi,
                              xidmətlərə abunə olma, sorğuların, müsabiqələrin
                              və ya reklam kampaniyaların birində iştirak,
                              seminarda, treninqdə və ya bu kimi digər tədbirdə
                              iştirak, həmçinin texniki və ya müştəri dəstəyi
                              ilə bağlı Şirkət ilə əlaqə saxlama kimi
                              məlumatları könüllü olaraq Şirkətə ötürərkən,
                              Şirkət, Alıcıdan aldığı məlumatları toplayır.
                            </li>
                            <li>
                              Şirkət öz adından müxtəlif funksiyaları yerinə
                              yetirmək üçün üçüncü tərəf təchizatçılarını,
                              xidmət provayderlərini və təchizatçıları işə cəlb
                              edə bilər. Üçüncü şəxslərin xidmətlərinə
                              müştərilər haqqında məlumatların idarə edilməsi,
                              bank kartları üzrə ödənişlərin emalı, məlumatların
                              təhlili, proqram təminatı, Şirkətin saytı və
                              məlumat bazasının işlənməsi, yerləşdirilməsi və
                              saxlanılması daxil ola bilər, lakin bunlarla
                              məhdudlaşdırılmır. Şirkət bu xidmət
                              provayderlərinin heç birinə Alıcı məlumatından hər
                              hansı digər şəkildə istifadə etməyə və ya bu
                              xidmətlər kontekstindən kənarda Alıcı ilə əlaqə
                              saxlamağa icazə vermir. Şirkətin Alıcının fərdi
                              məlumatlarının paylaşdığı üçüncü tərəf
                              təchizatçıları, xidmət provayderləri və
                              təchizatçılar haqqında daha ətraflı məlumat əldə
                              etmək üçün Alıci 0505115141 ilə əlaqə saxlaya
                              bilər.
                            </li>
                            <li>
                              Şirkət fərdi məlumatları (a) hökumətin qanuni
                              sorğusuna, məhkəmə əmrinə, inzibati və ya məhkəmə
                              prosesinə cavab vermək də daxil olmaqla Şirkətin
                              hüquqi öhdəliklərini yerinə yetirmək; (b) Şirkətin
                              qanuni hüquqlarını müəyyən etmək, həyata keçirmək
                              və ya qorumaq üçün zəruri olduqda; (c) digər
                              şəxsin həyat baxımından mühüm olan mənafelərini
                              qorumaq üçün zəruri olduqda; (ç) Şirkətin
                              fəaliyyətinin tam və ya bir hissəsinin satılması,
                              verilməsi və ya ötürülməsi və ya yenidən təşkil
                              edilməsi ilə bağlı və yaxud (d) digər şəkildə
                              Alıcının razılığının Şirkət tərəfindən əldə
                              edildiyi hallar da daxil olmaqla qüvvədə olan
                              qanunvericiliyə uyğun olaraq digər üçüncü şəxslərə
                              açıqlaya bilər.
                            </li>
                            <li>
                              Alıcının fərdi məlumatları Azərbaycan
                              Respublikasının hüdudlarından kənarda fərdi
                              məlumatların müxtəlif səviyyədə hüquqi
                              mühafizəsini təmin edən qanunvericiliyə malik olan
                              ölkələrdə yerləşən yuxarıda göstərilən üçüncü
                              şəxslərə ötürülə bilər.
                            </li>
                            <li>
                              Şirkət, topladığı Alıcı məlumatını mühafizə etmək
                              üçün təhlükəsizlik tədbirlərindən istifadə edir.
                            </li>
                            <li>
                              Proqram Təminatı digər saytlara və ya proqramlara
                              istinadları ehtiva edə bilər. Şirkət, bu
                              veb-saytların və proqramların məxfilik siyasətinə
                              nəzarət etmir və ya onu izləmir. Şirkət hər hansı
                              bir əlaqəli veb-saytların və proqramların
                              məzmununa və/və ya təcrübəsinə görə məsuliyyət
                              daşımır.
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul typeof="disc">
                        <li>
                          Şirkət, Alıcının məlumatlarını Müqavilə müddəti
                          ərzində və bu müddətdən sonra öz qanuni hüquq və
                          vəzifələrə uyğun olaraq bir il ərzində saxlayır.
                        </li>
                        <li>
                          Tənzimləyici qanunvericilik Alıcıya: (a) fərdi
                          məlumatlarına giriş əldə etmək, (b) qeyri-dəqiq
                          məlumatları düzəltmək, (ç) (artıq tələb olunmayan)
                          fərdi məlumatlarını silmək, (ç) fərdi məlumatların
                          emalının məhdudlaşdırılmasını tələb etmək, (d) fərdi
                          məlumatlarınızın emalına etiraz etmək, (e) fərdi
                          məlumatlarınızın köçürülməsini tələb etmək, (ə)
                          müvafiq nəzarət orqanına şikayət vermək, (f) əvvəllər
                          verilmiş razılığı geri götürmək hüququnu və (g)
                          tənzimləyici qanunvericiliklə nəzərdə tutulmuş digər
                          hüquqları verir. Alıcı razılığının geri götürülməsi,
                          geri götürməyə qədər həyata keçirilən istənilən emalın
                          qanuniliyinə, eləcə də razılıqdan fərqli olaraq digər
                          qanuni əsaslara istinad edilərək həyata keçirilən
                          fərdi məlumatların emalına təsir etməyəcək. Alıcı
                          hüquqlarından hər hansı birini istifadə etmək
                          istəyərsə, _____ilə əlaqə saxlamalıdır.
                        </li>
                        <li>
                          ŞİRKƏT FƏRDİ MƏLUMATLARIN TOPLANILMASI VƏ İŞLƏNİLMƏSİ
                          ZAMANI FƏRDİ MƏLUMATLARIN TOPLANILMASININ VƏ
                          İŞLƏNİLMƏSİNİN QANUNİLİYİNİ VƏ TƏHLÜKƏSİZLİYİNİ TƏMİN
                          EDİR VƏ FƏRDİ MƏLUMATLARI QANUNVERİCİLİYİN TƏLƏBİNƏ
                          UYĞUN OLARAQ MÜHAFİZƏ EDİR. ŞİRKƏTİN QƏSDİ VƏ KOBUD
                          EHTİYATSIZLIĞI NƏTİCƏSİNDƏ MƏLUMATLARIN MÜHAFİZƏSİNİN
                          TAM TƏMİN OLUNMAMASI NƏTİCƏSİNDƏ İSTİFADƏÇİYƏ DƏYƏN
                          ZİYANA GÖRƏ ŞİRKƏT QANUNVERİCİLİKDƏ NƏZƏRDƏ TUTULAN
                          QAYDADA MƏSULİYYƏT DAŞIYIR.
                        </li>
                      </ul>
                      <ol>
                        <li>
                          <strong>
                            ZƏMANƏT VERMƏKDƏN İMTİNA ETMƏ VƏ MƏSULİYYƏTİN
                            MƏHDUDLAŞDIRILMASI
                          </strong>
                          <ol>
                            <li>
                              Zəmanətlər. Alıcı, qəsdən hüquqazidd hərəkət və ya
                              kobud etinasızlıq halları istisna olmaqla,
                              Malların alqı-satqısı ilə bağlı yaranan, Şirkətə
                              qarşı ola biləcəyi hər hansı pretenziyalardan
                              imtina edir. ŞİRKƏT, MALLARI “OLDUĞU KİMİ” HEÇ BİR
                              ZƏMANƏT VERMƏDƏN TƏHVİL VERİR, ALICI İSƏ QƏBUL
                              EDİR. ŞİRKƏT, NƏZƏRDƏ TUTULAN HƏR HANSI MALIN
                              KEYFİYYƏT ZƏMANƏTİ VƏ YA MƏQSƏDLİ İSTİFADƏ ÜÇÜN
                              YARARLIĞIN ZƏMANƏTİ DAXİL OLMAQLA, AÇIQ-AŞKAR VƏ
                              YA NƏZƏRDƏ TUTULAN HƏR HANSI BƏYANATLARDAN VƏ YA
                              HƏR HANSI NÖV ZƏMANƏTLƏRDƏN İMTINA EDİR.
                            </li>
                            <li>
                              Məsuliyyətin məhdudlaşdırılması. Şirkət, qəsdən
                              hüquqazidd hərəkət və ya kobud etinasızlıq halları
                              istisna olmaqla, Mallarla bağlı yaxud Şirkətin bu
                              Müqavilənin icrası ilə bağlı dəyən hər hansı
                              itkiyə və ya zərərə görə Alıcı və/ və ya hər hansı
                              üçüncü tərəf qarşısında məsuliyyət daşımır.
                              ŞİRKƏT, MÜQAVİLƏYƏ, DELİKTƏ VƏ YA HÜQUQ
                              NƏZƏRİYYƏSİNƏ ƏSASLANAN, MALLARIN İSTİFADƏSİ VƏ YA
                              BU MÜQAVİLƏNİN HƏR HANSI İCRASI NƏTİCƏSİNDƏ
                              YARANAN HƏR HANSI BİRBAŞA, DOLAYI, FAKTİKİ,
                              TƏSADÜFİ VƏ YA SONRAKI ZƏRƏRƏ GÖRƏ MƏSULİYYƏT
                              DAŞIMIR. ALICI RAZILAŞIR Kİ, ZƏMANƏT VƏ
                              MƏSULİYYƏTLƏ BAĞLI BU MƏHDUDİYƏTLƏR AĞLABATANDIR
                              VƏ ŞİRKƏT, ZƏMANƏTDƏN İMTİNAETMƏ VƏ ŞİRKƏTİN
                              MƏSULİYYƏTİNİN MƏHDUDLAŞDIRILMASI İLƏ BAĞLI
                              ALICININ MÜSBƏT İFADƏ OLUNMUŞ RAZILIĞI OLMADAN BU
                              MÜQAVİLƏNİ BAĞLAMAZDI.
                            </li>
                            <li>
                              Alıcı tərəfindən təzminatın verilməsi. ALICI
                              ŞİRKƏT TƏRƏFİNDƏN ÇƏKİLƏN VƏ YA ŞİRKƏTƏ QARŞI
                              İRƏLİ SÜRÜLƏN, (A) ALICININ İCAZƏ VERDİYİ, ALICI
                              TƏRƏFİNDƏN ALICININ HESABINA GİRİŞ VƏ YA ONDAN
                              İSTİFADƏNİN VƏ YA (B) BU MÜQAVİLƏNİN POZULMASI VƏ
                              YA İCRA EDİLMƏMƏSİ VƏ ÜÇÜNCÜ ŞƏXSLƏRİN
                              HÜQUQLARININ HƏR HANSI POZULMASI DAXİL OLMAQLA
                              ALICININ HƏR HANSI HƏRƏKƏTİ VƏ YA HƏRƏKƏTSİZLİYİ
                              NƏTİCƏSİNDƏ YARANAN VƏ YA ONLARLA BAĞLI OLAN BÜTÜN
                              İTKİLƏRƏ, ZƏRƏRƏ, BORC OHDƏLİKLƏRİNƏ, BORCLARA,
                              TƏLƏBLƏRƏ, PRETENZİYALARA, İDDİALARA, İDDİA
                              ƏSASLARINA, XƏRCLƏRƏ, MƏSRƏFLƏRƏ, O CÜMLƏDƏN
                              MƏHKƏMƏ XƏRCLƏRİNƏ VƏ HƏR HANSI İDDİANIN HƏLLİ VƏ
                              YA MƏHKƏMƏ QƏRARININ İCRASI (BİRLİKDƏ
                              “PRETENZİYALAR” ADLANDIRILACAQ) ÜÇÜN ÖDƏNİLƏN
                              İSTƏNİLƏN MƏBLƏĞƏ GÖRƏ ŞİRKƏTƏ TƏZMİNAT ÖDƏMƏYƏ
                              RAZILAŞIR.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>
                            MÜQAVİLƏNİN MÜDDƏTİ VƏ ONA XİTAM VERMƏ
                          </strong>
                          <ol>
                            <li>
                              Bu Müqavilə Alıcı və ya Şirkət tərəfindən xitam
                              verilənə qədər qüvvədə qalır.
                            </li>
                            <li>
                              Şirkət, öz mülahizəsi ilə istənilən vaxt və
                              istənilən səbəbdən, əvvəlcədən bildiriş verməklə
                              və ya vermədən, bu Müqaviləni dayandıra və ya ona
                              xitam verə bilər.
                            </li>
                            <li>
                              Bu Müqavilənin hər hansı bir müddəasına Alıcı
                              tərəfindən riayət edilmədiyi təqdirdə, bu
                              Müqaviləyə dərhal, Şirkətin əvvəlcədən bildirişi
                              olmadan xitam veriləcəkdir. Alıcı, həmçinin
                              Hesabını ləğv etməklə Müqaviləyə xitam verə bilər.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>Fors-major</strong>
                          <ol>
                            <li>
                              Şirkət Tərəflərin əvvəlcədən görə bilmədikləri və
                              görülən tədbirlərlə təsir etmək iqtidarında
                              olmadıqları hadisələr nəticəsində qarşısıalınmaz
                              qüvvə şəraiti yarandıqda və bu səbəbdən Müqavilə
                              üzrə öhdəliklərin yerinə yetirilməsi imkanı qismən
                              və ya tamamilə təxirə salındıqda və ya mümkün
                              olmadıqda, Şirkət həmin qarşısıalınmaz qüvvə
                              şəraitinin davam etdiyi müddət ərzində Alıcıya
                              dəyə bilən hər hansı ziyan və ya zərər üçün bütün
                              məsuliyyətdən azad edilir.
                            </li>
                            <li>
                              Qarşısıalınmaz qüvvə hallarına o hadisələr aiddir
                              ki, Tərəflər onlara təsir göstərə bilmir və
                              onların meydana gəlməsi üçün məsuliyyət daşımır,
                              məsələn, zəlzələ, daşqın, yanğın habelə tətil,
                              Hakimiyyət Orqanlarının qərarları, hərbi
                              əməliyyatlar, terror aktları, o cümlədən İnternet
                              və (yaxud) mobil t
                            </li>
                            <li>telefon şəkəbəsinin işində fasilələr və s.</li>
                          </ol>
                        </li>
                        <li>
                          <strong>MÜQAVİLƏNİN TAMLIĞI</strong>
                          <ol>
                            <li>
                              Bu Müqavilənin hər hansı bir müddəası qanuni
                              qüvvəyə malik olmayan və ya etibarsız hesab
                              edilərsə, belə müddəa qanunvericiliyə uyğun olaraq
                              maksimal mümkün dərəcədə müddəanın məqsədlərinə
                              nail olmaq üçün dəyişdiriləcək və şərh
                              ediləcəkdir, qalan müddəalar isə tam qüvvədə
                              qalacaqdır.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>
                            TƏTBİQ EDİLƏN HÜQUQ VƏ MÜBAHİSƏLƏRİN HƏLLİ
                          </strong>
                          <ol>
                            <li>
                              Tətbiq edilən hüquq. Bu Müqavilə Azərbaycan
                              Respublikasının qanunvericiliyi ilə tənzimlənir.
                            </li>
                            <li>
                              Mübahisələrin həlli. Tərəflər, bu Müqavilədən
                              irəli gələn və ya onunla bağlı olan hər hansı
                              mübahisələrin və ya pretenziyaların vicdanlı
                              danışıqlar yolu ilə həlli üçün bütün səylər
                              göstərəcəklər. Müqaviləyə və ya digər hüquqi
                              normalara əsaslanan, bu Müqavilədən irəli gələn və
                              ya onunla bağlı olan, vicdanlı danışıqlar yolu ilə
                              həll olunmayan hər hansı pretenziya (dələduzluq və
                              ya məlumatların təhrif edilməsinə dair hər hansı
                              pretenziya daxil olmaqla, lakin bununla
                              məhdudlaşmayaraq), o cümlədən onun şərhi, icrası,
                              pozulması və ya ona xitam verilməsi, müstəsna
                              olaraq Azərbaycan Respublikasının müvafiq
                              məhkəmələri tərəfindən həll olunur.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <strong>MÜQAVİLƏYƏ DƏYİŞİKLİKLƏRİN EDİLMƏSİ</strong>
                          <ol>
                            <li>
                              Şirkət istənilən vaxt öz mülahizəsi ilə bu
                              Müqaviləni dəyişdirmək və ya əvəzləşdirmək
                              hüququnu özündə saxlayır. Müqaviləyə dəyişiklik
                              əhəmiyyətli olduğu təqdirdə, Şirkət hər hansı yeni
                              şərtlərin qüvvəyə minməsinə ən azı 10 gün qalmış
                              bildiriş təqdim edir. Əhəmiyyətli dəyişikliyin
                              nədən ibarət olduğu Şirkətin mülahizəsi ilə
                              müəyyən olunur.
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <ol>
                        <li>
                          <strong>ƏLAQƏ MƏLUMATLARI</strong>
                          <ol>
                            <li>
                              Bu Müqavilə ilə bağlı hər hansı sualınız
                              yaranarsa, xahiş edirik 0505115141 ilə bizimlə
                              əlaqə saxlayasınız.
                            </li>
                          </ol>
                        </li>
                      </ol>

                      <button
                        title="Close"
                        className="fancybox-close-small"
                        onClick={() => setTermsModal(false)}>
                        <svg viewBox="0 0 32 32">
                          <path d="M10,10 L22,22 M22,10 L10,22"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="fancybox-caption-wrap">
                  <div className="fancybox-caption"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
