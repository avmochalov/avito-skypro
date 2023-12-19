import S from "./signup.module.scss";

export default function Signup() {
  return (
    <div className={S.wrapper}>
      <div className={S.container_signup}>
        <div className={S.modal__block}>
          <form className={S.modal__form_login} id="formLogUp" action="#">
            <div className={S.modal__logo}>
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className={`${S.modal__input} ${S.login}`}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              className={`${S.modal__input} ${S.password_first}`}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              className={`${S.modal__input} ${S.password_double}`}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              className={`${S.modal__input} ${S.first_name}`}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              className={`${S.modal__input} ${S.first_last}`}
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              className={`${S.modal__input} ${S.city}`}
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
            <button className={S.modal__btn_signup_ent} id="SignUpEnter">
              <a href="../index.html">Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
