import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통메뉴</div>
      <Component />
    </>
  );
};

NodeBird.proptypes = {
  Component: PropTypes.element.isRequired,
};

export default wrapper.withRedux(withReduxSaga(NodeBird));
