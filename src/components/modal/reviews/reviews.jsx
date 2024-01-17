/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useAddCommentMutation } from "../../../services/rtcAdsApiWithAuth";
import S from "./reviews.module.scss";
export default function Reviews({ setIsCommentWindowOpen, comments, adsId }) {
  console.log(typeof comments);
  const [addComment] = useAddCommentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addComment({ adsId, data });
  };
  return (
    <div className={S.modal__block}>
      <div className={S.modal__content}>
        <h3 className={S.modal__title}>Отзывы о товаре</h3>
        <div
          className={S.modal__btn_close}
          onClick={() => setIsCommentWindowOpen(false)}
        >
          <div className={S.modal__btn_close_line}></div>
        </div>
        <div className={S.modal__scroll}>
{localStorage.getItem('auth_data')     &&     <form
            className={`${S.modal__form_newArt} ${S.form_newArt}`}
            id="formNewArt"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
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
                {...register("text", {
                  required: {
                    value: true,
                    message: "Заполните поле",
                  },
                })}
              ></textarea>
              {errors && errors.email && (
                <span className="text-[red]">{errors.email.message}</span>
              )}
            </div>
            <button
              className={`${S.form_newArt__btn_pub} ${S.btn_hov02}`}
              id="btnPublish"
            >
              Опубликовать
            </button>
          </form>}
          <div className={`${S.modal__reviews} ${S.reviews}`}>
            {comments.map((comment, index) => (
              <div key={index} className={`${S.reviews__review} ${S.reviews}`}>
                <div className={S.review__item}>
                  <div className={S.review__left}>
                    <div className={S.review__img}>
                      <img
                        src={
                          comment.author.avatar
                            ? "http://localhost:8090/" + comment.author.avatar
                            : ""
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={S.review__right}>
                    <p className={`${S.review__name} ${S.font_t}`}>
                      {comment.author.name} <span>14 августа</span>
                    </p>
                    <h5 className={`${S.review__title} ${S.font_t}`}>
                      Комментарий
                    </h5>
                    <p className={`${S.review__text} ${S.font_t}`}>
                      {comment.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
