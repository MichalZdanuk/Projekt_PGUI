import { RequiredAuth } from "../auth";
import { TextAny } from "../language/langTexts";

function SalesAdviceWidget() {
  return (
    <RequiredAuth>
      <div className="widgetCard widgetCardBackground">
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="salesAdvice" />
        </p>
        <hr className="widgetTitle" />
        <p>ddd</p>
      </div>
    </RequiredAuth>
  );
}

export default SalesAdviceWidget;
