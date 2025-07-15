import React, { useEffect } from 'react'
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';
import { HeroSection } from '../../components/common/HeroSection';
import ImpactCardSection from '../../components/about-us/ImpactCardSection';
import SignupForm from '../../components/about-us/SignupForm';
import FooterRu from '../../components/footer/FooterRu';
import HeaderIntializeRU from '../../components/header/HeaderRu';

const DonationRU = () => {


  // Timeline Card
  const timelineItems = [
    {
      heading: "Обеспечение средствами гигиены при менструации",
      icon: "../svg/pad.svg",
      description: "Пожертвования и партнёрства обеспечивают доступ к продукции для нуждающихся сообществ.",
      align: "left",
    },
    {
      heading: "Продвижение образования по менструальному здоровью",
      icon: "../svg/health-edu.svg",
      description: "Разрушение табу и расширение знаний у девочек.",
      align: "right",
    },
    {
      heading: "Отстаивание изменений в политике",
      icon: "../svg/advocating.svg",
      description: "Продвижение усилий для всеобщего доступа к средствам гигиены и образованию.",
      align: "left",
    },
    {
      type: "button",
      label: "Пожертвовать сейчас",
    },
  ];


  // Grid Gallery

  const galleryImages = [
    { src: "../images/about-gallery-1.webp", alt: "Gallery Image 1" },
    { src: "../images/gallery-3.webp", alt: "Gallery Image 2", },
    { src: "../images/kids-2.webp", alt: "Gallery Image 3" },
    { src: "../images/berond-the-journey-landscape.webp", alt: "Gallery Image", className: "landscape", showText: true },
    { src: "../images/bitmap-2.webp", alt: "Gallery Image" },
  ];



  // Impact Cards Data

  const impactCardsData = [
    {
      title: "Пропуски в школе",
      image: "../images/school.webp",
      description:
        "Более 500 миллионов женщин не имеют необходимых менструальных средств, и менее трети школ обеспечивают правильную утилизацию отходов. (Всемирный банк, ВОЗ и ЮНИСЕФ)",
    },
    {
      title: "Критический период",
      image: "../images/undraw-doll.webp",
      description:
        "Пубертат — критический этап для самооценки, но стигматизация и дезинформация вокруг менструаций часто усугубляют ситуацию.",
    },
    {
      title: "Образование",
      image: "../images/undraw-personal.webp",
      description:
        "Многие девочки просто не могут позволить себе менструальные средства, что ограничивает их участие в учебе, спорте и социальной жизни.",
    },
  ];

  // Второй набор карточек влияния

  const impactCardsDataTwo = [
    {
      title: "Образование и обучение",
      image: "../images/studing.webp",
      description:
        "Повышение осведомленности семей о питании, поощрение сбалансированного питания и продвижение улучшенного доступа к здоровой пище для детей.",
    },
    {
      title: "Общественные кампании",
      image: "../images/public-campaigns.webp",
      description:
        "Организация общественных мероприятий, медиа-кампаний и образовательных семинаров для подчеркивания важности детского питания и решения проблем продовольственной безопасности.",
    },
    {
      title: "Привычки питания",
      image: "../images/eating-habits.webp",
      description:
        "Сотрудничество со школами, медиками и организациями для распространения знаний о здоровом питании и долгосрочном благополучии детей.",
    },
  ];


  useEffect(() => {
    const toggleCardClass = () => {
      const horizontalCard = document.getElementById("horizontalCard");

      if (!horizontalCard) return;

      if (window.matchMedia("(max-width: 991px)").matches) {
        horizontalCard.classList.remove("horizontal-card");
        horizontalCard.classList.add("vertical-card");
      } else {
        horizontalCard.classList.remove("vertical-card");
        horizontalCard.classList.add("horizontal-card");
      }
    };

    toggleCardClass(); // Initial check
    window.addEventListener("resize", toggleCardClass); // Re-check on resize

    return () => window.removeEventListener("resize", toggleCardClass); // Cleanup
  }, []);

  return (
    <div className='about_us about_us_ru community_page donation_page'>
      {/* Header */}
      <HeaderIntializeRU showDashboardMenu={false} pvBars={false} />

      <HeroSection
        title={`Мы идём\nвперёд`}
        description="Каждый день наши сотрудники, партнеры и потребители объединяются, чтобы приводить к реальным изменениям, принося надежду, заботу и позитивные преобразования в сообщества по всему миру."
        descTitle="Поддержка. Образование. Расширение прав."
        titleShow={true}
        shapeUrl="../svg/green-logo.svg"
        imageUrl="../images/baby.webp"
      />

      {/* Карточки для детей */}
      <section className="kids-card-section py-5">
        <div className="container">
          <div className="kids-cards">
            <div className="kids-card">
              <div className="img">
                <img src="../images/iparkids.webp" alt="iparkids" />
              </div>
              <div className="right-dsc">
                <h4 className="black fw-bold">
                  Инициатива IPAR KIDS™ – Питание и развитие
                </h4>
                <p className="m-0 gray">
                  Мы даём семьям знания и выступаем за мир, в котором каждый ребёнок имеет доступ к правильному питанию.
                </p>
              </div>
            </div>
            <div className="kids-card">
              <div className="img">
                <img src="../images/iparkids-2.webp" alt="iparkids" />
              </div>
              <div className="right-dsc">
                <h4 className="black fw-bold">
                  Надежда для девочек – расширение прав и достойные периоды
                </h4>
                <p className="m-0 gray">
                  Обеспечивает поддержку менструального здоровья через пожертвования, образование и адвокацию, способствуя долгосрочным изменениям через партнерства, социальное влияние и сбор средств в электронной коммерции.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 p-lg-4 p-auto">
              <div className="icon">
                <img src="../svg/handshake.svg" alt="рукопожатие" />
              </div>
              <h4 className="mt-3 black">Сострадание и ответственность</h4>
              <p className="gray mt-3">
                Через волонтёрство, адвокацию и устойчивые инициативы, включая Girl’s Hope, IPAR Kids, Фонд рака и партнерства с НПО, мы продолжаем поддерживать жизни, вдохновлять на перемены и создавать будущее, где сострадание и ответственность движут значимым прогрессом.
              </p>
            </div>
            <div className="col-lg-6 p-lg-4 p-auto mt-lg-0 mt-4">
              <div className="icon">
                <img src="../svg/rocket-md.svg" alt="Ракета" />
              </div>
              <h4 className="mt-3 black">Трансформируйте сообщества</h4>
              <p className="gray mt-3">
                Маленькие действия создают большие волны. Когда наша команда волонтёров, выступает за перемены или запускает устойчивые программы, они создают эффект домино, меняя сообщества. Для нас делать добро — не просто галочка, это часть нашей ДНК, которая движет всем, что мы делаем.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с галереей */}
      <section className="grid-gallery-section mt-4">
        <div className="container">
          <div className="grid-gallery mt-5">
            {galleryImages.map((item, index) => (
              <div key={index} className={`gallery-itm ${item.className || ""}`}>
                <img src={item.src} alt={item.alt} />

                {/* Показывать сообщение, если это ландшафт и нужно показать текст */}
                {item.className === "landscape" && item.showText && (
                  <h4 className="mt-3">
                    Вместе мы не просто мечтаем о лучшем мире — мы строим его, одним добрым делом за раз.
                  </h4>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grilis Hope */}
      <section className="grilis-hope py-5">
        <div className="container">
          <img src="../images/grilis-hope-with-friends.webp" alt="Девочки" />
          <h4 className="black fw-medium">
            Поддержка. Образование. Расширение прав.
          </h4>
          <h1 className="black fw-medium">Достойные периоды</h1>
          <p>
            Обеспечивает поддержку менструального здоровья через пожертвования, образование и адвокацию, способствуя долгосрочным изменениям через партнерства, социальное влияние и сбор средств в электронной коммерции.
          </p>

          <img className="lash" src="../images/lash.webp" alt="Ресница" />
        </div>
      </section>


      {/* Impact Card Section */}

      <section className="tripple-cards">
        <div className="container">
          <h1 className="text-center black" >
            Глобальные проблемы менструального здоровья
          </h1>

          <ImpactCardSection cards={impactCardsData} />
        </div>
      </section>


      {/* Girls Hope */}

      <section className="grils-hope mt-5 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left p-4">
              <img className="grils" src="../images/grils-hope.webp" alt="Девочки" />
              <h3>Преодоление барьеров, расширение прав и возможностей девочек</h3>
              <p className="gray mt-3">
                Миллионы девочек по всему миру страдают от периодической нищеты, не имея доступа к безопасным и доступным средствам гигиены во время менструации. Это приводит к пропускам занятий в школе, социальной изоляции и снижению самооценки. Отсутствие образования, стигма и финансовые трудности мешают девочкам с достоинством справляться с периодами, что влияет на их будущие возможности.
              </p>

              <h3 className="mt-5">Ваша роль в решении проблемы</h3>
              <p className="gray mt-3">
                Каждая покупка продукции Suncella напрямую помогает обеспечить девочек нуждающимися средствами гигиены во время менструации. Вместе мы можем разрушить стигму и создать мир, где ни одна девочка не пропускает школу из-за менструации.
              </p>
            </div>
            <div className="col-lg-6 right">
              <div className="img">
                <img className="w-100 h-100" src="../images/girls.webp" alt="Девочки" />
              </div>
              <p className="float-txt">
                Надежда девочек — <br />
                Будущее с достойными периодами
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Timeline Vertical Card */}

      <div className="timeline-with-btn">
        <TimelineVerticalCard title="на сосать" items={timelineItems} />
      </div>

      {/* SignUp Form */}

      <section className="signUp-section">
        <h1 className="text-center black fw-bold">
          Регистрация волонтеров
        </h1>
        <div className="container mt-4">
          <SignupForm
            title="Маленькие дела, большой эффект. Творить добро — это не обязанность, это наша сущность."
            fields={[
              { label: "Полное имя", name: "fullName", type: "text", placeholder: "Введите ваше имя..." },
              { label: "Электронная почта", name: "email", type: "email", placeholder: "Введите ваш email..." },
              { label: "Номер телефона", name: "phone", type: "tel", placeholder: "Введите номер телефона..." },
            ]}
            buttonText="Отправить"
          />
        </div>
      </section>



      {/* Inspiring section */}
      <section className="inspiring-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 px-lg-5 px-auto">
              <div className="img">
                <img src="../images/iparkids-big.webp" alt="Iparkids" />
              </div>
              <h2 className="green-title mt-4 text-center">
                Инициатива «Питание и развитие» (Nourish & Thrive)
              </h2>
            </div>
            <div className="col-lg-8 px-lg-5 px-auto">
              <div className="img">
                <img src="../images/baby-2.webp" alt="Малыш" />
              </div>
              <p className="mt-3 gray">
                Через инициативу IPAR KIDS™ – «Питание и развитие» мы даём семьям знания и отстаиваем мир, где каждый ребёнок имеет доступ к правильному питанию.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Impact Card Section */}
      <section className="tripple-cards">
        <div className="container">
          <h1 className="text-center black" >
            Вдохновляя изменения через осознание
          </h1>

          <ImpactCardSection cards={impactCardsDataTwo} />
        </div>
      </section>


      {/* Питание детей */}
      <section className="nutration-section py-5">
        <div className="container">
          <div className="nutration-container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="black">
                  Повышение осведомленности и защита детского питания
                </h1>
                <p className="mt-4 gray fs-5">
                  Миллионы детей во всем мире страдают от голода и недоедания,
                  что влияет на их здоровье, образование и будущее.
                  Инициатива IPAR KIDS™ – «Питание и развитие» направлена на
                  повышение осведомленности и поддержку улучшения детского питания,
                  вовлекая сообщества, семьи и организации в значимые дискуссии и образовательные проекты.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="img">
                  <img src="../images/smile-baby.webp" alt="Улыбающийся ребенок" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Горизонтальная карточка Таймлайн */}
      <section className="timeline-ver-card" id="timelineCard">
        <div className="container">
          <h1
            className="text-center black fw-bold"
            style={{ marginBottom: "80px" }}
          >
            Как вы можете помочь?
          </h1>
          <div className="horizontal-card" id="horizontalCard">
            <div className="timeline-item">
              <div className="icon-sec">
                <div className="icon">
                  <img src="../svg/handshake-wt.svg" alt="Иконка" />
                </div>
              </div>
              <div className="content">
                <div className="content-card">
                  <h3>Поддержка информационных кампаний</h3>
                  <p className="gray mt-3">
                    Распространяйте информацию и участвуйте в местных кампаниях,
                    чтобы повысить осведомленность о детском питании.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="icon-sec">
                <div className="icon">
                  <img src="../svg/community.svg" alt="Иконка" />
                </div>
              </div>
              <div className="content right">
                <div className="content-card">
                  <h3>Вовлечение сообщества</h3>
                  <p className="gray mt-3">
                    Поощряйте здоровые пищевые привычки и участвуйте в образовательных семинарах и дискуссиях.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="icon-sec">
                <div className="icon">
                  <img src="../svg/advocating.svg" alt="Иконка" />
                </div>
              </div>
              <div className="content left">
                <div className="content-card">
                  <h3>Адвокация за изменения</h3>
                  <p className="mt-3 gray">
                    Присоединяйтесь к инициативам, направленным на обеспечение продовольственной безопасности и доступа к питательным блюдам для детей.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-sec mt-5 bg-white d-flex justify-content-center gap-3">
            <button className="green-btn py-2">Пожертвовать сейчас</button>
          </div>
        </div>
      </section>


      {/* SignUp Form */}

      <section className="signUp-section">

        <div className="container mt-4">
          <SignupForm
            title="Маленькие дела, большой эффект. Творить добро — это не обязанность, это наша сущность."
            fields={[
              { label: "Полное имя", name: "fullName", type: "text", placeholder: "Введите ваше имя..." },
              { label: "Электронная почта", name: "email", type: "email", placeholder: "Введите ваш email..." },
              { label: "Номер телефона", name: "phone", type: "tel", placeholder: "Введите номер телефона..." },
            ]}
            buttonText="Отправить"
          />
        </div>
      </section>


      {/* Footer */}
      <FooterRu />
    </div >
  )
}

export default DonationRU