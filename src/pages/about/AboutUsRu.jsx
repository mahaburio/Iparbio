import React from 'react';
import AboutHero from '../../components/about-us/AboutHero';
import InnovationCard from '../../components/about-us/InnovationCard';
import CommunitySection from '../../components/common/Cta';
import FooterRu from '../../components/footer/FooterRu';
import HeaderIntializeRU from '../../components/header/HeaderRu';

const AboutUsRu = () => {
  const sectionData = {
    title: "Преимущество в инновациях для здоровья",
    subtitle: "От исследований до финального продукта",
    description: `IPAR — это быстрорастущая компания в сфере здоровья, 
      располагающая современным R&D-центром и зарегистрированным в FDA производственным предприятием с сертификацией GMP — Ipar Pharm,
      предоставляющим CDMO-услуги для фармацевтической отрасли. Мы присутствуем в странах Америки, Центральной Азии и Азиатско-Тихоокеанского региона. 
      Наше стремление к качеству и инновациям отражается на каждом этапе — от исследований до производства готовой продукции.`,
    dnaImage: "/images/dna-1.webp",
    mainImage: "/images/excellence-wellness-innovation.webp",
    icons: [
      "../svg/microicon.svg",
      "../svg/verfied.svg",
      "../svg/medicine.svg",
      "../svg/user-mlt.svg",
    ],
  };

  const cardData = [
    {
      image: "/images/karlighach-central.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Научные инновации и сила природы",
      description:
        "IPAR находится на передовой линии инноваций в сфере здоровья, объединяя научный подход с мудростью природы. Каждое наше изделие проходит клинические исследования и строгие тесты на чистоту, эффективность и результативность. Мы создаем решения для иммунитета, клеточного обновления, метаболического баланса и здорового старения.",
    },
    {
      image: "/images/dr-platinum.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Укрепляем сообщества, преображаем жизни",
      description:
        "В IPAR мы верим в силу сообщества и личностного роста. Мы даем возможность каждому достичь финансовой независимости и вести здоровый образ жизни. Наша глобальная сеть поддерживает наставничество, рост и вдохновляет на перемены к лучшему.",
    },
  ];

  return (
    <div className='about_us about_us_ru'>
      <HeaderIntializeRU showDashboardMenu={false} pvBars={false} />

      <AboutHero
        title={`Здоровая жизнь, <br /> Яркое будущее.`}
        description="Наука и инновации — это сердце нашей деятельности. Мы стремимся к совершенству, честности и ответственности."
        shapeUrl="../images/leaf-line.webp"
        imageUrlShow={false}
      />

      <section className="py-5">
        <div className="container">
          <p className="black">
            IPAR — ведущая американская компания в сфере питания, специализирующаяся на FemTech, женском здоровье, питании и wellness.
            Штаб-квартира находится в Сиэтле, США. Мы объединяем передовые технологии с силой растений, чтобы создавать эффективные решения для долголетия, энергии и баланса.
          </p>
        </div>
      </section>

      <section className="about-scientist bg-gray py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex align-items-center" data-aos="fade-right">
              <div className="content gray">
                <p>
                  " Долговременное здоровье начинается с понимания метаболического баланса,
                  клеточных процессов и взаимодействия между генетикой, питанием и окружающей средой.
                  <br />
                  <span className="ps-2">
                    Через научные инновации и точное питание мы можем раскрыть потенциал тела к долголетию, устойчивости и жизненной энергии — давая каждому возможность процветать."
                  </span>
                </p>
                <p className="text-end about">
                  <span>
                    <b>– Аарон Акташ,</b> Ph.D., основатель, фармацевт, ученый и биотехнолог
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img" data-aos="flip-left">
                <img src="../images/scientist.webp" alt="Scientist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation py-5">
        <div className="container">
          <div className="img" data-aos="fade-down">
            <img className="dna-img" src={sectionData.dnaImage} alt="dna-shape" />
          </div>

          <div className="row mt-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="green-title green-head-title fw-bold text-uppercase">
                {sectionData.title}
              </h1>
              <h3 className="fw-bold head-subtitle text-uppercase">{sectionData.subtitle}</h3>
              <p className="gray mt-4">{sectionData.description}</p>

              <div className="icon mt-3 d-flex justify-content-center gap-2 flex-wrap">
                {sectionData.icons.map((icon, index) => (
                  <img key={index} src={icon} alt={`icon-${index}`} />
                ))}
              </div>

              <img className="dna dna-img" src={sectionData.dnaImage} alt="dna-bottom" />
            </div>

            <div className="col-lg-5 mt-lg-0 mt-5 d-flex align-items-center justify-content-center">
              <div className="img">
                <img className="w-100" src={sectionData.mainImage} alt="Wellness Innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            {cardData.map((card, idx) => (
              <InnovationCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-two py-5 pt-0">
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-5 mt-lg-0 mt-5 d-flex align-items-center justify-content-center">
              <div className="img">
                <img className="w-100" src="/images/a-healther.webp" alt="A Healthier Life" />
              </div>
            </div>
            <div className="col-lg-7">
              <img className="dna dna-img" src="/images/dna-1.webp" alt="DNA Icon" />
              <h1 className="green-title green-head-title fw-bold text-uppercase">
                Здоровая жизнь, яркий мир.
              </h1>
              <h3 className="fw-bold text-uppercase head-subtitle">
                Наш подход к wellness — это нечто большее, чем просто продукты
              </h3>
              <p className="gray mt-4">
                Мы вдохновляем на здоровый образ жизни и строим сильные сообщества. Каждый продукт IPAR создан с заботой о теле и разуме, помогая людям обрести энергию и внутренний баланс.
              </p>
              <div className="img d-flex justify-content-center mt-3">
                <img className="dna-img" src="/images/dna-1.webp" alt="DNA Bottom Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section bg-gray py-5">
        <div className="container">
          <img src="/images/brand-ru.webp" alt="Brand" />
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="ms-itm">
              <img src="../svg/checkmark-man.svg" alt="Mission" />
              <h4>Наша миссия</h4>
              <p>
                Улучшать жизнь через wellness и создавать сообщества, где каждый может процветать.
              </p>
            </div>

            <div className="ms-itm">
              <img src="../svg/workout.svg" alt="Workout" />
              <h4>Наше видение</h4>
              <p>
                Стать надежным лидером в области инноваций для здоровья, помогая людям жить лучше.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Registration Seciton */}
      <div className="register-section">
        <CommunitySection title='Присоединяйтесь к нашему сообществу' description="Откройте для себя здоровье будущего с инновационными добавками IPAR — чистыми, мощными, научно обоснованными." buttonText='Регистрируйтесь сейчас' />
      </div>


      {/* Footer */}
      <FooterRu />
    </div>
  );
};

export default AboutUsRu;
