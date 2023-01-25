import React from "react";
import Header from "./Header/Header";

function OrderStatus() {
  return (
    <>
      <Header />

      <h3 class="text-center bg-dark text-white p-2">Order Status</h3>
      <div class=" card w-75 m-auto text-center">
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
          <tbody id="orderItems"></tbody>
        </table>
      </div>
    </>
  );
}

export default OrderStatus;
