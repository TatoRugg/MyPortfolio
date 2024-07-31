import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSidebarInfo } from '../actions/SidebarActions';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);
  const error = useSelector((state) => state.sidebar.error);

  useEffect(() => {
    dispatch(fetchSidebarInfo());
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
      <div className='sidediv'>
      <h2>General Info</h2>
      {sidebarInfo.photo && <img src={sidebarInfo.photo} alt="Profile" className="profile-photo" />}
      <h3>{sidebarInfo.fullName}</h3>
      <h4>{sidebarInfo.currentPosition}</h4>
      <p>{sidebarInfo.description}</p>
      </div>
    </aside>
  );
};

export default Sidebar;

