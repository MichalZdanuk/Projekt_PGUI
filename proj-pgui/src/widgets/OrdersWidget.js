import { useState } from "react";
import { RequiredAuth } from "../auth";
import { receivedOrders } from "../mocks/mockedData";
import { TextAny } from "../language/langTexts";

const receivedCustomerOrders = receivedOrders.listOfOrders;
function OrdersWidget() {
  let [orderType, setOrderType] = useState("NONE");
  let [orderTypeChosen, setOrderTypeChosen] = useState("NO");

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
      <div className="widgetCard widgetCardBackground">
        <p className="widgetTitle largeFontSize">
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
  return props.isChosen === "NO" ? (
    <table className="center" border="2px">
      <col width="250px" />
      <col width="250px" />
      <col width="250px" />
      <tr>
        <td className="orderTableColumn">
          {props.ordersList.filter((order) => order.orderType === "NOTPAID").length}
        </td>
        <td className="orderTableColumn">
          {props.ordersList.filter((order) => order.orderType === "NOTSENT").length}
        </td>
        <td className="orderTableColumn">
          {props.ordersList.filter((order) => order.orderType === "REFUNDS").length}
        </td>
      </tr>
    </table>
  ) : null;
}

function OrderTypeButton(props) {
  return (
    <>
      <button
        className={
          props.isChosen === "yes"
            ? "buttonClicked roundedButton largeFontSize"
            : "buttonNotClicked roundedButton largeFontSize"
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
    return <p>No orders yet</p>;
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
  return (
    <div className="commentBox">
      <p className="opinionUsername plainFontSize">ID: {props.id}</p>
      <p className="opinionText">{props.description}</p>
      <p className="commentDate">
        <i>{props.date}</i>
      </p>
      <br />
      <br />
    </div>
  );
}

export default OrdersWidget;
