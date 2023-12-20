import { useForm } from "react-hook-form";
import S from "./signin.module.scss";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={S.wrapper}>
      <div className={S.container_enter}>
        <div className={S.modal__block}>
          <form
            className={S.modal__form_login}
            id="formLogIn"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={S.modal__logo}>
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className={`${S.modal__input} ${S.login}`}
              {...register("email", {
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Неверный формат e-mail",
                },
                required: {
                  value: true,
                  message: "Заполните поле",
                },
              })}
              type="text"
              id="formlogin"
              placeholder="email"
              name="email"
            />
            {errors && errors.email && <span>{errors.email.message}</span>}
            <input
              className={`${S.modal__input} ${S.password}`}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              {...register("password", {
                required: {
                  value: true,
                  message: "Заполните поле",
                },
                minLength: {
                  value: 6,
                  message: "Пароль должен быть больше 6 символов",
                },
              })}
            />
            {errors && errors.password && <span>{errors.password.message}</span>}
            <button className={S.modal__btn_enter} id="btnEnter">
              {/* <a href="../index.html">Войти</a>{" "} */}
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
