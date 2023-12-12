import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import Article from "./pages/article/article";
import Main from "./pages/main/main";

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="/workout" element={<Workout />} />
          <Route path="/profile" element={<Profile />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  }
  
  export default AppRoutes;