import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import AboutHero from '../../components/about-us/AboutHero'
import InnovationCard from '../../components/about-us/InnovationCard';
import Footer from '../../components/footer/footer';
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';
import FooterRu from '../../components/footer/FooterRu';
import HeaderIntializeRU from '../../components/header/HeaderRu';

const InnovationRU = () => {

  // Innovation Section Data
  const sectionData = {
    title: "ВИДЕНИЕ",
    subtitle: "СВЕТЛОГО, ЗДОРОВОГО БУДУЩЕГО",
    description: `Как быстрорастущий лидер в сфере здоровья, IPAR управляет современным центром исследований и разработок и производственным предприятием с регистрацией FDA и сертификацией GMP — Ipar Pharm, предоставляющим CDMO-услуги фармацевтической отрасли. С сильным присутствием в Америке, Центральной Азии и Азиатско-Тихоокеанском регионе наша приверженность качеству и инновациям отражается на каждом этапе — от исследований до разработки конечного продукта.`,
    dnaImage: "/images/dna-1.webp",
    mainImage: "/images/lab.webp",
    icons: [
      "../svg/microicon.svg",
      "../svg/verfied.svg",
      "../svg/medicine.svg",
      "../svg/user-mlt.svg",
    ],
  };

  // Timeline Card
  const timelineItems = [
    {
      heading: "Методы <br /> ISPC",
      icon: "../svg/pad.svg",
      description: "Запатентованная система статистического управления процессом для мониторинга и оптимизации в реальном времени.",
      align: "left",
    },
    {
      heading: "Качество <br /> Six Sigma",
      icon: "../svg/health-edu.svg",
      description: "Снижение дефектов и вариаций для повышения стабильности производства.",
      align: "right",
    },
    {
      heading: "Соответствие <br /> cGMP и HACCP",
      icon: "../svg/advocating.svg",
      description: "Обеспечение соответствия и превышения глобальных стандартов безопасности и качества.",
      align: "left",
    },
    {
      heading: "Проверка чистоты <br /> и подлинности",
      icon: "../svg/advocating.svg",
      description: "Многоступенчатое тестирование для подтверждения подлинности, эффективности и безопасности.",
      align: "right",
    },
  ];

  const cardData = [
    {
      title: "Определить",
      description: "Установить ключевые параметры и ожидания клиентов.",
      image: "../svg/subtraction.svg",
    },
    {
      title: "Измерить",
      description: "Отслеживать критически важные показатели производства.",
      image: "../svg/measure.svg",
    },
    {
      title: "Анализировать",
      description: "Выявлять коренные причины дефектов.",
      image: "../svg/analyze.svg",
    },
    {
      title: "Улучшить",
      description: "Повышать эффективность и устранять ошибки.",
      image: "../svg/improve.svg",
    },
    {
      title: "Контролировать",
      description: "Обеспечивать надежность процессов с течением времени.",
      image: "../svg/settings-green.svg",
    },
  ];

  // About Grid
  const aboutItems = [
    {
      title: "Six Sigma",
      description: `Точность Six Sigma для совершенства производства. Методы ISPC от IPAR включают принципы контроля качества Six Sigma, ориентированные на постоянное улучшение процессов для: устранения дефектов и вариаций, влияющих на надежность продукта; решения производственных неэффективностей до их влияния на качество; повышения стабильности и точности благодаря проактивному мониторингу и контролю.`,
      image: "../images/six-sigma.webp",
      imageLeft: false,
    },
    {
      title: "cGMP от Intertek",
      description: `Сертифицировано Intertek. cGMP (текущие надлежащие производственные практики) гарантирует, что производственные процессы постоянно контролируются и соответствуют строгим нормативным требованиям качества. Это охватывает гигиену объекта, отслеживаемость ингредиентов, производственные протоколы и процедуры тестирования, обеспечивая целостность и соответствие продукта.`,
      image: "../images/intertek.webp",
      imageLeft: true,
    },
    {
      title: "HACCP",
      description: `Предотвращение загрязнений на каждом этапе. HACCP (анализ рисков и критические контрольные точки) — признанная во всем мире система предотвращения, предназначенная для выявления, оценки и контроля потенциальных рисков в производственном процессе. Следуя принципам HACCP, IPAR гарантирует, что все продукты свободны от риска загрязнения и соответствуют строгим требованиям безопасности от закупки до упаковки.`,
      image: "../images/haccp.webp",
      imageLeft: false,
    },
  ];

  // Innovation Cards
  const innovationCards = [
    {
      image: "../images/scale.webp",
      icon: "../svg/settings-white.svg",
      iconText: (
        <>
          Экологический <br /> Контроль
        </>
      ),
      description:
        "Автоматизированные системы контроля температуры, влажности и затемнения воздуха защищают сырье и продукты, сохраняя качество, эффективность и стабильность.",
    },
    {
      image: "../images/automation.webp",
      icon: "../svg/automation.svg",
      iconText: (
        <>
          Точная Автоматизация <br /> и Производство
        </>
      ),
      description:
        "IPAR использует высокоскоростные таблеточные прессы, автоматические капсульные машины и линии упаковки для обеспечения точности и эффективности. Обнаружение дефектов и сканирование дополнительно повышают качество продукции.",
    },
    {
      image: "../images/comprehensive.webp",
      icon: "../svg/checkmark-wt.svg",
      iconText: (
        <>
          Всеобъемлющий <br /> Контроль Качества
        </>
      ),
      description:
        "Комплексные протоколы обеспечения качества и контроля на основе стандартов HACCP и cGMP обеспечивают безопасность, стабильность и эффективность во всех категориях продуктов.",
    },
  ];


  return (
    <div className='about_us about_us_ru innovation_page'>
      {/* Header */}
      <HeaderIntializeRU showDashboardMenu={false} pvBars={false} />

      {/* Hero Section */}
      <AboutHero
        title={`Наука. <br />
Инновации. <br />
Благополучие.`}
        description="В IPAR наука и инновации — это основа всего, что мы делаем. Мы непрерывно стремимся к совершенству, честности и ответственности."
        shapeUrl="../images/leaf-line.webp"
        imageUrlShow={false}
      />


      {/* Innovation */}
      <section className="innovation py-5">
        <div className="container">
          {/* Top DNA Image */}
          <div className="img">
            <img className="dna-img" src={sectionData.dnaImage} alt="dna-shape" />
          </div>

          <div className="row mt-4">
            {/* Left Content */}
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="green-title green-head-title fw-bold text-uppercase">
                {sectionData.title}
              </h1>
              <h3 className="fw-bold head-subtitle text-uppercase">
                {sectionData.subtitle}
              </h3>
              <p className="gray mt-4">{sectionData.description}</p>

              {/* Icon Row */}
              <div className="icon mt-3 d-flex justify-content-center gap-2 flex-wrap">
                {sectionData.icons.map((icon, index) => (
                  <img key={index} src={icon} alt={`icon-${index}`} />
                ))}
              </div>

              {/* Bottom DNA Image */}
              <img className="dna dna-img" src={sectionData.dnaImage} alt="dna-bottom" />
            </div>

            {/* Right Image */}
            <div
              className="col-lg-5 mt-lg-0 mt-5 d-flex align-items-center justify-content-center"
              data-aos="fade-left"
            >
              <div className="img">
                <img className="w-100" src={sectionData.mainImage} alt="Wellness Innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Desc */}
      <section class="bg-gray py-5 mt-5 scn-section">
        <div class="container text-center">
          <h2 class="fw-bold black">
            Научно обоснованные формулы, разработанные для совершенства
          </h2>
          <p class="mt-3 gray desc">
            На каждом этапе исследований, разработки и производства IPAR
            уделяет приоритет научной точности, безопасности и эффективности.
            Каждый продукт проходит строгие тесты и контроль качества,
            чтобы гарантировать стабильность и надежность.
          </p>
        </div>
      </section>



      {/* Timeline Vertical Card */}

      <div className="timeline-with-btn">
        <TimelineVerticalCard items={timelineItems} />
      </div>


      {/* Benzin */}
      <section class="benzin-sec mt-5">
        <div class="container p-lg-5 p-3">
          <div class="row h-100">
            <div class="col-lg-6 d-flex align-items-end justify-content-lg-start justify-content-center">
              <div class="content " >
                <h3>Подход ISPC (вдохновленный концепцией DMAIC)</h3>
              </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-end mt-lg-0 mt-4">
              <div class="img " >
                <img class="w-100 h-100" src="../images/benzin.webp" alt="benzin" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Cards Grid */}
      <section className="cards-section py-5">
        <div className="container">
          <div className="cards-grid">
            {cardData.map((card, index) => (
              <div className="card-itm" key={index}>
                <div className="img">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="content mt-4">
                  <h4 className="black fw-medium">{card.title}</h4>
                  <p className="gray">{card.description}</p>
                </div>
              </div>
            ))}

            <div className="card-itm d-flex align-items-center justify-content-center gap-3">
              <img src="../images/ispc.webp" alt="ISPC" />
              <span className="fs-5 fw-bold green-title">ISPC Methods</span>
            </div>
          </div>
        </div>
      </section>


      {/* Quality Controll */}
      <section className="quality-control-sec bg-gray">
        <div className="container">
          <div className="row">
            {/* Левая часть */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2">
                <div className="img">
                  <img src="../images/qc.webp" alt="Логотип ISPC" />
                </div>
                <h4>Методы ISPC</h4>
              </div>
              <h3>УПРАВЛЕНИЕ С ТОЧНОСТЬЮ</h3>
              <h1>КОНТРОЛЬ КАЧЕСТВА</h1>
              <p>
                В IPAR методы ISPC (Статистические методы управления процессами IPAR)
                обеспечивают качество, эффективность и безопасность на каждом этапе
                разработки и производства.
              </p>
              <h3 className="black">Ощутите разницу</h3>

              <div className="icon-part">
                {[
                  "Предотвращение дефектов",
                  "Непрерывная оптимизация",
                  "Улучшение других стандартов",
                ].map((text, idx) => (
                  <div className="icon-sec" key={idx}>
                    <div className="icon">
                      <img src="../svg/checkmark.svg" alt="Иконка" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть — изображение */}
            <div className="col-lg-6">
              <div className="img testtube">
                <img className="w-100" src="../images/testube-cut.webp" alt="Пробирка" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ABout grid */}
      <section className="about-grid py-5 mt-5">
        <div className="container">
          {aboutItems.map((item, index) => (
            <div className="row mt-5" key={index}>
              {item.imageLeft && (
                <div className="col-lg-6">
                  <div className="img">
                    <img className="w-100" src={item.image} alt={item.title} />
                  </div>
                </div>
              )}

              <div className="col-lg-6 d-flex align-items-center">
                <div className="content">
                  <h2 className="fw-bold black">{item.title}</h2>
                  <p className="gray mt-3">{item.description}</p>
                </div>
              </div>

              {!item.imageLeft && (
                <div className="col-lg-6">
                  <div className="img">
                    <img className="w-100" src={item.image} alt={item.title} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Quality Controll */}

      <section class="quality-control">
        <div class="container p-lg-5 p-3 d-flex align-items-center">
          <h1>Передовое производство и контроль качества</h1>
        </div>
      </section>

      {/* Image Card Section */}
      <section className="img-card-section mt-5 py-5">
        <div className="container">
          <div className="row">
            {innovationCards.map((card, index) => (
              <InnovationCard key={index} {...card} columnClass="col-lg-4" />
            ))}
          </div>
        </div>
      </section>

      {/* Image Card Section */}
      <section class="img-card-section mt-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="img-card">
                <div class="img-header">
                  <div class="img">
                    <img class="main-img w-100" src="../images/controler-team.webp" alt="Controler" />
                  </div>
                  <div class="bottom p-lg-3 py-3 px-2 d-flex align-items-center justify-content-start gap-2">
                    <img src="../svg/checkmark-wt.svg" alt="" />
                    <div class="txt fw-medium">
                      Чистая комната и <br />
                      Контроль загрязнения
                    </div>
                  </div>
                </div>
                <div class="cd-body pt-3">
                  <p class="gray">
                    IPAR использует высокоскоростные таблеточные прессы, автоматические капсулоукладочные машины и упаковочные линии для обеспечения точности и
                    эффективности. Обнаружение дефектов и сканирование дополнительно повышают
                    качество продукции.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="img-card">
                <div class="img-header">
                  <div class="img">
                    <img class="main-img w-100" src="../images/mix-machine.webp" alt="Mix" />
                  </div>
                  <div class="bottom p-lg-3 py-3 px-2 d-flex align-items-center justify-content-center gap-2">
                    <img src="../svg/drying.svg" alt="" />
                    <div class="txt fw-medium">
                      Смешивание, сушка и
                      Производственное совершенство
                    </div>
                  </div>
                </div>
                <div class="cd-body pt-3">
                  <p class="gray">
                    Строго контролируемые процессы смешивания и сушки обеспечивают
                    равномерное распределение ингредиентов, стабильность и
                    биодоступность. Передовая технология сушки сохраняет
                    эффективность для оптимальной текстуры, растворения и усвоения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Bigger */}
      <section class="innovation-bigger py-5">
        <div class="container">
          <img class="w-100 " src="../images/innovation-in-2.webp" alt="Innovation-2" />
        </div>
      </section>

      {/* Footer */}
      <FooterRu />
    </div>
  )
}

export default InnovationRU