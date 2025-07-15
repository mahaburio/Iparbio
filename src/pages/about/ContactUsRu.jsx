import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import { PhoneNumberInput } from '../../components/input/InputFields'
import { RiMapPinFill } from 'react-icons/ri';
import Footer from '../../components/footer/footer';
import FooterRu from '../../components/footer/FooterRu';
import HeaderIntializeRU from '../../components/header/HeaderRu';

const ContactUsRu = () => {

  const locationsData = [
    {
      country: 'IPAR США',
      organization: 'IPAR Health Sciences Inc',
      address: ['Центр Columbia', '701 5-я Авеню', 'Сиэтл, WA 98104'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: 1-833-843-4727',
        'SupportUS@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–16:00 (PST)',
      ],
    },
    {
      country: 'IPAR Канада',
      organization: 'IPAR Health',
      address: ['Pacific Centre', '701 West Georgia St, #1500', 'Ванкувер, V7Y 1C6, BC'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +1 (604)801-5988',
        'SupportCA@iparhealth.com',
        'Часы работы: Пн–Пт 11:00–16:00 (MST/MDT)',
      ],
    },
    {
      country: 'IPAR Китай',
      organization: 'IPAR Health Sciences Ltd',
      address: [
        'Тяньхэ Нью-Сити',
        'Здание A, Henan E Rd,',
        'Высокотехнологичная зона (район Синьши), Урумчи, Китай',
        '№109, Quanyun Rd, Шэньян, Китай, Пилотная зона свободной торговли (Ляонин), Китай',
      ],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: 400-888-4727',
        'SupportCN@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–17:00',
      ],
    },
    {
      country: 'IPAR Казахстан',
      organization: 'IPAR Health Kazakhstan',
      address: ['ул. Шевченко, 90, Алматы 050022, Казахстан'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +7(747)313-7888',
        'SupportKZ@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–17:00',
      ],
    },
    {
      country: 'IPAR Кыргызстан',
      organization: 'IPAR Health',
      address: ['ул. Байтик Баатыра, 41, Бишкек 720005, Кыргызская Республика'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +996(312)442 755',
        'SupportKG@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–17:00',
      ],
    },
    {
      country: 'IPAR Узбекистан',
      organization: 'IPAR Biotech',
      address: ['ул. Амира Темура, 120A', 'Андижан 170100, Узбекистан'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +998979977717',
        'SupportUZ@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–17:00',
      ],
    },
    {
      country: 'IPAR Таджикистан',
      organization: 'IPAR Biotech',
      address: [
        'Бизнес-центр "Пойтахт", 4-й этаж, офис 408',
        'ул. Мирзо Турсунзаде, 45, Душанбе 730025, Таджикистан',
      ],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +992 000774727',
        'SupportTJ@iparhealth.com',
        'Часы работы: Пн–Пт 10:00–17:00',
      ],
    },
    {
      country: 'IPAR Россия',
      organization: 'IPAR Biotech International',
      address: ['1-й Вражский переулок, д.4, стр.3B', 'Москва 119121, Россия'],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +7(499)2487458',
        'SupportRU@iparhealth.com',
        'Часы работы: Пн–Пт 11:00–17:00',
      ],
    },
    {
      country: 'IPAR Турция',
      organization: 'IPAR Health',
      address: [
        'Huzur Mah. Maslak Ayazağa Cad. No : 4',
        'Uniq B Blok K:5',
        'Айазага/Сарыер, Стамбул 34396',
      ],
      contact: [
        'Служба поддержки клиентов',
        'Телефон: +90(212)939-2700',
        'SupportTR@iparhealth.com',
        'Часы работы: Пн–Пт 9:00–17:00',
      ],
    },
  ];

  return (
    <div className='about_us about_us_ru'>
      {/* Header */}
      <HeaderIntializeRU showDashboardMenu={false} pvBars={false} />


      {/* Contact Hero */}
      <section class="contact-hero py-5 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 d-flex align-items-center justify-content-center">
              <div class="img">
                <img src="../images/contact-us.webp" alt="Свяжитесь с нами" />
              </div>
            </div>
            <div class="col-lg-7 mt-lg-0 mt-4">
              <div class="contact-us-details">
                <div class="main-head-title">Свяжитесь с нами</div>
                <h5 class="gray fw-medium mt-3">
                  Есть вопрос, но не знаете, к кому обратиться? Заполните форму, и мы с вами свяжемся!
                </h5>

                <div class="input-section mt-5">
                  <form action="">
                    <div class="input-wrapper">
                      <div class="lb-in">
                        <label for="">Имя*</label>
                        <input type="text" required="" />
                      </div>
                      <div class="lb-in">
                        <label for="">Фамилия*</label>
                        <input type="text" required="" />
                      </div>

                      <div class="lb-in">
                        <label for="">Электронная почта*</label>
                        <input type="email" required="" placeholder="someone@gmail.com" />
                      </div>

                      <div class="lb-in">
                        <label for="">Телефон*</label>
                        <PhoneNumberInput />
                      </div>
                      <div class="lb-in subject">
                        <label for="">Добавьте тему</label>
                        <input type="text" />
                      </div>

                      <div class="lb-in message">
                        <label for="">Сообщение</label>
                        <textarea name="" id=""></textarea>
                      </div>
                    </div>
                    <div class="btn-sec text-end mt-4">
                      <button class="tsp-btn">Отмена</button>
                      <button class="black-btn">Отправить</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Location Section */}

      <section className="mt-5">
        <div className="container">
          <div className="locations">
            <div className="icon mb-3">
              <RiMapPinFill size={32} color='var(--white-100)' />
            </div>
            <div className="location-details">
              <h2 className="main-head-title">Локации</h2>
              {locationsData.map((loc, index) => (
                <div key={index} className="mt-5">
                  <div className="country fw-medium black">{loc.country}</div>
                  <div className="dts mt-3 ">
                    {/* Address */}
                    <div className="left">
                      <div className="org-name fw-medium black">{loc.organization}</div>
                      <ul className="p-0 m-0 gray">
                        {loc.address.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="right">
                      <ul className="p-0 m-0 gray">
                        {loc.contact.map((info, i) => (
                          <li key={i}>{info}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterRu />
    </div>
  )
}

export default ContactUsRu