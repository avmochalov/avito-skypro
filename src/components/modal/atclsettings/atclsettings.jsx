import S from "./atclsettings.module.scss";

export default function Atclsettings() {
  return (
    <div className={S.wrapper}>
      <div className={S.container_bg}>
        <div className={S.modal__block}>
          <div className={S.modal__content}>
            <h3 className={S.modal__title}>Редактировать объявление</h3>
            <div className={S.modal__btn_close}>
              <div className={S.modal__btn_close_line}></div>
            </div>
            <form
              className={`${S.modal__form_newArt} ${S.form_newArt}`}
              id="formNewArt"
              action="#"
            >
                <div className={S.form_newArt__block}>
                <label htmlFor="name">Название</label>
                <input
                  className={S.form_newArt__input}
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value="Ракетка для большого тенниса Triumph Pro STС Б/У"
                />
              </div>
              <div className={S.form_newArt__block}>
                <label htmlFor="text">Описание</label>
                <textarea
                  className={S.form_newArt__area}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </textarea>
              </div>
              <div className={S.form_newArt__block}>
                <p className={S.form_newArt__p}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={S.form_newArt__bar_img}>
                  <div className={S.form_newArt__img}>
                    <img src="" alt="" />
                    <div className={S.form_newArt__img_cover}></div>
                  </div>
                  <div className={S.form_newArt__img}>
                    <img src="" alt="" />
                    <div className={S.form_newArt__img_cover}></div>
                  </div>
                  <div className={S.form_newArt__img}>
                  <div className={S.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={S.form_newArt__img}>
                  <div className={S.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={S.form_newArt__img}>
                  <div className={S.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className={`${S.form_newArt__block} ${S.block_price}`}>
                <label htmlFor="price">Цена</label>
                <input
                  className={S.form_newArt__input_price}
                  type="text"
                  name="price"
                  id="formName"
                  value="2 200"
                />
                <div className={S.form_newArt__input_price_cover}></div>
              </div>

              <button
                className={`${S.form_newArt__btn_pub} ${S.btn_hov02}`}
                id="btnPublish"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
