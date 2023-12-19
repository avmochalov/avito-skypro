import S from "./reviews.module.scss";

export default function Reviews() {
  return (
    <div className={S.wrapper}>
      <div className={S.container_bg}>
        <div className={S.modal__block}>
          <div className={S.modal__content}>
            <h3 className={S.modal__title}>Отзывы о товаре</h3>
            <div className={S.modal__btn_close}>
              <div className={S.modal__btn_close_line}></div>
            </div>
            <div className={S.modal__scroll}>
              <form
                className={`${S.modal__form_newArt} ${S.form_newArt}`}
                id="formNewArt"
                action="#"
              >
                <div className={S.form_newArt__block}>
                  <label htmlFor="text">Добавить отзыв</label>
                  <textarea
                    className={S.form_newArt__area}
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </div>
                <button
                  className={`${S.form_newArt__btn_pub} ${S.btn_hov02}`}
                  id="btnPublish"
                >
                  Опубликовать
                </button>
              </form>

              <div className={`${S.modal__reviews} ${S.reviews}`}>
                <div className={`${S.reviews__review} ${S.reviews}`}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={S.review__right}>
                      <p className={`${S.review__name} ${S.font_t}`}>
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className={`${S.review__title} ${S.font_t}`}>Комментарий</h5>
                      <p className={`${S.review__text} ${S.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${S.reviews__review} ${S.reviews}`}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={S.review__right}>
                      <p className={`${S.review__name} ${S.font_t}`}>
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className={`${S.review__title} ${S.font_t}`}>Комментарий</h5>
                      <p className={`${S.review__text} ${S.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${S.reviews__review} ${S.reviews}`}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={S.review__right}>
                      <p className={`${S.review__name} ${S.font_t}`}>
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className={`${S.review__title} ${S.font_t}`}>Комментарий</h5>
                      <p className={`${S.review__text} ${S.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${S.reviews__review} ${S.reviews}`}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={S.review__right}>
                      <p className={`${S.review__name} ${S.font_t}`}>
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className={`${S.review__title} ${S.font_t}`}>Комментарий</h5>
                      <p className={`${S.review__text} ${S.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${S.reviews__review} ${S.reviews}`}>
                  <div className={S.review__item}>
                    <div className={S.review__left}>
                      <div className={S.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={S.review__right}>
                      <p className={`${S.review__name} ${S.font_t}`}>
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className={`${S.review__title} ${S.font_t}`}>Комментарий</h5>
                      <p className={`${S.review__text} ${S.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
