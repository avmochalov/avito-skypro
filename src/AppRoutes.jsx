import { Route, Routes } from "react-router-dom";
import SellerProfile from "./pages/seller-profile/seller-profile";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Article from "./pages/article/article";
import Main from "./pages/main/main";
import Profile from "./pages/profile/profile";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/seller-profile/:id" element={<SellerProfile />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
