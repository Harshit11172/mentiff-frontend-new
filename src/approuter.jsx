import React, { createContext, useState } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from 'config';
import MenteeProfile from "./client/components/mentor/mentee-profile/index.jsx";

export const Appcontext = createContext();

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState("user");
  // const config = "/";
  return (
    <Router basename={`${config.publicPath}`}>

    <Appcontext.Provider value={{ isAuth, setIsAuth }}>
        <Route render={(props) => <AppContainer {...props} />} />
        <Route path="/mentor/mentee-profile" element={<MenteeProfile />} />
      </Appcontext.Provider>
    </Router>
  );
};

export default AppRouter;
