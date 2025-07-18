import React from 'react';
import '../../styles/footer/footer.css';

const FooterRu = ({ footerDefault = true, footerOnlyDesc = false }) => {
  const renderCopyrightSection = () => (
    <div className="container">
      <div className="copyright-section">
        <div className="copyright-year">Ipar Health © Авторское право 2025</div>
        <div className="logo">
          <a href="/">
            <img src="../svg/ipar-logo.svg" alt="ipar_logo" />
          </a>
        </div>
        <div className="privacy">
          <a href="">Политика конфиденциальности</a>
          <a href="">Условия использования</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {footerDefault && (
        <footer className="footer-section mt-5">
          <div className="container-fluid">
            <div className="row">
              {/* Продукты */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                <h4>Продукты</h4>
                <ul className="listed-item">
                  <li><a href="">Все</a></li>
                  <li><a href="">Питание</a></li>
                  <li><a href="">Личная гигиена и красота</a></li>
                  <li><a href="">Женское здоровье</a></li>
                  <li><a href="">Экодом</a></li>
                  <li><a href="">Оптимизаторы</a></li>
                  <li><a href="">Бизнес-инструменты</a></li>
                </ul>
              </div>

              {/* Компания */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                <h4>Компания</h4>
                <ul className="listed-item">
                  <li><a href="">Главная</a></li>
                  <li><a href="">О компании Ipar</a></li>
                  <li><a href="">Инновации</a></li>
                  <li><a href="">Наука и здоровье</a></li>
                  <li><a href="">Инициатива “Надежда для девочек”</a></li>
                  <li><a href="">Пожертвовать</a></li>
                </ul>
              </div>

              {/* Контакты */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                <h4>Связаться с нами</h4>
                <ul className="listed-item">
                  <li><a href="">Контакты</a></li>
                  <li><a href="">Вход</a></li>
                </ul>
              </div>

              {/* Подписка */}
              <div className="newsletter-sec col-lg-4 col-md-6 col-sm-6 text-xl-start text-lg-start text-md-start text-sm-start text-center pe-xl-5 pe-lg-4 pe-md-0 pe-sm-0 pe-0  mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                <h4>Подпишитесь на рассылку</h4>
                <div className="input-wrapper">
                  <input type="email" placeholder="ваш@email.com" />
                  <div className="send-icon"><i className="ri-send-plane-fill"></i></div>
                </div>
                <p>Получайте предложения и скидки прямо на вашу почту</p>
                <p className="follow-us-desc">
                  *Заявления не были оценены FDA. Продукты не предназначены для диагностики, лечения или предотвращения заболеваний.
                </p>
              </div>
            </div>

            {/* Социальные иконки */}
            <div className="social-icon-section mt-5">
              <div className="container d-flex justify-content-center align-items-center">
                <div className="icon d-flex">
                  <a href="" className="icon-item"><i className="ri-facebook-fill"></i></a>
                  <a href="" className="icon-item"><i className="ri-instagram-line"></i></a>
                  <a href="" className="icon-item"><i className="ri-twitter-fill"></i></a>
                  <a href="" className="icon-item"><i className="ri-youtube-fill"></i></a>
                  <a href="" className="icon-item micro-icon">
                    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.714" height="32.709" viewBox="8.145 2.47 25.714 32.709">
                      <g data-name="Group 8031">
                        <g data-name="Group 8030" clipPath="url(#a)">
                          <path d="M29.993 33.591h-1.538l-2.329-2.274a12.303 12.303 0 0 0 4.146-2.532c2.33-2.147 3.587-4.979 3.587-7.983 0-3.004-1.257-5.88-3.587-7.983-1.723-1.588-3.913-2.66-6.289-3.09l2.097-2.661c.233-.3.093-.772-.28-1.029l-.233-.13.606-.772.186.129c.186.128.466.128.559-.043.094-.172.046-.386-.14-.515l-3.214-2.146c-.186-.129-.466-.129-.559.043-.14.171-.046.386.14.515l.187.129-.606.772-.187-.214c-.419-.258-.931-.215-1.164.085l-8.339 10.644c-.233.3-.093.773.28 1.03l.14.085c0 .344-.094.816-.513 1.374 0 0-.373.644.093 1.03l.512.343.513.344c.559.3 1.071-.214 1.071-.214a2.488 2.488 0 0 1 1.258-.902l.14.086c.419.257.931.215 1.165-.086l4.099-5.236c4.891.128 8.851 3.862 8.851 8.369 0 4.635-4.1 8.368-9.084 8.368-4.519 0-8.245-3.046-8.991-6.995h4.007c.465 0 .884-.343.884-.815v-.344c0-.428-.372-.815-.884-.815H9.03c-.466 0-.885.343-.885.815v.344c0 .429.372.815.885.815h.373c.325 2.489 1.537 4.807 3.494 6.609a12.295 12.295 0 0 0 4.145 2.533l-2.329 2.274h-1.537c-.466 0-.885.344-.885.815 0 .43.373.816.885.816h16.817c.465 0 .885-.343.885-.816 0-.386-.42-.772-.885-.772" fill="#8bbc3b" fillRule="evenodd" data-name="Path 8853"></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path d="M0 0h25.697v32.8H0V0z" data-name="Rectangle 3541" transform="translate(8.139 2.433)"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Авторские права */}
          {renderCopyrightSection()}
        </footer>
      )}

      {footerOnlyDesc && (
        <footer className="footer-section onlyDesc mt-5 pt-5">
          {renderCopyrightSection()}
        </footer>
      )}
    </>
  );
};

export default FooterRu;
