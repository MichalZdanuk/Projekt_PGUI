import React, { useState } from "react";
import { customerReviews } from "../mocks/mockedData";
import { TextAny } from "../language/langTexts";
import { RequiredAuth } from "../auth";

const receivedCustomerReviews = customerReviews;
function BuyersReviewsWidget() {
  let [opinionType, setOpinionType] = useState("ALL");

  const handleOpinionClick = (e) => {
    e.preventDefault();
    setOpinionType(e.target.value);
  };

  return (
    <RequiredAuth>
      <div className="widgetCard widgetCardBackground">
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="buyersReviews" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement">
          <OpinionTypeButton
            type="ALL"
            isChosen={opinionType === "ALL" ? "yes" : "no"}
            handleOpinionClick={handleOpinionClick}
          />
          <OpinionTypeButton
            type="POSITIVE"
            isChosen={opinionType === "POSITIVE" ? "yes" : "no"}
            handleOpinionClick={handleOpinionClick}
          />
          <OpinionTypeButton
            type="NEGATIVE"
            isChosen={opinionType === "NEGATIVE" ? "yes" : "no"}
            handleOpinionClick={handleOpinionClick}
          />
        </div>
        <ListOfOpinions
          type={opinionType}
          opinionsList={receivedCustomerReviews}
        />
        <br />
      </div>
    </RequiredAuth>
  );
}

function OpinionTypeButton(props) {
  return (
    <>
      <button
        className={
          props.isChosen === "yes"
            ? "buttonClicked roundedButton adjustedTextLargeWidgetThumbnailTitle"
            : "buttonNotClicked roundedButton adjustedTextLargeWidgetThumbnailTitle"
        }
        onClick={props.handleOpinionClick}
        value={props.type}
      >
        <TextAny text={props.type} />
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

function ListOfOpinions(props) {
  if (props.opinionsList.length < 1) {
    return <p>No opinions yet!!!</p>;
  }
  let opinionsListCpy = null;
  if (props.type === "ALL") {
    opinionsListCpy = props.opinionsList.filter((opinion) => true);
  } else if (props.type === "POSITIVE") {
    opinionsListCpy = props.opinionsList.filter(
      (opinion) => opinion.type === "positive"
    );
    opinionsListCpy = opinionsListCpy.slice(0, 5);
  } else if (props.type === "NEGATIVE") {
    opinionsListCpy = props.opinionsList.filter(
      (opinion) => opinion.type === "negative"
    );
    opinionsListCpy = opinionsListCpy.slice(0, 5);
  }

  if (opinionsListCpy.length === 0) {
    return <p>Not collected opinions yet</p>;
  }

  const opinionsList = opinionsListCpy.map((opinion) => (
    <Opinion
      key={opinion.id}
      username={opinion.customerName}
      text={opinion.text}
      opinionType={opinion.type}
      date={opinion.date}
    />
  ));

  return <div>{opinionsList}</div>;
}

function Opinion(props) {
  return (
    <div className="opinionBox">
      <p className="opinionUsername">
        <emph className="adjustedTextLargeWidgetThumbnail">{props.username}</emph>
        <emph style={{ float: "right", marginRight: "5%" }}>
          {props.opinionType === "positive" ? (
            <span className="positive adjustedTextLargeWidgetThumbnail">
              <TextAny text="positiveOpinion" />
            </span>
          ) : (
            <span className="negative adjustedTextLargeWidgetThumbnail">
              <TextAny text="negativeOpinion" />
            </span>
          )}
        </emph>
      </p>
      <p className="opinionText adjustedTextWidgetThumbnail">{props.text}</p>
      <p className="opinionDate adjustedTextWidgetThumbnail">
        <i>{props.date}</i>
      </p>
      <br />
      <br />
    </div>
  );
}

export default BuyersReviewsWidget;
