import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, fetchProjects } from '../actions/projectActions';
import { addExperience, fetchExperiences } from '../actions/experienceActions';
import { addThought, fetchThoughts } from '../actions/thoughtActions';
import { fetchSidebarInfo, updateSidebarInfo } from '../actions/SidebarActions';
import './AdminPage.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);
  
  const [project, setProject] = useState({ title: '', description: '', photos: [], link: '' });
  const [experience, setExperience] = useState({ description: '', photo: '', link: '' });
  const [thought, setThought] = useState({ text: '' });
  const [sidebar, setSidebar] = useState({ fullName: '', currentPosition: '', description: '', photo: '' });

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchExperiences());
    dispatch(fetchThoughts());
    dispatch(fetchSidebarInfo());
  }, [dispatch]);

  useEffect(() => {
    if (sidebarInfo) {
      setSidebar(sidebarInfo);
    }
  }, [sidebarInfo]);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(project)).then(() => dispatch(fetchProjects()));
    setProject({ title: '', description: '', photos: [], link: '' });
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(experience)).then(() => dispatch(fetchExperiences()));
    setExperience({ description: '', photo: '', link: '' });
  };

  const handleThoughtSubmit = (e) => {
    e.preventDefault();
    dispatch(addThought(thought)).then(() => dispatch(fetchThoughts()));
    setThought({ text: '' });
  };

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSidebarInfo(sidebar));
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      <form onSubmit={handleProjectSubmit}>
        <h2>Add Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Project Link"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
        />
        <input
          type="file"
          multiple
          onChange={(e) => setProject({ ...project, photos: Array.from(e.target.files).map(file => URL.createObjectURL(file)) })}
        />
        <button type="submit">Add Project</button>
      </form>

      <form onSubmit={handleExperienceSubmit}>
        <h2>Add Experience</h2>
        <textarea
          placeholder="Experience Description"
          value={experience.description}
          onChange={(e) => setExperience({ ...experience, description: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Experience Link"
          value={experience.link}
          onChange={(e) => setExperience({ ...experience, link: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setExperience({ ...experience, photo: URL.createObjectURL(e.target.files[0]) })}
        />
        <button type="submit">Add Experience</button>
      </form>

      <form onSubmit={handleThoughtSubmit}>
        <h2>Add Thought</h2>
        <textarea
          placeholder="Your Thought"
          value={thought.text}
          onChange={(e) => setThought({ ...thought, text: e.target.value })}
        ></textarea>
        <button type="submit">Add Thought</button>
      </form>

      <form onSubmit={handleSidebarSubmit}>
        <h2>Edit Sidebar Info</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={sidebar.fullName}
          onChange={(e) => setSidebar({ ...sidebar, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Current Position"
          value={sidebar.currentPosition}
          onChange={(e) => setSidebar({ ...sidebar, currentPosition: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={sidebar.description}
          onChange={(e) => setSidebar({ ...sidebar, description: e.target.value })}
        ></textarea>
        <input
          type="file"
          onChange={(e) => setSidebar({ ...sidebar, photo: URL.createObjectURL(e.target.files[0]) })}
        />
        <button type="submit">Update Sidebar</button>
      </form>
    </div>
  );
};

export default AdminPage;

