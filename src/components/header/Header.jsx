import { NavLink } from "react-router-dom";
import S from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [isUserAuth, setIsUserAuth] = useState(
    Boolean(localStorage.getItem("auth_data"))
  );
  return (
    <>
      {isUserAuth ? (
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
            <NavLink to="/profile">
            <button className={`${S.header__btn_lk} ${S.btn_hov01}`} id="btnlk">
              Личный кабинет
            </button>
            </NavLink>
            <button
              className={`${S.header__btn_lk} ${S.btn_hov01}`}
              id="btnlk"
              onClick={() => {
                localStorage.clear();
                setIsUserAuth(Boolean(localStorage.getItem("auth_data")));
              }}
            >
              Выйти
            </button>
          </nav>
        </header>
      ) : (
        <header className={S.header}>
          <nav className={S.header__nav}>
            <NavLink to="/signin">
              <button
                className={`${S.header__btn_main_enter} ${S.btn_hov01}`}
                id="btnMainEnter"
              >
                Вход в личный кабинет
              </button>
            </NavLink>
          </nav>
        </header>
      )}
    </>
  );
}
