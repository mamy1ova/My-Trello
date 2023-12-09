import { Route, Routes } from "react-router-dom";
import TrelloApp from "./components/trelloApp/TrelloApp";
import LoginForm from "./components/loginform/LoginForm";
import RegistrationForm from "./components/registrForm/RegistrationForm";
import UserFrofile from "./components/userProvile/UserFrofile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/trello" element={<TrelloApp />} />
        <Route path="/userProfile" element={<UserFrofile />} />
      </Routes>
    </>
  );
};

export default App;
