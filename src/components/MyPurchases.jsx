import React from "react";
import {Divider} from "@material-ui/core";

export default function MyPurchases() {
  
  return (
    <>
      <article className="purchases-article">
        <h2>Purchases</h2>
        <h3>Transactions</h3>
        <Divider />
        <div className="purchases-table">
          <h6>Purchases</h6>
          <h6>Price</h6>
          <h6>Purchase Date</h6>
          <h6>Refund Deadline</h6>
        </div>

        <span>View full <a href="#">Refund Policy</a></span>
        <span>Questions? Check out the <a href="#">Learner Help Center</a></span>
      </article>

    </>
  );
}
