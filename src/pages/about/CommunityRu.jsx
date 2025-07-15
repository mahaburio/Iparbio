import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import AboutHero from '../../components/about-us/AboutHero'
import InnovationCard from '../../components/about-us/InnovationCard';
import CommunitySection from '../../components/common/Cta';
import Footer from '../../components/footer/footer';
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';
import { HeroSection } from '../../components/common/HeroSection';
import FooterRu from '../../components/footer/FooterRu';
import HeaderIntializeRU from '../../components/header/HeaderRu';

const CommunityRU = () => {
  // Card Data
  const cardData = [
    {
      image: "/images/photo-28.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Максимальное усвоение",
      description:
        "Разработано для биодоступности и целевой клеточной поддержки, чтобы доставить питательные вещества туда, где они нужны вашему организму.",
    },
    {
      image: "/images/q-c.webp",
      icon: "/svg/dropbox.svg",
      iconText: "Устойчивость в действии",
      description:
        "Экологичная упаковка, ответственное сырьё и производство с заботой о планете.",
    },
  ];

  // Timeline Card
  const timelineItems = [
    {
      heading: "Ощутите разницу каждый день",
      icon: "/svg/microsvg.svg",
      description: `Истинное здоровье начинается с качества и постоянства. Научно обоснованные формулы IPAR поддерживают ваше здоровье, энергию и долголетие — каждый день, на всю жизнь.`,
      align: "",
    },
    {
      heading: "Доверие экспертов, сила науки",
      icon: "/svg/trusted.svg",
      description: `Подкреплённые наукой и одобренные профессионалами, добавки IPAR объединяют передовые исследования, премиальные ингредиенты и точное качество.`,
      align: "right",
    },
    {
      heading: `Ваше здоровье, <br>Ваш выбор`,
      icon: "/svg/rocket.svg",
      description: `Каждое решение формирует ваше благополучие. Выбирайте IPAR, чтобы питать, усиливать и переосмысливать своё здоровье.`,
      align: "left",
    },
  ];

  // Grid Gallery


  const galleryImages = [
    { src: "../images/about-gallery-1.webp", alt: "Gallery Image 1" },
    { src: "../images/about-gallery-2.webp", alt: "Gallery Image 2", className: "landscape" },
    { src: "../images/about-gallery-4.webp", alt: "Gallery Image 3" },
    { src: "../images/about-gallery-5.webp", alt: "Gallery Image" },
    { src: "../images/about-gallery-6.webp", alt: "Gallery Image" },
  ];

  return (
    <div className='about_us about_us_ru community_page'>
      {/* Header */}
      <HeaderIntializeRU showDashboardMenu={false} pvBars={false} />

      <HeroSection
        title={`Движение за науку, здоровье и устойчивое развитие`}
        description="Ощутите здоровье нового поколения с передовыми, научно обоснованными добавками IPAR, разработанными для исключительной чистоты, эффективности и инноваций."
        shapeUrl="../svg/green-logo.svg"
        imageUrl="../images/girl-with-book.webp"
      />

      <section class="innovation py-5 iparMore">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6">
              <img class="w-100" src="../images/ipar-more.webp" alt="Ipar More" />
            </div>
            <div class="col-lg-6 right">
              <img class="dna-img dna" src="../images/dna-1.webp" alt="ДНК" />
              <h1 class="green-title fw-bold text-uppercase green-head-title">
                IPAR — это больше, чем бренд
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle">
                Это движение
              </h3>
              <p class="gray mt-4">
                Мы объединились с тысячами людей, которые делятся своими историями, впечатлениями и преобразованиями благодаря нашим продуктам. Их опыт вдохновляет нас продолжать расширять границы нутрицевтики и устойчивых инноваций.
              </p>
              <img class="dna-img" src="../images/dna-1.webp" alt="Изображение ДНК" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Two */}

      <section class="innovation-two py-5 pt-0">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6">
              <img class="dna dna-img" src="../images/dna-1.webp" alt="ДНК" />
              <h1 class="green-title fw-bold green-head-title text-uppercase">
                Наука нового поколения
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle">
                Формулы созданы с помощью
              </h3>
              <p class="gray mt-4">
                передовых биотехнологий и точной инженерии для оптимального здоровья и долголетия.
              </p>
            </div>
            <div class="col-lg-6 position-relative">
              <img class="dna dna-img position-absolute top-0" src="../images/dna-1.webp" alt="ДНК" />
              <div class="img">
                <img class="w-100" src="../images/pic-7.webp" alt="ДНК" />
              </div>
              <img class="lash position-absolute" src="../images/lash.webp" alt="всплеск" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Three */}

      <section class="innovation-two py-5 mt-5">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6 d-flex align-items-end capsule_img">
              <div class="img">
                <img src="../images/capsule.webp" alt="капсула" />
              </div>
              <div class="img">
                <img class="dna-img" src="../images/dna-1.webp" alt="ДНК" />
              </div>
            </div>
            <div class="col-lg-6 position-relative">
              <img class="position-absolute lash-top" src="../images/lash.webp" alt="всплеск" />
              <h1 class="green-title fw-bold text-uppercase green-head-title">
                Чистота. Потенция. Прозрачность.
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle">
                Каждый ингредиент
              </h3>
              <p class="gray mt-4">
                намеренно подобран, тщательно протестирован и полностью отслежен.
              </p>
              <div class="img">
                <img class="dna-img dna-center-end position-absolute" src="../images/dna-1.webp" alt="ДНК" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Innovation Card */}
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            {cardData.map((card, idx) => (
              <InnovationCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Vertical Card */}

      <TimelineVerticalCard title="Choose IPAR" items={timelineItems} />


      {/* Grid Gallery Section */}

      <section class="grid-gallery-section mt-4">
        <div class="container">
          <h1 class="black fw-medium text-center">
            Станьте частью чего-то большего
          </h1>
          <p class="gray text-center mt-3" >
            Станьте частью сообщества, которое выступает за научно обоснованное благополучие,
            устойчивый образ жизни и более здоровое будущее. В IPAR каждый ваш выбор – ради здоровья, образа жизни и планеты – создаёт
            эффект ряби, приводящий к значимым изменениям.
          </p>

          <div className="grid-gallery grid-gallery-two mt-5">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className={`gallery-itm ${item.className || ""}`}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Registration Seciton */}
      <div className="register-section">
        <CommunitySection title='Присоединяйтесь к нашему сообществу' description="Откройте для себя здоровье будущего с инновационными добавками IPAR — чистыми, мощными, научно обоснованными." buttonText='Регистрируйтесь сейчас' />
      </div>

      <FooterRu />
    </div >
  )
}

export default CommunityRU