import { Fragment } from "react";
import TopBarNavigation from "./TopBarNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <TopBarNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
