import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./component/LoginFormPage";
import SignupFormPage from "./component/SignupFormPage";
import Feed from "./component/Feed/";
import Navigation from "./component/Navigation";
import * as sessionActions from "./store/session";
import SearchResults from "./component/SearchResults";
import Categories from "./component/Categories";
import CategoryResults from "./component/Categories/CategoryResults.js";
import { receiveCategory } from "./store/category";
import FundPage from "./component/FundPage/index";
import FundForm from "./component/FundForm/fundForm";
import Footer from "./component/Footer/index";

function App(props) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(dispatch(receiveCategory()).then(() => setIsLoaded(true)))
    .then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <Categories isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route path='/funds/:fundName'>
            <FundPage />
          </Route>
          <Route path='/categories/:categoryName'>
            <CategoryResults />
          </Route>
          <Route path='/search/:searchWord'>
            <SearchResults />
          </Route>
          <Route path='/fund-form'>
            <FundForm />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact={true}>
            <Feed />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
