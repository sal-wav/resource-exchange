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
import CategoryResults from "./component/Categories"

function App(props) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <Categories />
      {isLoaded && (
        <Switch>
          <Route path='/:category'>
            <CategoryResults />
          </Route>
          <Route path='/search/:searchWord'>
            <SearchResults />
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
    </>
  );
}

export default App;
