import { Route, Routes } from "react-router-dom";
import SellerProfile from "./pages/seller-profile/seller-profile";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Article from "./pages/article/article";
import Main from "./pages/main/main";
import MyArticle from "./pages/my-article/my-article";
import Profile from "./pages/profile/profile";

function AppRoutes() {
    return (
      <Routes>
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/" element={<Main />} />
        <Route path="/my-article" element={<MyArticle />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="/workout" element={<Workout />} />
          <Route path="/profile" element={<Profile />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  }
  
  export default AppRoutes;