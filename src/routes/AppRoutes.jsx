import { Route, Routes } from "react-router-dom";
import SignInPage from "../containers/sign-in/SingInPage";
import SignUpPage from "../containers/sign-up/SignUpPage";
import TrelloApp from "../components/trelloApp/TrelloApp";
import UserFrofile from "../components/trelloApp/UserFrofile";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/trello" element={<TrelloApp />} />
    <Route path="/userProfile" element={<UserFrofile />} />
  </Routes>
);

export default AppRoutes;
