// import { useEffect, useState } from "react";
// import { getUserData } from "../../api/userApi";
// import { refreshUserData } from "../../services/helpers";
import { useForm } from "react-hook-form";
import {
  useGetUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} from "../../services/rtcUserApi";
import S from "./profile.module.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";

export default function Profile() {
  const [updateUser] = useUpdateUserMutation();
  const [uploadAvatar] = useUploadAvatarMutation();
  const { register, handleSubmit } = useForm();
  const onSubmitUserForm = (formData) => {
    console.log(formData);
    updateUser(formData);
  };

  const onSubmitAvatar = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const body = new FormData();
    body.append("file", e.target.files[0]);
    console.log(body);
    uploadAvatar({ body });
  };

  const { data: user, isLoading: isUserLoading } = useGetUserQuery();
  {
    !isUserLoading && console.log(user);
  }
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <Header />
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
                  <NavLink to={"/"}>
                    <button
                      className={`${S.menu__btn} ${S.btn_hov02}`}
                      id="btnGoBack"
                    >
                      Вернуться на&nbsp;главную
                    </button>
                  </NavLink>
                </form>
              </div>
              {!isUserLoading && (
                <>
                  {" "}
                  <h2 className={S.main__h2}>Здравствуйте, {user.name}!</h2>
                  <div className={`${S.main__profile} ${S.profile}`}>
                    <div className={S.profile__content}>
                      <h3 className={`${S.profile__title} ${S.title}`}>
                        Настройки профиля
                      </h3>
                      <div className={`${S.profile__settings} ${S.settings}`}>
                        <div className={S.settings__left}>
                          <div className={S.settings__img}>
                            <a href="" target="_self">
                              <img
                                src={
                                  user.avatar
                                    ? "http://localhost:8090/" + user.avatar
                                    : "#"
                                }
                                alt=""
                              />
                            </a>
                          </div>
                          <label
                            htmlFor="file-upload"
                            className={S.custom_file_upload}
                          >
                            <i className={S.settings__change_photo}>Заменить</i>
                          </label>
                          <input
                            className={S.input_file}
                            id="file-upload"
                            type="file"
                            onChange={(e) => onSubmitAvatar(e)}
                          />
                        </div>
                        <div className={S.settings__right}>
                          <form
                            className={S.settings__form}
                            action="#"
                            onSubmit={handleSubmit(onSubmitUserForm)}
                          >
                            <div className={S.settings__div}>
                              <label htmlFor="fname">Имя</label>
                              <input
                                className={S.settings__f_name}
                                id="settings-fname"
                                name="fname"
                                type="text"
                                defaultValue={user.name}
                                placeholder=""
                                {...register("name")}
                              />
                            </div>

                            <div className={S.settings__div}>
                              <label htmlFor="lname">Фамилия</label>
                              <input
                                className={S.settings__l_name}
                                id="settings-lname"
                                name="lname"
                                type="text"
                                defaultValue={user.surname}
                                placeholder=""
                                {...register("surname")}
                              />
                            </div>

                            <div className={S.settings__div}>
                              <label htmlFor="city">Город</label>
                              <input
                                className={S.settings__city}
                                id="settings-city"
                                name="city"
                                type="text"
                                defaultValue={user.city}
                                placeholder=""
                                {...register("city")}
                              />
                            </div>

                            <div className={S.settings__div}>
                              <label htmlFor="phone">Телефон</label>
                              <input
                                className={S.settings__phone}
                                id="settings-phone"
                                name="phone"
                                type="tel"
                                defaultValue={user.phone}
                                placeholder="+77777777777"
                                {...register("phone")}
                              />
                            </div>

                            <button
                              className={`${S.settings__btn} ${S.btn_hov02}`}
                              // id="settings-btn"
                              // type="submit"
                            >
                              Сохранить
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </>
              )}

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
