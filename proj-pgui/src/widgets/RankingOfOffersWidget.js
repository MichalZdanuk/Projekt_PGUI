import { RequiredAuth } from "../auth";
import { TextAny } from "../language/langTexts";
import hat from "../icons/hat.png";
import headphone from "../icons/headphone.png";
import keyboard from "../icons/keyboard.png";
import eyeglasses from "../icons/eyeglasses.png";
import mouse from "../icons/mouse.png";
import tshirt from "../icons/t-shirt.png";
import { sellerOffers } from "../mocks/mockedData";
import { useState, useContext } from "react";

import ThemeContext from "../theme/themeContext";

const receivedSellerOffers = sellerOffers;
function RankingOfOffersWidget() {
  let [sortedType, setSortedType] = useState("MOSTTURNOVER");
  const { theme } = useContext(ThemeContext);

  const handleTypeClick = (e) => {
    setSortedType(e.target.value);
  };

  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="rankingOfOffers" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement">
          <RankingTypeButton
            type="MOSTTURNOVER"
            isChosen={sortedType === "MOSTTURNOVER" ? "yes" : "no"}
            handleTypeClick={handleTypeClick}
          />
          <RankingTypeButton
            type="MOSTAMOUNT"
            isChosen={sortedType === "MOSTAMOUNT" ? "yes" : "no"}
            handleTypeClick={handleTypeClick}
          />
          <RankingTypeButton
            type="LEASTVIEWS"
            isChosen={sortedType === "LEASTVIEWS" ? "yes" : "no"}
            handleTypeClick={handleTypeClick}
          />
          <RankingTypeButton
            type="LEASTAMOUNT"
            isChosen={sortedType === "LEASTAMOUNT" ? "yes" : "no"}
            handleTypeClick={handleTypeClick}
          />
        </div>
        <br />
        <div className="centeredElement leftAndRightMargins">
          <TableOfOffers
            offersList={receivedSellerOffers}
            chosenType={sortedType}
          />
        </div>
        <br />
      </div>
    </RequiredAuth>
  );
}

function RankingTypeButton(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button
        className={
          props.isChosen === "yes"
            ? "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonClicked " +
              theme +
              "ButtonClicked"
            : "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonNotClicked " +
              theme +
              "ButtonNotClicked"
        }
        onClick={props.handleTypeClick}
        value={props.type}
      >
        <TextAny text={props.type} />
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

function TableOfOffers(props) {
  const { theme } = useContext(ThemeContext);

  if (props.offersList.length < 1) {
    return <p>No offers from seller yet</p>;
  }

  let processedData = [...props.offersList];
  if (props.chosenType === "MOSTTURNOVER") {
    processedData = processedData.sort((a, b) => b.turnover - a.turnover);
  } else if (props.chosenType === "MOSTAMOUNT") {
    processedData = processedData.sort(
      (a, b) => b.numberOfItems - a.numberOfItems
    );
  } else if (props.chosenType === "LEASTVIEWS") {
    processedData = processedData.sort(
      (a, b) => a.numberOfViews - b.numberOfViews
    );
  } else if (props.chosenType === "LEASTAMOUNT") {
    processedData = processedData.sort(
      (a, b) => a.numberOfItems - b.numberOfItems
    );
  }
  processedData = processedData.slice(0, 5);
  const listOfOffers = processedData.map((offer) => (
    <Offer
      name={offer.productName}
      key={offer.id}
      firstVal={
        props.chosenType === "MOSTTURNOVER" || props.chosenType === "MOSTAMOUNT"
          ? offer.turnover
          : offer.numberOfViews
      }
      secondVal={offer.numberOfItems}
    />
  ));

  return (
    <table className={"center " + theme + "Opinion"} border="2px">
      <col width="250px" />
      <col width="250px" />
      <col width="250px" />
      <col width="250px" />
      <tr className="adjustedTextLargeWidgetThumbnail">
        <th>
          <TextAny text="image" />
        </th>
        <th>
          <TextAny text="name" />
        </th>
        <th>
          <TextAny
            text={
              props.chosenType === "MOSTTURNOVER" ||
              props.chosenType === "MOSTAMOUNT"
                ? "turnover"
                : "LEASTVIEWS"
            }
          />
        </th>
        <th>
          <TextAny text="LEASTAMOUNT" />
        </th>
      </tr>
      {listOfOffers}
    </table>
  );
}

function Offer(props) {
  const choosePicture = (name) => {
    if (name === "hat") {
      return hat;
    } else if (name === "eyeglasses") {
      return eyeglasses;
    } else if (name === "headphone") {
      return headphone;
    } else if (name === "t-shirt") {
      return tshirt;
    } else if (name === "keyboard") {
      return keyboard;
    } else if (name === "mouse") {
      return mouse;
    }
  };
  return (
    <>
      <tr className="adjustedTextWidgetThumbnail">
        <td>
          <img src={choosePicture(props.name)} alt="pic" height="50" />
        </td>
        <td>{props.name}</td>
        <td>{props.firstVal}</td>
        <td>{props.secondVal}</td>
      </tr>
    </>
  );
}

export default RankingOfOffersWidget;
