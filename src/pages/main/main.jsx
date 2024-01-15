import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CardItem from "../../components/cardItem/cardItem";
import S from "./main.module.scss";
import { useGetAdsQuery } from "../../services/rtcAdsApi";
import Header from "../../components/header/Header";
export default function Main() {
  const { data = [], isLoading } = useGetAdsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult(
      data.filter((el) => {
        return el.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue, isLoading]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (resultData) => {
    setSearchValue(resultData.value);
  };
  console.log(searchResult);
  console.log(searchValue);
  // console.log(adsList);
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
<Header/>
        <main className={S.main}>
          <div className={`${S.main__search} ${S.search}`}>
            <a className={S.search__logo_link} href="#" target="_blank">
              <img
                className={S.search__logo_img}
                src="img/logo.png"
                alt="logo"
              />
            </a>
            <a className={S.search__logo_mob_link} href="#" target="_blank">
              <img
                className={S.search__logo_mob_img}
                src="img/logo-mob.png"
                alt="logo"
              />
            </a>
            <form
              className={S.search__form}
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className={S.search__text}
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
                {...register("value")}
              />
              <input
                className={S.search__text_mob}
                type="search"
                placeholder="Поиск"
                name="search-mob"
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
              />
              <button className={`${S.search__btn} ${S.btn_hov02}`}>
                Найти
              </button>
            </form>
          </div>
          <div className={S.main__container}>
            <h2 className={S.main__h2}>Объявления</h2>

            <div className={S.main__content}>
              <div className={`${S.content__cards} ${S.cards}`}>
                <CardItem adsList={searchResult} />
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
