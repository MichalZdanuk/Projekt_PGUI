import { RequiredAuth } from "../auth";
import { TextAny } from "../language/langTexts";

function RankingOfOffersWidget() {
  return (
    <RequiredAuth>
      <div className="widgetCard widgetCardBackground">
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="rankingOfOffers" />
        </p>
        <hr className="widgetTitle" />
        <p>ddd</p>
      </div>
    </RequiredAuth>
  );
}

export default RankingOfOffersWidget;
