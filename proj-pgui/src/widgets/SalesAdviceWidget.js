import { RequiredAuth } from "../auth";
import { TextAny } from "../language/langTexts";
import { useContext } from "react";
import { adviceList } from "../mocks/mockedData";

import ThemeContext from "../theme/themeContext";

const listOfAdive = adviceList;
function SalesAdviceWidget() {
  const { theme } = useContext(ThemeContext);

  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="salesAdvice" />
        </p>
        <hr className="widgetTitle" />
        <ListOfAdvice adviceList={listOfAdive} />
      </div>
    </RequiredAuth>
  );
}

function ListOfAdvice(props) {
  if (props.adviceList.length < 1) {
    return (
      <h3>
        <TextAny text="noOpinion" />
      </h3>
    );
  }
  let adviceListCpy = [...props.adviceList];

  const adviceList = adviceListCpy.map((advice) => (
    <Advice key={advice.id} text={advice.text} />
  ));

  return <div>{adviceList}</div>;
}

function Advice(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={"adviceBox " + theme + "Advice"}>
      <p className="adviceText adjustedTextLargeWidgetThumbnail">
        {props.text}
      </p>
      <br />
    </div>
  );
}

export default SalesAdviceWidget;
