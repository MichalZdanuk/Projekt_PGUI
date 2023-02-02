import { RequiredAuth } from "./auth";
import { Link } from "react-router-dom";
import WidgetThumbnail from "./WidgetThumbnail";

function DashBoard() {
  return (
    <RequiredAuth>
      <div style={{ width: "100%", paddingBottom: "30px", paddingTop: "30px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="Orders" location="/dashboard/orders"/>
        </div>
        <div style={{ marginLeft: "52%"}}>
          <WidgetThumbnail name="Quality of Sales" location="/dashboard/quality"/>
        </div>
      </div>
      <div style={{ width: "100%", paddingBottom: "30px", paddingTop: "30px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="Buyers Reviews" location="/dashboard/reviews"/>
        </div>
        <div style={{ marginLeft: "52%" }}>
          <WidgetThumbnail name="Ranking of Offers" location="/dashboard/ranking"/>
        </div>
      </div>
      <div style={{ width: "100%", paddingBottom: "30px", paddingTop: "30px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="Sales Chart" location="/dashboard/charts" />
        </div>
        <div style={{ marginLeft: "52%" }}>
          <WidgetThumbnail name="Sales Advice" location="/dashboard/advice"/>
        </div>
      </div>
      <br />
    </RequiredAuth>
  );
}

export default DashBoard;
