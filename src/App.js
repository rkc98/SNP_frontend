import { Fragment, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AdminCreation from "./pages/AdminCreation";
import Login from "./pages/Login";
import UserCategoryCreation from "./pages/UserCategoryCreation";
import UserCreation from "./pages/UserCreation";
import VerifyOtp from "./pages/VerifyOtp";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      {!ctx.isLoggedIn && (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/otp" exact component={VerifyOtp} />
        </Switch>
      )}
      {/* {ctx.isLoggedIn && ( */}
      <Layout>
        <Route path="/admin" component={AdminCreation} />
        <Route path="/userCreate" component={UserCreation} />
        <Route path="/userCategoryCreate" component={UserCategoryCreation} />
      </Layout>
      {/* )} */}
    </Fragment>
  );
}

export default App;
