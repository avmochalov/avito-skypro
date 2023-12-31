/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import S from "./carditem.module.scss";
// eslint-disable-next-line react/prop-types
export default function CardItem({ adsList }) {
  return (
    <>
      {adsList.map((ads) => (
        <div className={S.cards__item}>
          <div className={`${S.cards__card} ${S.card}`}>
            <div className={S.card__image}>
              <a href="#" target="_blank">
                <img
                  src={
                    ads.images.length > 0
                      ? "http://localhost:8090/" + ads.images[0].url
                      : ""
                  }
                  alt="picture"
                />
              </a>
            </div>
            <div className={S.card__content}>
              <a href="" target="_blank">
                <h3 className={S.card__title}>{ads.title}</h3>
              </a>
              <p className={S.card__price}>{ads.price} ₽</p>
              <p className={S.card__place}>{ads.user.city}</p>
              <p className={S.card__date}>Сегодня в&nbsp;10:45</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
