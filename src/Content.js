import React from "react";

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
  <div className="content">
    {children}{" "}
    {!isSidebarVisible && <button onClick={onShowSidebar}>Show</button>}
  </div>
);

export default Content;
