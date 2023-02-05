import { RequiredAuth } from "../auth";
import { TextAny } from "../language/langTexts";
import { useContext } from "react";

import ThemeContext from "../theme/themeContext";

function SalesAdviceWidget() {
  const { theme } = useContext(ThemeContext);

  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="salesAdvice" />
        </p>
        <hr className="widgetTitle" />
      </div>
    </RequiredAuth>
  );
}

export default SalesAdviceWidget;
