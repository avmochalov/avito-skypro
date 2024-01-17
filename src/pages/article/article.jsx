import { NavLink, useNavigate, useParams } from "react-router-dom";
import S from "./article.module.scss";
import { useGetAdsByIdQuery } from "../../services/rtcAdsApi";
import logo from "../../../public/img/logo.png";
import {
  closePhone,
  convertDate,
  convertPrice,
  salesStartDate,
  declensionCommentWord,
} from "../../services/helpers";
import ArticleImgBar from "../../components/articleImgBar/articleImgBar";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useGetUserQuery } from "../../services/rtcUserApi";
import {
  useDeleteAdsMutation,
  useGetAllAdsCommentsQuery,
} from "../../services/rtcAdsApiWithAuth";
import AddNewAt from "../../components/modal/addnewat/addnewat";
import { adminStore } from "../../services/zustand";
import Reviews from "../../components/modal/reviews/reviews";

export default function Article() {
  const navigate = useNavigate();
  const params = useParams();
  const [isPhoneNumberOpen, setIsPhoneNumberOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isCommentWindowOpen, setIsCommentWindowOpen] = useState(false);
  const { isModalWindowOpen } = adminStore();
  const [deleteAds] = useDeleteAdsMutation();
  const { data = [], isLoading } = useGetAdsByIdQuery(params.id);
  const { data: user, isLoading: isUserLoading } = useGetUserQuery();
  const { data: comments, isLoading: isCommentsLoading } =
    useGetAllAdsCommentsQuery(params.id);
  console.log(params.id);

  useEffect(() => {
    {
      !isUserLoading && setUserId(user.id);
    }
  }, [isUserLoading]);

  console.log(userId);
  console.log(data);
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <Header />
        {isModalWindowOpen && <AddNewAt />}

        {isCommentWindowOpen && (
          <Reviews
            setIsCommentWindowOpen={setIsCommentWindowOpen}
            comments={comments}
            adsId={params.id}
          />
        )}
        {!isLoading && (
          <main className={S.main}>
            <div className={S.main__container}>
              <div className={`${S.main__menu} ${S.menu}`}>
                <a className={S.menu__logo_link} href="" target="_blank">
                  <img className={S.menu__logo_img} src={logo} alt="logo" />
                </a>
                <form className={S.menu__form} action="#">
                  <NavLink to={"/"}>
                    <button
                      className={`${S.menu__btn_serch} ${S.btn_hov02}`}
                      id="btnGoBack"
                    >
                      Вернуться на главную
                    </button>
                  </NavLink>
                </form>
              </div>
            </div>

            <div className={`${S.main__artic} ${S.artic}`}>
              <div className={`${S.artic__content} ${S.article}`}>
                <div className={S.article__left}>
                  <div className={S.article__fill_img}>
                    <div className={S.article__img}>
                      <img
                        src={
                          data.images.length > 0
                            ? "http://localhost:8090/" + data.images[0].url
                            : ""
                        }
                        alt=""
                      />
                    </div>
                    <ArticleImgBar images={data.images} />
                    <div
                      className={`${S.article__img_bar_mob} ${S.img_bar_mob}`}
                    >
                      <div
                        className={`${S.img_bar_mob__circle} ${S.circle_active}`}
                      ></div>
                      <div className={S.img_bar_mob__circle}></div>
                      <div className={S.img_bar_mob__circle}></div>
                      <div className={S.img_bar_mob__circle}></div>
                      <div className={S.img_bar_mob__circle}></div>
                    </div>
                  </div>
                </div>
                <div className={S.article__right}>
                  <div className={S.article__block}>
                    <h3 className={`${S.article__title} ${S.title}`}>
                      {data.title}
                    </h3>
                    <div className={S.article__info}>
                      <p className={S.article__date}>
                        {convertDate(data.created_on)}
                      </p>
                      <p className={S.article__city}>{data.user.city}</p>
                      <p
                        className={S.article__link}
                        href=""
                        target="_blank"
                        rel=""
                        onClick={() => setIsCommentWindowOpen(true)}
                      >
                        {!isCommentsLoading &&
                          declensionCommentWord(comments.length)}
                      </p>
                    </div>
                    <p className={S.article__price}>
                      {convertPrice(data.price)}
                    </p>

                    {data.user.id === userId ? (
                      <div className={S.article__btn_block}>
                        <button
                          className={`${S.article__btn} ${S.btn_redact} ${S.btn_hov02}`}
                        >
                          Редактировать
                        </button>
                        <button
                          className={`${S.article__btn} ${S.btn_remove} ${S.btn_hov02}`}
                          onClick={() => {
                            deleteAds(data.id).then(() => navigate("/profile"));
                          }}
                        >
                          Снять с публикации
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`${S.article__btn} ${S.btn_hov02}`}
                        onClick={() => setIsPhoneNumberOpen(!isPhoneNumberOpen)}
                      >
                        Показать&nbsp;телефон
                        {isPhoneNumberOpen ? (
                          <span>{data.user.phone}</span>
                        ) : (
                          <span>{closePhone(data.user.phone)}</span>
                        )}
                      </button>
                    )}

                    <div className={`${S.article__author} ${S.author}`}>
                      <div className={S.author__img}>
                        <img src="" alt="" />
                      </div>
                      <div className={S.author__cont}>
                        <NavLink
                          to={
                            data.user.id === userId
                              ? "/profile"
                              : "/seller-profile/" + data.user.id
                          }
                        >
                          <p className={S.author__name}>{data.user.name}</p>
                        </NavLink>
                        <p className={S.author__about}>
                          {"Продает товары с " +
                            salesStartDate(data.user.sells_from)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={S.main__container}>
              <h3 className={`${S.main__title} ${S.title}`}>Описание товара</h3>
              <div className={S.main__content}>
                <p className={S.main__text}>{data.description}</p>
              </div>
            </div>
          </main>
        )}

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
