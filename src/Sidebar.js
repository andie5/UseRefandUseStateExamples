import React from "react";

const Sidebar = ({ onHide, children }) => (
  <div className='sidebar'>
    {children} <button onClick={onHide}>Hide</button>
  </div>
);

export default Sidebar;
