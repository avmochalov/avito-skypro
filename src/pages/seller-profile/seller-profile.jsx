import S from "./sellerProfile.module.scss";
import logo from "../../../public/img/logo.png";
import {
  useGetAllAdsByUserQuery,
  useGetAllUsersQuery,
} from "../../services/rtcAdsApi";
import {
  closePhone,
  findCurrentUser,
  salesStartDate,
} from "../../services/helpers";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardItem from "../../components/cardItem/cardItem";
import Header from "../../components/header/Header";
import AddNewAt from "../../components/modal/addnewat/addnewat";
import { adminStore } from "../../services/zustand";
// import { getUserData } from "../../api/userApi";
// import { refreshUserData } from "../../services/helpers";
export default function SellerProfile() {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [isPhoneNumberOpen, setIsPhoneNumberOpen] = useState(false);
  const { isModalWindowOpen } = adminStore();
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery();
  const { data: userAds, isLoading: isUserAdsLoading } =
    useGetAllAdsByUserQuery(params.id);
  {
    !isUserAdsLoading && console.log(userAds);
  }
  useEffect(() => {
    {
      !isUsersLoading && setUserData(findCurrentUser(users, params.id));
    }
  }, [isUsersLoading]);
  console.log(userData);

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
<Header/>
        {isModalWindowOpen && <AddNewAt />}
        <main className={S.main}>
          <div className={S.main__container}>
            <div className={S.main__center_block}>
              <div className={`${S.main__menu} ${S.menu}`}>
                <a className={S.menu__logo_link} href="" target="_blank">
                  <img className={S.menu__logo_img} src={logo} alt="logo" />
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

              <h2 className={S.main__h2}>Профиль продавца</h2>

              {!isUsersLoading && (
                <div className={`${S.main__profile_sell} ${S.profile_sell}`}>
                  <div className={S.profile_sell__content}>
                    <div className={`${S.profile_sell__seller} ${S.seller}`}>
                      <div className={S.seller__left}>
                        <div className={S.seller__img}>
                          <a href="" target="_self">
                            <img
                              src={"http://localhost:8090/" + userData.avatar}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className={S.seller__right}>
                        <h3 className={S.seller__title}>
                          {userData.name + " " + userData.surname}
                        </h3>
                        <p className={S.seller__city}>{userData.city}</p>
                        <p className={S.seller__inf}>
                          {"Продает товары с " +
                            salesStartDate(userData.sells_from)}
                        </p>

                        <div className={S.seller__img_mob_block}>
                          <div className={S.seller__img_mob}>
                            <a href="" target="_self">
                              <img src="#" alt="" />
                            </a>
                          </div>
                        </div>

                        <button
                          className={`${S.seller__btn} ${S.btn_hov02}`}
                          onClick={() =>
                            setIsPhoneNumberOpen(!isPhoneNumberOpen)
                          }
                        >
                          Показать&nbsp;телефон
                          {isPhoneNumberOpen ? (
                            <span>{userData.phone}</span>
                          ) : (
                            <span>{closePhone(userData.phone)}</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <h3 className={`${S.main__title} ${S.title}`}>Товары продавца</h3>
            </div>
            <div className={S.main__content}>
              <div className={`${S.content__cards} ${S.cards}`}>
                {!isUserAdsLoading && <CardItem adsList={userAds} />}
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
