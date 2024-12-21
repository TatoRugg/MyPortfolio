import React from 'react';
import './MobileNav.css';

const MobileNav = ({ toggleSidebar, toggleThoughts, sidebarOpen, thoughtsOpen }) => {
  return (
    <div className="mobile-nav">
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <button className="toggle-thoughts" onClick={toggleThoughts}>
        {thoughtsOpen ? 'Close Thoughts' : 'Open Thoughts'}
      </button>
    </div>
  );
};

export default MobileNav;