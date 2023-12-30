import S from "./carditem.module.scss";
export default function CardItem() {
  return (
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
  );
}
