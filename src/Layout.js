import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

class Layout extends React.Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };

  render = () => {
    const { showSidebar } = this.state;
    return (
      <div className='layout'>
        {showSidebar && (
          <Sidebar onHide={this.toggleSidebar} some sidebar content />
        )}
        <Content
          isSidebarVisible={showSidebar}
          onShowSidebar={this.toggleSidebar}
        >
          some content here
        </Content>
      </div>
    );
  };
}

export default Layout;
