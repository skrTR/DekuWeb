import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../components/Helmet/Helmet";
import Breadcrumb from "../components/BreadCrumb/Breadcrumb";
import Header from "../components/Header/Header";
import FooterTwo from "../components/Footer/FooterTwo";

const NewsPolicy = () => {
  return (
    <>
      <PageHelmet pageTitle="Нийтлэлийн бодлого" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Нийтлэлийн бодлого"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Columns Area  */}
        <div className="rn-columns-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-column">
                  <p>
                    Media Lab цахим товхимол нь эрхлэн гаргаж буй агуулга,
                    хүлээн авагчдадаа хүргэж буй мэдээллүүдийг дэлхийн стандарт,
                    хэвлэл мэдээллийн байгууллагын ёс зүйн зарчимд нийцүүлэн
                    ажиллана. Бид эрхлэн гаргаж буй агуулгадаа дараах бодлогыг
                    баримтлан ажиллана.
                  </p>
                  <div>
                    <h4 className="mb-3 tilte">
                      НЭГ. НИЙТЛЭЛИЙН ЕРӨНХИЙ БОДЛОГО
                    </h4>
                    <h5 className="ml-5 tilte">1. Ерөнхий бодлого</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Media Lab нь медиа салбарын мэдээллийг уншигчдадаа
                      хүргэхээс гадна мэдээллийн боловсролыг олгохын төлөө
                      хичээнгүйлэн ажиллана.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Бид мэдээллийг хүргэхдээ баттай эх сурвалжийг ашиглан
                      тэнцвэртэй хүргэхийг эрхэмлэнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      3. Аливаа мэдээ мэдээллийг мэргэжлийн түвшинд боловсруулж,
                      баримтыг нягталж сэтгүүлчийн ёс зүйн зарчим болон хэвлэл
                      мэдээллийн ёс зүйн нийтлэг зарчмыг зөрчихгүйгээр хүлээн
                      авагчдад хүргэнэ.
                    </p>
                    <h5 className="ml-5 tilte">2. Мэдээллийн агуулга</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Медиа салбар болон мэдээллийн боловсролын талаар
                      мэдээллийг хүргэнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Аливаа мэдээлэл, сэтгүүл зүйн бүтээлийг бүтээхдээ
                      найдвартай эх сурвалж, баримтад үндэслэж энгийн,
                      хүртээмжтэй байдлаар хүргэнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      3. Бид аливаа эрхлэн гаргаж буй агуулгыг хүргэхдээ дэлхийн
                      хөгжилтэй хөл нийлүүлэн алхаж шинэлэг технологи, арга
                      хэлбэрийг ашиглахыг зорино.
                    </p>
                  </div>
                  {/* 2 */}
                  <div>
                    <h4 className="tilte mb-3 mt-4">
                      ХОЁР. РЕДАКЦЫН ЁС ЗҮЙ БА ЗАРЧМУУД
                    </h4>
                    <h5 className="ml-5 tilte">1. Сэтгүүлчийн ёс зүй</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Media Lab-ийн контент бүтээгчид нь сэтгүүлчийн ёс зүйн
                      зарчим болон
                      <span style={{ color: "blue" }}>
                        {" "}
                        Хэвлэл мэдээллийн ёс зүйн нийтлэг зарчмыг{" "}
                      </span>
                      мөрдлөг болгож ажиллана.
                    </p>

                    <h5 className="ml-5 tilte">2. Бидний баримтлах зарчмууд</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Чухал мэдээ буюу уншигчдын өдөр тутмын шийдвэр
                      гаргалтанд нь эерэг нөлөө үзүүлэх контент хүргэнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Утга учиртай, ойлгомжтой контент бүтээхийг эрэлхийлнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      3. Хэн нэгнээс хараат бус, хуулийн дагуу ажиллана.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      4. Үнэн зөв, бодит мэдээллийг өгнө.
                    </p>
                    <h5 className="ml-5 tilte">
                      3. Бидний эрхэмлэх итгэл үнэмшил
                    </h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Мэдээллийн боловсролтой хүлээн авагчдыг бэлтгэх
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Орчин үеийн медиа зах зээлийн талаар мэдээллийг олон
                      нийтэд хүргэх
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      3. Салбарын мэргэжилтнүүдийн ур чадварыг нэмэгдүүлэх
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      4. Медиа салбарын инноваци, технологийн дэвшлийг таниулах
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      5. Медиа зах зээлийн хөгжлийг хурдасгахад хувь нэмрээ
                      оруулах
                    </p>
                  </div>
                  {/* 3 */}
                  <div>
                    <h4 className="tilte mb-3 mt-4">
                      ГУРАВ. ЭХ СУРВАЛЖТАЙ АЖИЛЛАХ
                    </h4>
                    <h5 className="ml-5 tilte">
                      1. Баталгаатай, олон талт эх сурвалж
                    </h5>
                    <p style={{ marginLeft: 100 }}>
                      1.1 Media Lab нь мэдээ мэдээллийг бэлтгэхдээ мэргэжлийн,
                      хүлээн зөвшөөрөгдсөн баталгаатай, олон талт эх сурвалжийг
                      ашиглан мэдээллийг тэнцвэртэй хүргэнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      1.2 Аливаа мэдээлэл боловсруулахдаа тухайн асуудлаар
                      заавал хоёр ба түүнээс дээш эх сурвалжаар баталгаажуулсны
                      дараагаар мэдээллээ нийтэд түгээнэ.
                    </p>
                  </div>
                  {/* 4 */}
                  <div>
                    <h4 className="tilte mb-3 mt-4">
                      ДӨРӨВ. ХАМТЫН АЖИЛЛАГААНЫ БОДЛОГО
                    </h4>
                    <h5 className="ml-5 tilte">1. Хамтын ажиллагаа</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Бидний зарчим, ёс зүй, үнэт зүйлстэй нийцсэн хувь хүн,
                      байгууллагатай хамтран ажиллана.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Бид хамтын ажиллагаагаар хийгдэж буй контентыг үргэлж
                      чухалчилж үзэх бөгөөд олон нийтэд хүргэхэд шинэлэг санаа,
                      сонирхолтой байдал, боломжит технологийн дэвшлийг
                      ашиглана.
                    </p>
                    <h5 className="ml-5 tilte">2. Хараат бус байдал</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Аливаа контентийн агуулгыг Media Lab нь хамтрагч хувь
                      хүн, байгууллагаас хараат бус гаргах бөгөөд манай
                      редакцаас бэлтгэнэ.
                    </p>
                    <h5 className="ml-5 tilte">3. Ил тод, тодорхой байдал</h5>
                    <p style={{ marginLeft: 100 }}>
                      1. Хамтын ажиллагааны хүрээнд хийгдсэн төлбөртэй,
                      сурталчилгааны контентийн эх сурвалжийг уншигчдад тодорхой
                      үзүүлнэ.
                    </p>
                    <p style={{ marginLeft: 100 }}>
                      2. Шаардлагатай нөхцөл байдалд /тухайлбал хөрөнгө
                      оруулалтын бүтээгдэхүүн/ эрсдэл болон бусад анхааруулах
                      зүйлсийг заавал дурдана.
                    </p>
                  </div>
                  <h4 className="tilte mb-3 mt-4">БИДЭНТЭЙ ХОЛБОГДОХ</h4>
                  <p>
                    Та редакцын бодлоготой холбоотой өөрийн санал, сэтгэгдэлээ
                    <span> medialab.contact1@gmail.com</span> хаягаар ирүүлнэ
                    үү. Энэхүү редакцын бодлогыг үе үе шинэчилж, сайжруулах
                    бөгөөд тухай бүрт уншигчиддаа мэдэгдэж байх болно.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Манай хаяг:</span>{" "}
                    Монгол улс, Улаанбаатар хот, Баянзүрх дүүрэг,15-р хороо, 8-а
                    байр 6 тоот
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Утас:</span> +976 9929
                    6600, +976 9491 9139
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <FooterTwo />
      {/* End Footer Area  */}
    </>
  );
};

export default NewsPolicy;
