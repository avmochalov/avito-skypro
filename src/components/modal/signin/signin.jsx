import S from "./signin.module.scss";

export default function Signin() {
  return (
    <div className={S.wrapper}>
      <div className={S.container_enter}>
      <div className={S.modal__block}>
          <form className={S.modal__form_login} id="formLogIn" action="#">
            <div className={S.modal__logo}>
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className={`${S.modal__input} ${S.login}`}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className={`${S.modal__input} ${S.password}`}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className={S.modal__btn_enter} id="btnEnter">
              <a href="../index.html">Войти</a>{" "}
            </button>
            <button className={S.modal__btn_signup} id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
