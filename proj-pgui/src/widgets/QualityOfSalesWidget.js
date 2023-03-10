import { receivedQualityOfSales } from "../mocks/mockedData";
import { TextAny } from "../language/langTexts";
import { RequiredAuth } from "../auth";
import { useContext } from "react";

import ThemeContext from "../theme/themeContext";

const qualityOfSales = receivedQualityOfSales;
function QualityOfSalesWidget() {
  let receivedPoints = 0;
  const { theme } = useContext(ThemeContext);

  const calculatePoints = () => {
    const listLength = qualityOfSales.listOfGrades.length;
    if (listLength === 5) {
      const sum = qualityOfSales.listOfGrades.reduce(
        (acc, curr) => acc + curr.receivedPoints,
        0
      );
      return sum;
    }
    return 0;
  };

  receivedPoints = calculatePoints();

  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="qualityOfSales" />
        </p>
        <hr className="widgetTitle" />
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
          <QualityAspectsTable listOfGrades={qualityOfSales.listOfGrades} />
          <Quality points={receivedPoints} />
          <SellerCategory grade={40} />
          <br />
          <WorstAspects />
        </div>
      </div>
    </RequiredAuth>
  );
}

function QualityAspectsTable(props) {
  const { theme } = useContext(ThemeContext);

  const listOfAspectsNames = props.listOfGrades.map((aspect) => (
    <th>{aspect.aspectName}</th>
  ));
  const listOfPointedGrades = props.listOfGrades.map((aspect) => (
    <th>{aspect.receivedPoints}/10</th>
  ));
  return (
    <table className={"center " + theme + "Table"} border="2px">
      <col width="170px" />
      <col width="170px" />
      <col width="170px" />
      <col width="170px" />
      <col width="170px" />
      <tr>{listOfAspectsNames}</tr>
      <tr>{listOfPointedGrades}</tr>
    </table>
  );
}

function Quality(props) {
  const maxPoints = qualityOfSales.listOfGrades.length;
  if (props.points === 0) {
    return (
      <h3>
        <TextAny text="noQualityData" />
      </h3>
    );
  }
  return (
    <h2>
      <TextAny text="qualityRate" />
      {props.points} / {maxPoints * 10}
    </h2>
  );
}

function WorstAspects() {
  const sortedListOfAspects = [...qualityOfSales.listOfGrades];
  sortedListOfAspects.sort(function (a, b) {
    return a.receivedPoints - b.receivedPoints;
  });

  const listOfWorst = sortedListOfAspects.slice(0, 3);
  if (listOfWorst.length < 3) {
    return (
      <h3>
        <TextAny text="noQualityData" />
      </h3>
    );
  }
  const list = listOfWorst.map((aspect) => aspect.aspectName);

  return (
    <div>
      <h4 className="worstAspects">
        <TextAny text="worstAspects" />
      </h4>
      <div className="worstAspects">
        <div style={{ marginLeft: "4%" }}>
          {list[0]} <br /> {list[1]} <br /> {list[2]}
        </div>
      </div>
      <br />
    </div>
  );
}

function SellerCategory(props) {
  let category = "";
  const calculateCategory = (grade) => {
    if (grade < 10) {
      return "insufficient";
    } else if (grade >= 10 && grade < 20) {
      return "sufficient";
    } else if (grade >= 20 && grade < 30) {
      return "average";
    } else if (grade >= 30 && grade < 40) {
      return "good";
    } else {
      return "excellent";
    }
  };
  category = calculateCategory(props.grade);

  return (
    <h2>
      <TextAny text="receivedCategory" />
      {category}
    </h2>
  );
}

export default QualityOfSalesWidget;
