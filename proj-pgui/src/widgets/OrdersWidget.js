import { useState, useContext } from "react";
import { RequiredAuth } from "../auth";
import { receivedOrders } from "../mocks/mockedData";
import { TextAny } from "../language/langTexts";

import ThemeContext from "../theme/themeContext";

const receivedCustomerOrders = receivedOrders.listOfOrders;
function OrdersWidget() {
  let [orderType, setOrderType] = useState("NONE");
  let [orderTypeChosen, setOrderTypeChosen] = useState("NO");
  const { theme } = useContext(ThemeContext);

  const handleOrderTypeClick = (e) => {
    e.preventDefault();
    if (orderType === "NONE") {
      setOrderTypeChosen("YES");
      setOrderType(e.target.value);
    } else if (e.target.value === "NOTPAID") {
      if (orderType === "NOTPAID") {
        setOrderTypeChosen("NO");
        setOrderType("NONE");
      } else {
        setOrderType(e.target.value);
      }
    } else if (e.target.value === "NOTSENT") {
      if (orderType === "NOTSENT") {
        setOrderTypeChosen("NO");
        setOrderType("NONE");
      } else {
        setOrderType(e.target.value);
      }
    } else if (e.target.value === "REFUNDS") {
      if (orderType === "REFUNDS") {
        setOrderTypeChosen("NO");
        setOrderType("NONE");
      } else {
        setOrderType(e.target.value);
      }
    }
  };

  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="orders" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement">
          <OrderTypeButton
            type="NOTPAID"
            isChosen={orderType === "NOTPAID" ? "yes" : "no"}
            handleOrderTypeClick={handleOrderTypeClick}
          />
          <OrderTypeButton
            type="NOTSENT"
            isChosen={orderType === "NOTSENT" ? "yes" : "no"}
            handleOrderTypeClick={handleOrderTypeClick}
          />
          <OrderTypeButton
            type="REFUNDS"
            isChosen={orderType === "REFUNDS" ? "yes" : "no"}
            handleOrderTypeClick={handleOrderTypeClick}
          />
        </div>
        <br />
        <OrdersTable
          isChosen={orderTypeChosen}
          ordersList={receivedCustomerOrders}
        />
        <ListOfOrders type={orderType} ordersList={receivedCustomerOrders} />
        <br />
      </div>
    </RequiredAuth>
  );
}

function OrdersTable(props) {
  const { theme } = useContext(ThemeContext);

  return props.isChosen === "NO" ? (
    <table className="center" border="2px">
      <col width="250px" />
      <col width="250px" />
      <col width="250px" />
      <tr>
        <td className={theme + "OrderTableColumn"}>
          {
            props.ordersList.filter((order) => order.orderType === "NOTPAID")
              .length
          }
        </td>
        <td className={theme + "OrderTableColumn"}>
          {
            props.ordersList.filter((order) => order.orderType === "NOTSENT")
              .length
          }
        </td>
        <td className={theme + "OrderTableColumn"}>
          {
            props.ordersList.filter((order) => order.orderType === "REFUNDS")
              .length
          }
        </td>
      </tr>
    </table>
  ) : null;
}

function OrderTypeButton(props) {
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
        onClick={props.handleOrderTypeClick}
        value={props.type}
      >
        <TextAny text={props.type} />
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

function ListOfOrders(props) {
  if (props.ordersList.length < 1) {
    return (
      <h3>
        <TextAny text="noOrders" />
      </h3>
    );
  }
  let ordersListCpy = [];
  if (props.type === "NOTPAID") {
    ordersListCpy = props.ordersList.filter(
      (order) => order.orderType === "NOTPAID"
    );
  } else if (props.type === "NOTSENT") {
    ordersListCpy = props.ordersList.filter(
      (order) => order.orderType === "NOTSENT"
    );
  } else if (props.type === "REFUNDS") {
    ordersListCpy = props.ordersList.filter(
      (order) => order.orderType === "REFUNDS"
    );
  }

  const ordersList = ordersListCpy.map((order) => (
    <Order id={order.id} date={order.date} description={order.description} />
  ));
  return <div>{ordersList}</div>;
}

function Order(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"orderBox " + theme + "Order"}>
      <p className="orderID adjustedTextLargeWidgetThumbnail"><TextAny text="orderID"/> {props.id}</p>
      <p className="orderText adjustedTextWidgetThumbnail">
        <TextAny text="products"/> {props.description}
      </p>
      <p className="orderDate adjustedTextWidgetThumbnail">
        <i>{props.date}</i>
      </p>
      <br />
      <br />
    </div>
  );
}

export default OrdersWidget;
