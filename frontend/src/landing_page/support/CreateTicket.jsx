import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4 fw-bold text-center">
          Need Help? Create a Ticket by Choosing a Category
        </h1>

        {/* Account Opening */}
        <div className="col-4 p-4 ">
          <h4 className="mb-3">
            <i className="fa fa-user-plus text-primary me-2"></i>
            Account Opening
          </h4>
          <div className="d-flex flex-column gap-2">
            <a style={{textDecoration:"none"}} href="#">Start Online Application</a>
            <a style={{textDecoration:"none"}} href="#">Offline Form Submission</a>
            <a style={{textDecoration:"none"}} href="#">Corporate Account Setup</a>
            <a style={{textDecoration:"none"}} href="#">NRI & International Accounts</a>
            <a style={{textDecoration:"none"}} href="#">Account Opening Fees</a>
            <a style={{textDecoration:"none"}} href="#">StockFlow × IDFC FIRST 3-in-1 Account</a>
          </div>
        </div>

        {/* Trading & Investments */}
        <div className="col-4 p-4 ">
          <h4 className="mb-3">
            <i className="fa fa-line-chart text-success me-2"></i>
            Trading & Investments
          </h4>
          <div className="d-flex flex-column gap-2">
            <a style={{textDecoration:"none"}} href="#">How to Place Orders</a>
            <a style={{textDecoration:"none"}} href="#">Understanding Brokerage</a>
            <a style={{textDecoration:"none"}} href="#">Derivatives & Futures Guide</a>
            <a style={{textDecoration:"none"}} href="#">Mutual Funds on StockFlow</a>
            <a style={{textDecoration:"none"}} href="#">Margin & Leverage Rules</a>
            <a style={{textDecoration:"none"}} href="#">IPO & Bonds</a>
          </div>
        </div>

        {/* Your StockFlow Account */}
        <div className="col-4 p-4 ">
          <h4 className="mb-3">
            <i className="fa fa-cogs text-warning me-2"></i>
            Your StockFlow Account
          </h4>
          <div className="d-flex flex-column gap-2">
            <a style={{textDecoration:"none"}} href="#">Login Issues</a>
            <a style={{textDecoration:"none"}} href="#">Password Reset</a>
            <a style={{textDecoration:"none"}} href="#">Update Mobile/Email</a>
            <a style={{textDecoration:"none"}} href="#">Deactivate Account</a>
            <a style={{textDecoration:"none"}} href="#">Change Linked Bank</a>
            <a style={{textDecoration:"none"}} href="#">Security & Privacy Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
