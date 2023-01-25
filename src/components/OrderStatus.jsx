import React, { useContext } from "react";
import { ProductContext } from "../Context";
import Header from "./Header/Header";

function OrderStatus() {
  const { orderList, setOrderList, deleteItem } = useContext(ProductContext);

  var i = 1;
  return (
    <>
      <Header />

      <h3 class="text-center bg-dark text-white p-2">Order Status</h3>
      <div class=" card w-75 m-auto text-center p-3">
        <table>
          <thead>
            <th>S.no</th>
            <th>Check Box</th>
            <th>Order No</th>
            <th>Status</th>
            <th>Title</th>
            <th>From</th>
            <th>Qty</th>
            <th>Action</th>
          </thead>
          <tbody>
            {orderList.map((item) => {
              return (
                <tr>
                  <td>{i++}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.id}</td>
                  <td>Processing</td>
                  <td>{item.title}</td>
                  <td>Dwarka</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-edit bg-danger text-white"
                      onClick={() => deleteItem(item.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderStatus;
