// import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import S from "./signup.module.scss";
import { signupUser } from "../../api";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const regData = {
      password: data.password,
      role: "user",
      email: data.email,
      name: data.name,
      city: data.city,
    };
    if (data.password === data.confirm_password) {
      signupUser(regData).then(() => navigate('/signin'));
    } else {
      setError("Пароли не совпадают");
    }
  };
  return (
    <div className={S.wrapper}>
      <div className={S.container_signup}>
        <div className={S.modal__block}>
          <form
            className={S.modal__form_login}
            id="formLogUp"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={S.modal__logo}>
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className={`${S.modal__input} ${S.login}`}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
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
            />
            {errors && errors.email && (
              <span className="text-[red]">{errors.email.message}</span>
            )}
            <input
              className={`${S.modal__input} ${S.password_first}`}
              type="password"
              name="password"
              id="passwordFirst"
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
            {errors && errors.email && (
              <span className="text-[red]">{errors.password.message}</span>
            )}
            <input
              className={`${S.modal__input} ${S.password_double}`}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              {...register("confirm_password", {
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
            {errors && errors.email && (
              <span className="text-[red]">
                {errors.confirm_password.message}
              </span>
            )}
            <input
              className={`${S.modal__input} ${S.first_name}`}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              {...register("name")}
            />
            <input
              className={`${S.modal__input} ${S.first_last}`}
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              {...register("surname")}
            />
            <input
              className={`${S.modal__input} ${S.city}`}
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              {...register("city")}
            />
            {error && <span className="text-[red]">{error}</span>}
            <button className={S.modal__btn_signup_ent} id="SignUpEnter">
              <a>Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
