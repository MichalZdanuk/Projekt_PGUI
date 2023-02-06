import { RequiredAuth } from "./auth";
import WidgetThumbnail from "./WidgetThumbnail";

import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import "./styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "orders", x: 0, y: 0, w: 1, h: 1 },
  { i: "qualityOfSales", x: 1, y: 0, w: 1, h: 1 },
  { i: "buyersReviews", x: 2, y: 0, w: 1, h: 1 },
  { i: "salesChart", x: 0, y: 1, w: 1, h: 1 },
  { i: "rankingOfOffers", x: 1, y: 1, w: 1, h: 1 },
  { i: "salesAdvice", x: 2, y: 1, w: 1, h: 1 },
];

const GridItemWrapper = styled.div``;

const GridItemContent = styled.div``;

const Root = styled.div`
  padding: 1%;
`;

const Grid = () => {
  return (
    <Root>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
      >
        <GridItemWrapper key="orders">
          <GridItemContent>
            <WidgetThumbnail name="orders" location="/dashboard/orders" />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="qualityOfSales">
          <GridItemContent>
            <WidgetThumbnail
              name="qualityOfSales"
              location="/dashboard/quality"
            />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="buyersReviews">
          <GridItemContent>
            <WidgetThumbnail
              name="buyersReviews"
              location="/dashboard/reviews"
            />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="salesChart">
          <GridItemContent>
            <WidgetThumbnail name="salesChart" location="/dashboard/charts" />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="rankingOfOffers">
          <GridItemContent>
            <WidgetThumbnail
              name="rankingOfOffers"
              location="/dashboard/ranking"
            />
          </GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="salesAdvice">
          <GridItemContent>
            <WidgetThumbnail name="salesAdvice" location="/dashboard/advice" />
          </GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};

function DashBoard() {
  return (
    <RequiredAuth>
      <Grid />
    </RequiredAuth>
  );
}

export default DashBoard;
