import React from "react";
import { AppContent, AppHeader, AppSidebar } from "../components/shared";

const DashBoardLayout = () => (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 p-3">
          <AppContent />
        </div>
      </div>
    </div>
);

export default DashBoardLayout;
