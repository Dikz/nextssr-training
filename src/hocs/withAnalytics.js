import React, { Component } from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import ReactGA from "react-ga";

export default () => Composed =>
  class extends Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("Page View: ", window.location.pathname);

      ReactGA.initialize("ID_ANALYTICS");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
