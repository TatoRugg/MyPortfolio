/* import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, fetchProjects } from '../actions/projectActions';
import { addExperience, fetchExperiences } from '../actions/experienceActions';
import { addThought, fetchThoughts } from '../actions/thoughtActions';
import { fetchSidebarInfo, updateSidebarInfo, addTool, fetchTools} from '../actions/SidebarActions';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import './AdminPage.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth(); // Destructure the logout function from useAuth
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);

  const [project, setProject] = useState({ title: '', description: '', photos: [], link: '' });
  const [experience, setExperience] = useState({ description: '', photo: '', link: '' });
  const [thought, setThought] = useState({ text: '' });
  const [sidebar, setSidebar] = useState({ fullName: '', currentPosition: '', description: '', photo: '' });
  const [tool, setTool] = useState({ name: '', logoUrl: '' });

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchExperiences());
    dispatch(fetchThoughts());
    dispatch(fetchSidebarInfo());
    dispatch(fetchTools());
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


  const handleToolSubmit = (e) => {
    e.preventDefault();
    dispatch(addTool(tool)).then(() => dispatch(fetchTools())); // Dispatch the action to add a tool
    setTool({ name: '', logoUrl: '' });
  };

  return (
    <div className="admin-page">
    <div className="header">
      <h1>Admin Panel</h1>
      <button className="logout-button" onClick={logout}>Sign Out</button>
    </div>

      <div className="content">
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

        <form onSubmit={handleToolSubmit}>
          <h2>Add Tool</h2>
          <input
            type="text"
            placeholder="Tool Name"
            value={tool.name}
            onChange={(e) => setTool({ ...tool, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tool Logo URL"
            value={tool.logoUrl}
            onChange={(e) => setTool({ ...tool, logoUrl: e.target.value })}
          />
          <button type="submit">Add Tool</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;


 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, fetchProjects } from '../actions/projectActions';
import { addExperience, fetchExperiences } from '../actions/experienceActions';
import { addThought, fetchThoughts, deleteThought, updateThought } from '../actions/thoughtActions';
import { fetchSidebarInfo, updateSidebarInfo, addTool, fetchTools } from '../actions/SidebarActions';
import { useAuth } from '../context/AuthContext';
import './AdminPage.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const thoughts = useSelector((state) => state.thoughts);
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);

  const [project, setProject] = useState({ title: '', description: '', photos: [], link: '' });
  const [experience, setExperience] = useState({ description: '', photo: '', link: '' });
  const [editingThought, setEditingThought] = useState(null); // State for the thought being edited
  const [thoughtText, setThoughtText] = useState(''); // State for input field when editing
  const [sidebar, setSidebar] = useState({ fullName: '', currentPosition: '', description: '', photo: '' });
  const [tool, setTool] = useState({ name: '', logoUrl: '' });
  const [imageInput, setImageInput] = useState('');

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchExperiences());
    dispatch(fetchThoughts());
    dispatch(fetchSidebarInfo());
    dispatch(fetchTools());
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
    setImageInput('');
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(experience)).then(() => dispatch(fetchExperiences()));
    setExperience({ description: '', photo: '', link: '' });
    setImageInput('');
  };

  const handleThoughtSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (editingThought) {
      // If editing, update the thought
      dispatch(updateThought({ id: editingThought.id, text: thoughtText })).then(() => {
        setEditingThought(null);
        setThoughtText('');
        dispatch(fetchThoughts()); // Refetch thoughts after update
      });
    } else {
      // If not editing, add a new thought
      dispatch(addThought({ text: thoughtText })).then(() => {
        setThoughtText('');
        dispatch(fetchThoughts());
      });
    }
  };

  const handleEdit = (thought) => {
    setEditingThought(thought);
    setThoughtText(thought.text);
  };

  const handleCancelEdit = () => {
    setEditingThought(null);
    setThoughtText('');
  };

  const handleThoughtChange = (e) => {
    // Update the text of the thought being edited
    setThoughtText(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteThought(id)).then(() => dispatch(fetchThoughts()));
  };

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSidebarInfo(sidebar));
    setImageInput('');
  };

  const handleToolSubmit = (e) => {
    e.preventDefault();
    dispatch(addTool(tool)).then(() => dispatch(fetchTools()));
    setTool({ name: '', logoUrl: '' });
  };

  const handleImageInputChange = (e, setFunction, stateField) => {
    const value = e.target.value;
    setImageInput(value);

    if (value.startsWith('http://') || value.startsWith('https://')) {
      setFunction(prev => ({ ...prev, [stateField]: [value] })); // Treat as URL
    } else if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFunction(prev => ({
          ...prev,
          [stateField]: [reader.result], // Store as base64 URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-page">
      <div className="header">
        <h1>Admin Panel</h1>
        <button className="logout-button" onClick={logout}>Sign Out</button>
      </div>

      <div className="content">
        {/* Project Form */}
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
            type="text"
            placeholder="Project Image URL or select a file"
            value={imageInput}
            onChange={(e) => handleImageInputChange(e, setProject, 'photos')}
            onClick={() => setImageInput('')} // Clear when the user clicks to enter a new value
          />
          <input
            type="file"
            onChange={(e) => handleImageInputChange(e, setProject, 'photos')}
          />
          <button type="submit">Add Project</button>
        </form>

        {/* Experience Form */}
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
            type="text"
            placeholder="Experience Image URL or select a file"
            value={imageInput}
            onChange={(e) => handleImageInputChange(e, setExperience, 'photo')}
            onClick={() => setImageInput('')} // Clear when the user clicks to enter a new value
          />
          <input
            type="file"
            onChange={(e) => handleImageInputChange(e, setExperience, 'photo')}
          />
          <button type="submit">Add Experience</button>
        </form>

        {/* Thought Form */}
        <form onSubmit={handleThoughtSubmit}>
          <h2>{editingThought ? 'Edit Thought' : 'Add Thought'}</h2>
          <textarea
            placeholder="Your Thought"
            value={thoughtText}
            onChange={handleThoughtChange}
          ></textarea>
          <button type="submit">{editingThought ? 'Update Thought' : 'Add Thought'}</button>
          {editingThought && (
            <button onClick={handleCancelEdit} type="button">
              Cancel Edit
            </button>
          )}
        </form>

        {/* Thoughts Management Table */}
        <h2>Manage Thoughts</h2>
        <div className="thoughts-table-container">
          <table className="thoughts-table">
            <thead>
              <tr>
                <th>Thought</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {thoughts.map((thought) => (
                <tr key={thought.id}>
                  <td>
                    {editingThought && editingThought.id === thought.id ? (
                      <input
                        type="text"
                        value={thoughtText}
                        onChange={handleThoughtChange}
                      />
                    ) : (
                      thought.text
                    )}
                  </td>
                  <td>
                    {editingThought && editingThought.id === thought.id ? (
                      <>
                        <button onClick={handleThoughtSubmit}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(thought)}>Edit</button>
                        <button onClick={() => handleDelete(thought.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar Info Form */}
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
            type="text"
            placeholder="Sidebar Image URL or Upload File"
            value={imageInput}
            onChange={(e) => handleImageInputChange(e, setSidebar, 'photo')}
            onClick={() => setImageInput('')} // Clear when the user clicks to enter a new value
          />
          <input
            type="file"
            onChange={(e) => handleImageInputChange(e, setSidebar, 'photo')}
          />
          <button type="submit">Update Sidebar</button>
        </form>

        {/* Tool Form */}
        <form onSubmit={handleToolSubmit}>
          <h2>Add Tool</h2>
          <input
            type="text"
            placeholder="Tool Name"
            value={tool.name}
            onChange={(e) => setTool({ ...tool, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tool Logo URL"
            value={tool.logoUrl}
            onChange={(e) => setTool({ ...tool, logoUrl: e.target.value })}
          />
          <button type="submit">Add Tool</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;

