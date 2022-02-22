import React from "react";
import './style.css'
import Loader from "react-loader-spinner";
import TitleBar from '../TitleBar'

const Loading = ({ ...rest }) => (
  <div {...rest}>
    <TitleBar />
    <div className="screen-loading-wrap">
      <Loader
        type="Oval"
        color="#008574"
        height={100}
        width={100}
      />
    </div>
  </div>
);

export default Loading;
