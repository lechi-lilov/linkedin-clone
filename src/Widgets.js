import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This is a linkedin Clone", "I am Lechi Dzhalilov")}
      {newsArticle("I did also amazone clone", "I am Lechi Dzhalilov")}
      {newsArticle("I am 3rd grade student", "I am Lechi Dzhalilov")}
      {newsArticle("Nice to meet you)))", "I am Lechi Dzhalilov")}
    </div>
  );
}

export default Widgets;
