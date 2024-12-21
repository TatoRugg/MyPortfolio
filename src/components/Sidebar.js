// src/Sidebar.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSidebarInfo, fetchTools } from '../actions/SidebarActions';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);
  const tools = useSelector((state) => state.sidebar.tools);
  const error = useSelector((state) => state.sidebar.error);

  useEffect(() => {
    dispatch(fetchSidebarInfo());
    dispatch(fetchTools());
  }, [dispatch]);

  if (error) {
    return (
      <div className="sidebar">
        <h2>Error loading sidebar info</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!sidebarInfo) {
    return (
      <div className="sidebar">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <div className="sidediv-1">
        <h2>General Info</h2>
        <div className="profile-header">
          {sidebarInfo.photo ? (
            <img src={sidebarInfo.photo} alt="Profile" className="profile-photo" />
          ) : (
            <img src="/path/to/default-profile.jpg" alt="Default Profile" className="profile-photo" />
          )}
          <div className="name-position">
            <h3 className="infoname">{sidebarInfo.fullName || 'Name not available'}</h3>
            <h4>{sidebarInfo.currentPosition || 'Position not available'}</h4>
          </div>
        </div>
        <p className="description">{sidebarInfo.description || 'No description available'}</p>
        <div className="contacts">
          <a href="https://www.linkedin.com/in/antonio-ruggiero9/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="contact-icon" />
          </a>
          <a href="mailto:antonioxruggiero@gmail.com">
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png" alt="Email" className="contact-icon" />
          </a>
        </div>
      </div>
      <div className="sidediv-2">
        <h2>Tools & Libraries</h2>
        <div className="tools-wrapper">
          {tools?.length > 0 ? (
            tools.map((tool) => (
              <div key={tool.id} className="tool-entry">
                {tool.logoUrl ? (
                  <img src={tool.logoUrl} alt={`${tool.name} logo`} className="tool-photo" />
                ) : (
                  <img src="/path/to/default-tool-logo.jpg" alt="Default Tool Logo" className="tool-photo" />
                )}
                <h3 className="tool-name">{tool.name}</h3>
              </div>
            ))
          ) : (
            <p>No tools available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
