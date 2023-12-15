// import "./profile.scss";

export default function Profile() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <nav className="header__nav">
            <div className="header__logo logo-mob">
              <a className="logo-mob__link" href="" target="_blank">
                <img
                  className="logo-mob__img"
                  src="img/logo-mob.png"
                  alt="logo"
                />
              </a>
            </div>
            <button className="header__btn-putAd btn-hov01" id="btputAd">
              Разместить объявление
            </button>
            <button className="header__btn-lk btn-hov01" id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header>
        <main className="main">
          <div className="main__container">
            <div className="main__center-block">
              <div className="main__menu menu">
                <a className="menu__logo-link" href="" target="_blank">
                  <img
                    className="menu__logo-img"
                    src="img/logo.png"
                    alt="logo"
                  />
                </a>
                <form className="menu__form" action="#">
                  <button className="menu__btn btn-hov02" id="btnGoBack">
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className="main__h2">Здравствуйте, Антон!</h2>

              <div className="main__profile profile">
                <div className="profile__content">
                  <h3 className="profile__title title">Настройки профиля</h3>
                  <div className="profile__settings settings">
                    <div className="settings__left">
                      <div className="settings__img">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                      <a
                        className="settings__change-photo"
                        href=""
                        target="_self"
                      >
                        Заменить
                      </a>
                    </div>
                    <div className="settings__right">
                      <form className="settings__form" action="#">
                        <div className="settings__div">
                          <label htmlFor="fname">Имя</label>
                          <input
                            className="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            value="Ан"
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="lname">Фамилия</label>
                          <input
                            className="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            value="Городецкий"
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="city">Город</label>
                          <input
                            className="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            value="Санкт-Петербург"
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="phone">Телефон</label>
                          <input
                            className="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            value="89161234567"
                            placeholder="+79161234567"
                          />
                        </div>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="main__title title">Мои товары</h3>
            </div>
            <div className="main__content">
              <div className="content__cards cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__container">
            <div className="footer__img">
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div className="footer__img">
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div className="footer__img">
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
