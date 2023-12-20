import { useState } from "react";
import Signin from "../../components/modal/signin/signin";
import S from "./main.module.scss";
export default function Main() {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <header className={S.header}>
          <nav className={S.header__nav}>
            <button
              className={`${S.header__btn_main_enter} ${S.btn_hov01}`}
              id="btnMainEnter"
              onClick={()=> setIsLoginWindowOpen(!isLoginWindowOpen)}
            >
              Вход в личный кабинет
            </button>
          </nav>
        </header>
        {isLoginWindowOpen && <Signin/>}
        <main className={S.main}>
          <div className={`${S.main__search} ${S.search}`}>
            <a className={S.search__logo_link} href="#" target="_blank">
              <img className={S.search__logo_img} src="img/logo.png" alt="logo" />
            </a>
            <a className={S.search__logo_mob_link} href="#" target="_blank">
              <img
                className={S.search__logo_mob_img}
                src="img/logo-mob.png"
                alt="logo"
              />
            </a>
            <form className={S.search__form} action="#">
              <input
                className={S.search__text}
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                className={S.search__text_mob}
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button className={`${S.search__btn} ${S.btn_hov02}`}>Найти</button>
            </form>
          </div>
          <div className={S.main__container}>
            <h2 className={S.main__h2}>Объявления</h2>

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
