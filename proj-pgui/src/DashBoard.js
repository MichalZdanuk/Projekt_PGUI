import { RequiredAuth } from "./auth";
import WidgetThumbnail from "./WidgetThumbnail";

function DashBoard() {
  return (
    <RequiredAuth>
      <div style={{ width: "100%", paddingBottom: "20px", paddingTop: "20px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="orders" location="/dashboard/orders"/>
        </div>
        <div style={{ marginLeft: "52%"}}>
        <WidgetThumbnail name="buyersReviews" location="/dashboard/reviews"/>
        </div>
      </div>
      <div style={{ width: "100%", paddingBottom: "20px", paddingTop: "20px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="qualityOfSales" location="/dashboard/quality"/>
        </div>
        <div style={{ marginLeft: "52%" }}>
        <WidgetThumbnail name="salesChart" location="/dashboard/charts" />
        </div>
      </div>
      <div style={{ width: "100%", paddingBottom: "20px", paddingTop: "20px" }}>
        <div style={{ width: "48%", float: "left" }}>
          <WidgetThumbnail name="rankingOfOffers" location="/dashboard/ranking"/>
        </div>
        <div style={{ marginLeft: "52%" }}>
          <WidgetThumbnail name="salesAdvice" location="/dashboard/advice"/>
        </div>
      </div>
      <br />
    </RequiredAuth>
  );
}

export default DashBoard;
