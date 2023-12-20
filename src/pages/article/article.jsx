import S from "./article.module.scss";

export default function Article() {
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <header className={S.header}>
          <nav className={S.header__nav}>
            <div className={`${S.header__logo} ${S.logo_mob}`}>
              <a className={S.logo_mob__link} href="" target="_blank">
                <img
                  className={S.logo_mob__img}
                  src="img/logo-mob.png"
                  alt="logo"
                />
              </a>
            </div>
            <button className={`${S.header__btn_putAd} ${S.btn_hov01}`} id="btputAd">
              Разместить объявление
            </button>
            <button className={`${S.header__btn_lk} ${S.btn_hov01}`} id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header>

        <main className={S.main}>
          <div className={S.main__container}>
            <div className={`${S.main__menu} ${S.menu}`}>
              <a className={S.menu__logo_link} href="" target="_blank">
                <img className={S.menu__logo_img} src="img/logo.png" alt="logo" />
              </a>
              <form className={S.menu__form} action="#">
                <button className={`${S.menu__btn_serch} ${S.btn_hov02}`} id="btnGoBack">
                  Вернуться на главную
                </button>
              </form>
            </div>
          </div>

          <div className={`${S.main__artic} ${S.artic}`}>
            <div className={`${S.artic__content} ${S.article}`}>
              <div className={S.article__left}>
                <div className={S.article__fill_img}>
                  <div className={S.article__img}>
                    <img src="" alt="" />
                  </div>
                  <div className={S.article__img_bar}>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className={`${S.article__img_bar_mob} ${S.img_bar_mob}`}>
                    <div className={`${S.img_bar_mob__circle} ${S.circle_active}`}></div>
                    <div className={S.img_bar_mob__circle}></div>
                    <div className={S.img_bar_mob__circle}></div>
                    <div className={S.img_bar_mob__circle}></div>
                    <div className={S.img_bar_mob__circle}></div>
                  </div>
                </div>
              </div>
              <div className={S.article__right}>
                <div className={S.article__block}>
                  <h3 className={`${S.article__title} ${S.title}`}>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </h3>
                  <div className={S.article__info}>
                    <p className={S.article__date}>Сегодня в 10:45</p>
                    <p className={S.article__city}>Санкт-Петербург</p>
                    <a className={S.article__link} href="" target="_blank" rel="">
                      23 отзыва
                    </a>
                  </div>
                  <p className={S.article__price}>2 200 ₽</p>
                  <button className={`${S.article__btn} ${S.btn_hov02}`}>
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                  <div className={`${S.article__author} ${S.author}`}>
                    <div className={S.author__img}>
                      <img src="" alt="" />
                    </div>
                    <div className={S.author__cont}>
                      <p className={S.author__name}>Кирилл</p>
                      <p className={S.author__about}>
                        Продает товары с августа 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={S.main__container}>
            <h3 className={`${S.main__title} ${S.title}`}>Описание товара</h3>
            <div className={S.main__content}>
              <p className={S.main__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </main>

        <footer className={S.footer}>
          <div className={S.footer__container}>
            <div className={S.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div className={S.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div className={S.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
