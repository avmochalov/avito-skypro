/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import S from "./editat.module.scss";
import {
  useAddAdsImgMutation,
  useDeleteImgMutation,
  useEditAdsMutation,
} from "../../../services/rtcAdsApiWithAuth";
import { useState } from "react";
import basket from "../../../assets/basket.svg";

export default function EditAt({ setIsEditWindowOpen, data }) {
  const [imgArray, setImgArray] = useState([]);
  const [imgUrlArray, setImgUrlArray] = useState([]);
  const [editAds] = useEditAdsMutation();
  const [addAdsImg] = useAddAdsImgMutation();
  const [deleteImg] = useDeleteImgMutation();
  const fileReader = new FileReader();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitAdForm = (formData) => {
    console.log(formData);
    const adsId = data.id;
    editAds({ adsId, formData })
      .unwrap()
      .then(() => {
        const fileCount = imgArray.length > 5 ? 5 : imgArray.length;
        console.log(adsId);
        for (let i = 0; i < fileCount; i++) {
          console.log(fileCount);
          console.log(imgArray);
          const body = new FormData();
          body.append("file", imgArray[i]);
          console.log(body);
          addAdsImg({ adsId, body });
        }
        setIsEditWindowOpen(false);
      });
  };

  const onSubmitAdsImg = (e) => {
    setImgArray([...imgArray, e.target.files[0]]);
    fileReader.readAsDataURL(e.target.files[0]);
  };
  const removeImg = (adsId, file_url) => {
    console.log(file_url);
    deleteImg({ adsId, file_url });
  };
  fileReader.onloadend = () => {
    setImgUrlArray([...imgUrlArray, fileReader.result]);
  };

  return (
    <div className={S.modal__block}>
      <div className={S.modal__content}>
        <h3 className={S.modal__title}>Новое объявление</h3>
        <div
          className={S.modal__btn_close}
          onClick={() => setIsEditWindowOpen(false)}
        >
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
              defaultValue={data.title}
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
              defaultValue={data.description}
              {...register("description", {
                required: {
                  value: true,
                  message: "Заполните поле",
                },
              })}
            ></textarea>
            {errors && errors.description && (
              <span className="text-[red]">{errors.description.message}</span>
            )}
          </div>
          <div className={S.form_newArt__block}>
            <p className={S.form_newArt__p}>
              Фотографии товара<span>не более 5 фотографий</span>
            </p>

            <div className={S.form_newArt__bar_img}>
              {data.images.length > 0 &&
                data.images.map((img, index) => (
                  <div key={index} className={S.form_newArt__img}>
                    <img src={"http://localhost:8090/" + img.url} alt="" />
                    <div
                      className={S.delete_btn}
                      onClick={() => removeImg(img.ad_id, img.url)}
                    >
                      <img src={basket} alt="" />
                    </div>

                    <div className={S.form_newArt__img_cover}></div>
                  </div>
                ))}

              {imgArray.length > 0 &&
                imgArray.length < 5 - data.images.length &&
                imgUrlArray.map((url, index) => (
                  <div key={index} className={S.form_newArt__img}>
                    <img src={url} alt="" />
                    <div className={S.form_newArt__img_cover}></div>
                  </div>
                ))}
              {data.images.length < 5 && (
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
              defaultValue={data.price}
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
  );
}
