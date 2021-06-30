import React from "react";
import "./AccountPage.css"
import AccountComponent from "../../components/Account";
import AccountData from "../../components/AccountData";
import OwnerFeed from "../../components/OwnerFeed";

export default function AccountPage() {
  return (
    <div className="account-page-container">
      <AccountComponent 
        title="Adegbemi Adeolu" 
        email="adegbemiadeolu@gmail.com" 
      />
      <div className="account-page-bottom">
        <div className="accout-page-data">
          <AccountData />
        </div>
        <div className="account-page-details">
          <OwnerFeed />
        </div>
      </div>
    </div>
  );
}
