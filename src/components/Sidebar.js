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
    <aside className="sidebar">
      <div className="sidediv-1">
          <h2>General Info</h2>
    <div className="profile-header">
      {sidebarInfo.photo && <img src={sidebarInfo.photo} alt="Profile" className="profile-photo" />}
      <div className="name-position">
        <h3 className="infoname">{sidebarInfo.fullName}</h3>
        <h4>{sidebarInfo.currentPosition}</h4>
      </div>
    </div>
    <p className="description">{sidebarInfo.description}</p>
        <div className="contacts">
          <a href="https://www.linkedin.com/in/antonio-ruggiero9/" target="_blank" rel="noopener noreferrer">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" className="contact-icon" />
          </a>
          <a href="mailto:antonioxruggiero@gmail.com">
            <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="Email" className="contact-icon" />
          </a>
        </div>
      </div>
      <div className="sidediv-2">
        <h2>Tools & libraries</h2>
        <div className="tools-wrapper">
          {tools && tools.map((tool) => (
            <div key={tool.id} className="tool-entry">
              <img src={tool.logoUrl} alt={tool.name} className="tool-photo" />
              <hr />
              <h3 className="tool-name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
