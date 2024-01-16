import { useForm } from "react-hook-form";
import S from "./addnewat.module.scss";
import { useAddAdsMutation } from "../../../services/rtcAdsApiWithAuthjs";
import { useState } from "react";
export default function AddNewAt() {
  const [imgArray, setImgArray] = useState([]);
  const [imgUrlArray, setImgUrlArray] = useState([]);
  const [addAds] = useAddAdsMutation();
  const fileReader = new FileReader();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitAdForm = (formData) => {
    console.log(formData);
    addAds(formData);
  };

  const onSubmitAdsImg = (e) => {
    setImgArray(e.target.files);
    fileReader.readAsDataURL(e.target.files[0]);
  };

  console.log(imgArray[0]);
  console.log(imgArray.length > 0);
  fileReader.onloadend = () => {
    console.log(fileReader.result);
    setImgUrlArray([...imgUrlArray, fileReader.result]);
  };

  console.log(imgUrlArray);
  return (
    <div className={S.wrapper}>
      <div className={S.container_bg}>
        <div className={S.modal__block}>
          <div className={S.modal__content}>
            <h3 className={S.modal__title}>Новое объявление</h3>
            <div className={S.modal__btn_close}>
              <div className={S.modal__btn_close_line}></div>
            </div>
            <form
              className={`${S.modal__form_newArt} ${S.form_newArt}`}
              id="formNewArt"
              action="#"
              onSubmit={handleSubmit(onSubmitAdForm)}
            >
              <div className={S.form_newArt__block}>
                <label htmlFor="name">Название</label>
                <input
                  className={S.form_newArt__input}
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Заполните поле",
                    },
                  })}
                />
                {errors && errors.title && (
                  <span className="text-[red]">{errors.title.message}</span>
                )}
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
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Заполните поле",
                    },
                  })}
                ></textarea>
                {errors && errors.description && (
                  <span className="text-[red]">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className={S.form_newArt__block}>
                <p className={S.form_newArt__p}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>

                <div className={S.form_newArt__bar_img}>
                  {imgArray.length > 0 &&
                    imgUrlArray.map((url) => (
                      <div className={S.form_newArt__img}>
                        <img src={url} alt="" />
                        <div className={S.form_newArt__img_cover}></div>
                      </div>
                    ))}

                  {imgUrlArray.length < 5 && (
                    <div className={S.form_newArt__img}>
                      <input
                        className={S.file_input}
                        multiple
                        type="file"
                        onChange={(e) => onSubmitAdsImg(e)}
                      />
                      <div className={S.form_newArt__img_cover}></div>
                    </div>
                  )}
                </div>
              </div>
              <div className={`${S.form_newArt__block} ${S.block_price}`}>
                <label htmlFor="price">Цена</label>
                <input
                  className={S.form_newArt__input_price}
                  type="number"
                  name="price"
                  id="formName"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Заполните поле",
                    },
                  })}
                />
                {errors && errors.price && (
                  <span className="text-[red]">{errors.price.message}</span>
                )}
                <div className={S.form_newArt__input_price_cover}></div>
              </div>

              <button
                className={`${S.form_newArt__btn_pub} ${S.btn_hov02}`}
                id="btnPublish"
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
