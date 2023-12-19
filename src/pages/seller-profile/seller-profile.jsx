import S from "./sellerProfile.module.scss";

export default function SellerProfile() {
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
            <button
              className={`${S.header__btn_putAd} ${S.btn_hov01}`}
              id="btputAd"
            >
              Разместить объявление
            </button>
            <button className={`${S.header__btn_lk} ${S.btn_hov01}`} id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header>

        <main className={S.main}>
          <div className={S.main__container}>
            <div className={S.main__center_block}>
              <div className={`${S.main__menu} ${S.menu}`}>
                <a className={S.menu__logo_link} href="" target="_blank">
                  <img
                    className={S.menu__logo_img}
                    src="img/logo.png"
                    alt="logo"
                  />
                </a>
                <form className={S.menu__form} action="#">
                  <button
                    className={`${S.menu__btn} ${S.btn_hov02}`}
                    id="btnGoBack"
                  >
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className={S.main__h2}>Профиль продавца</h2>

              <div className={`${S.main__profile_sell} ${S.profile_sell}`}>
                <div className={S.profile_sell__content}>
                  <div className={`${S.profile_sell__seller} ${S.seller}`}>
                    <div className={S.seller__left}>
                      <div className={S.seller__img}>
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className={S.seller__right}>
                      <h3 className={S.seller__title}>Кирилл Матвеев</h3>
                      <p className={S.seller__city}>Санкт-Петербург</p>
                      <p className={S.seller__inf}>
                        Продает товары с августа 2021
                      </p>

                      <div className={S.seller__img_mob_block}>
                        <div className={S.seller__img_mob}>
                          <a href="" target="_self">
                            <img src="#" alt="" />
                          </a>
                        </div>
                      </div>

                      <button className={`${S.seller__btn} ${S.btn_hov02}`}>
                        Показать&nbsp;телефон
                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className={`${S.main__title} ${S.title}`}>Товары продавца</h3>
            </div>
            <div className={S.main__content}>
              <div className={`${S.content__cards} ${S.cards}`}>
                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className={S.cards__item}>
                  <div className={`${S.cards__card} ${S.card}`}>
                    <div className={S.card__image}>
                      <a href="#" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className={S.card__content}>
                      <a href="" target="_blank">
                        <h3 className={S.card__title}>
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className={S.card__price}>2&nbsp;200&nbsp;₽</p>
                      <p className={S.card__place}>Санкт Петербург</p>
                      <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>
              </div>
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
