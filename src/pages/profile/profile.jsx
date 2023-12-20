import S from "./profile.module.scss";

export default function Profile() {
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

              <h2 className={S.main__h2}>Здравствуйте, Антон!</h2>

              <div className={`${S.main__profile} ${S.profile}`}>
                <div className={S.profile__content}>
                  <h3 className={`${S.profile__title} ${S.title}`}>
                    Настройки профиля
                  </h3>
                  <div className={`${S.profile__settings} ${S.settings}`}>
                    <div className={S.settings__left}>
                      <div className={S.settings__img}>
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                      <a
                        className={S.settings__change_photo}
                        href=""
                        target="_self"
                      >
                        Заменить
                      </a>
                    </div>
                    <div className={S.settings__right}>
                      <form className={S.settings__form} action="#">
                        <div className={S.settings__div}>
                          <label htmlFor="fname">Имя</label>
                          <input
                            className={S.settings__f_name}
                            id="settings-fname"
                            name="fname"
                            type="text"
                            value="Ан"
                            placeholder=""
                          />
                        </div>

                        <div className={S.settings__div}>
                          <label htmlFor="lname">Фамилия</label>
                          <input
                            className={S.settings__l_name}
                            id="settings-lname"
                            name="lname"
                            type="text"
                            value="Городецкий"
                            placeholder=""
                          />
                        </div>

                        <div className={S.settings__div}>
                          <label htmlFor="city">Город</label>
                          <input
                            className={S.settings__city}
                            id="settings-city"
                            name="city"
                            type="text"
                            value="Санкт-Петербург"
                            placeholder=""
                          />
                        </div>

                        <div className={S.settings__div}>
                          <label htmlFor="phone">Телефон</label>
                          <input
                            className={S.settings__phone}
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            value="89161234567"
                            placeholder="+79161234567"
                          />
                        </div>

                        <button
                          className={`${S.settings__btn} ${S.btn_hov02}`}
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className={`${S.main__title} ${S.title}`}>Мои товары</h3>
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
