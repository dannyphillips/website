import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { SEO, Footer, Navigation, AppProvider } from "../components";
import useBuildTime from "../hooks/useBuildTime";

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <AppProvider>
      <Fragment>
        {!customSEO && <SEO buildTime={buildTime} />}
        <Navigation id="header"/>
        {children}
        <Footer buildTime={buildTime}/>
      </Fragment>
    </AppProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool
};

Layout.defaultProps = {
  customSEO: false
};
