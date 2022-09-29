import React from "react";
import { useLayoutStyles } from "../common/style";

interface LayoutPropsType {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = (props) => {
  const classes = useLayoutStyles();

  return (
    <>
      <div className={classes.header}>
        <h5 className={classes.headerText}>Yellow Pages</h5>
      </div>
      <div className={classes.wrapper}>{props.children}</div>
    </>
  );
};

export default Layout;
