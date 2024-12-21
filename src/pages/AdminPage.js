import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, fetchProjects, deleteProject, updateProject } from '../actions/projectActions';
import { addExperience, fetchExperiences, deleteExperience, updateExperience } from '../actions/experienceActions';
import { addThought, fetchThoughts, deleteThought, updateThought } from '../actions/thoughtActions';
import { fetchSidebarInfo, updateSidebarInfo, addTool, fetchTools, updateTools, deleteTool } from '../actions/SidebarActions';
import ResumeExport from '../components/ResumeExport';
import { useAuth } from '../context/AuthContext';
import './AdminPage.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const projects = useSelector((state) => state.projects);
  const experiences = useSelector((state) => state.experiences);
  const thoughts = useSelector((state) => state.thoughts);
  const tools = useSelector((state) => state.sidebar.tools); // Fetch tools
  const sidebarInfo = useSelector((state) => state.sidebar.sidebarInfo);

  const [project, setProject] = useState({ title: '', description: '', photos: [], link: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [experience, setExperience] = useState({ title: '', date: '', description: '', photo: '', link: '' });
  const [editingExperience, setEditingExperience] = useState(null);
  const [thoughtText, setThoughtText] = useState('');
  const [editingThought, setEditingThought] = useState(null);
  const [sidebar, setSidebar] = useState({ fullName: '', currentPosition: '', description: '', photo: '' });
  const [editingTool, setEditingTool] = useState(null)
  const [tool, setTool] = useState({ name: '', logoUrl: '' });
  const [imageInput, setImageInput] = useState('');
  
  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchExperiences());
    dispatch(fetchThoughts());
    dispatch(fetchSidebarInfo());
    dispatch(fetchTools()); // Fetch tools
  }, [dispatch]);

  useEffect(() => {
    if (sidebarInfo) {
      setSidebar(sidebarInfo);  // Set sidebar info when fetched
    }
  }, [sidebarInfo]);

  /* Project Handlers */
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      dispatch(updateProject({ ...project, id: editingProject.id })).then(() => {
        setEditingProject(null);
        setProject({ title: '', description: '', photos: [], link: '' });
        dispatch(fetchProjects());
      });
    } else {
      dispatch(addProject(project)).then(() => {
        setProject({ title: '', description: '', photos: [], link: '' });
        dispatch(fetchProjects());
      });
    }
    setImageInput('');
  };

  const handleEditProject = (proj) => {
    setEditingProject(proj);
    setProject(proj);
  };

  const handleCancelEditProject = () => {
    setEditingProject(null);
    setProject({ title: '', description: '', photos: [], link: '' });
  };

  const handleDeleteProject = (id) => {
    dispatch(deleteProject(id)).then(() => dispatch(fetchProjects()));
  };

  /* Experience Handlers */
  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    if (editingExperience) {
      dispatch(updateExperience({ ...experience, id: editingExperience.id })).then(() => {
        setEditingExperience(null);
        setExperience({ title: '', date: '', description: '', photo: '', link: '' });
        dispatch(fetchExperiences());
      });
    } else {
      dispatch(addExperience(experience)).then(() => {
        setExperience({ title: '', date: '', description: '', photo: '', link: '' });
        dispatch(fetchExperiences());
      });
    }
    setImageInput('');
  };

  const handleEditExperience = (exp) => {
    setEditingExperience(exp);
    setExperience(exp);
  };

  const handleCancelEditExperience = () => {
    setEditingExperience(null);
    setExperience({ title: '', date: '', description: '', photo: '', link: '' });
  };

  const handleDeleteExperience = (id) => {
    dispatch(deleteExperience(id)).then(() => dispatch(fetchExperiences()));
  };

  /* Thought Handlers */
  const handleThoughtSubmit = (e) => {
    e.preventDefault();
    if (editingThought) {
      dispatch(updateThought({ id: editingThought.id, text: thoughtText })).then(() => {
        setEditingThought(null);
        setThoughtText('');
        dispatch(fetchThoughts());
      });
    } else {
      dispatch(addThought({ text: thoughtText })).then(() => {
        setThoughtText('');
        dispatch(fetchThoughts());
      });
    }
  };

  const handleEditThought = (thought) => {
    setEditingThought(thought);
    setThoughtText(thought.text);
  };

  const handleCancelEditThought = () => {
    setEditingThought(null);
    setThoughtText('');
  };

  const handleDeleteThought = (id) => {
    dispatch(deleteThought(id)).then(() => dispatch(fetchThoughts()));
  };

  /* Tool Handlers V2 */
  const handleToolSubmit = (e) => {
    e.preventDefault();
    if (editingTool) {
      dispatch(updateTools({ ...tool, id: editingTool.id })).then(() => {
        setEditingTool(null);
        setTool({ name: '', logoUrl: '' });
        dispatch(fetchTools());
      });
    } else {
      dispatch(addTool(tool)).then(() => {
        setTool({ name: '', logoUrl: '' });
        dispatch(fetchTools());
      });
    }
    setImageInput('');
  };

  /* const handleToolSubmit = (e) => {
    e.preventDefault();
    dispatch(addTool(tool)).then(() => dispatch(fetchTools())); // Add tool and fetch updated list
    setTool({ name: '', logoUrl: '' });
  }; */

  const handleEditTool = (tool) => {
    setEditingTool(tool);
    setTool(tool);
  };

  const handleCancelEditTool = () => {
    setEditingTool(null);
    setTool('');
  };

  const handleDeleteTool = (id) => {
    dispatch(deleteTool(id)).then(() => dispatch(fetchTools()));
  };

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSidebarInfo(sidebar));  // Update sidebar info
  };


  const handleImageInputChange = (e, setFunction, stateField) => {
    const value = e.target.value;
    setImageInput(value);
  
    if (value.startsWith('http://') || value.startsWith('https://')) {
      setFunction((prev) => ({ ...prev, [stateField]: value })); // Set as string
    } else if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFunction((prev) => ({
          ...prev,
          [stateField]: reader.result, // Set as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-page">
      <div className="header">
        <h1>Admin Panel</h1>
        <button className="logout-button" onClick={logout}>
          Sign Out
        </button>
        <button
  className="export-button"
  onClick={() => ResumeExport(sidebarInfo, experiences, projects, tools)}
>
  Export to PDF
</button>
      </div>

      <div className="content">
        {/* Project Form */}
        <form onSubmit={handleProjectSubmit}>
          <h2>{editingProject ? 'Edit Project' : 'Add Project'}</h2>
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
          />
          <input type="file" onChange={(e) => handleImageInputChange(e, setProject, 'photos')} />
          <button type="submit">{editingProject ? 'Update Project' : 'Add Project'}</button>
          {editingProject && (
            <button onClick={handleCancelEditProject} type="button">
              Cancel Edit
            </button>
          )}
        </form>

        <h2>Manage Projects</h2>
        <div className="projects-table-container">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj.id}>
                  <td>{proj.title}</td>
                  <td>{proj.description}</td>
                  <td className="buttons">
                    <button onClick={() => handleEditProject(proj)}>Edit</button>
                    <button onClick={() => handleDeleteProject(proj.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Experience Form */}
        <form onSubmit={handleExperienceSubmit}>
          <h2>{editingExperience ? 'Edit Experience' : 'Add Experience'}</h2>
          <input
            type="text"
            placeholder="Experience Title"
            value={experience.title}
            onChange={(e) => setExperience({ ...experience, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Date (e.g., January 2020)"
            value={experience.date}
            onChange={(e) => setExperience({ ...experience, date: e.target.value })}
          />
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
          />
          <input type="file" onChange={(e) => handleImageInputChange(e, setExperience, 'photo')} />
          <button type="submit">{editingExperience ? 'Update Experience' : 'Add Experience'}</button>
          {editingExperience && (
            <button onClick={handleCancelEditExperience} type="button">
              Cancel Edit
            </button>
          )}
        </form>

        <h2>Manage Experiences</h2>
        <div className="experiences-table-container">
          <table className="experiences-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.title}</td>
                  <td>{exp.date}</td>
                  <td>
                    {exp.description}
                    <div>
                      {Array.isArray(exp.photo) &&
                        exp.photo.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={exp.title}
                            style={{ maxWidth: '100px', marginTop: '10px' }}
                          />
                        ))}
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleEditExperience(exp)}>Edit</button>
                    <button onClick={() => handleDeleteExperience(exp.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Thought Form */}
        <form onSubmit={handleThoughtSubmit}>
          <h2>{editingThought ? 'Edit Thought' : 'Add Thought'}</h2>
          <textarea
            placeholder="Your Thought"
            value={thoughtText}
            onChange={(e) => setThoughtText(e.target.value)}
          ></textarea>
          <button type="submit">{editingThought ? 'Update Thought' : 'Add Thought'}</button>
          {editingThought && (
            <button onClick={handleCancelEditThought} type="button">
              Cancel Edit
            </button>
          )}
        </form>

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
                      <input type="text" value={thoughtText} onChange={(e) => setThoughtText(e.target.value)} />
                    ) : (
                      thought.text
                    )}
                  </td>
                  <td>
                    {editingThought && editingThought.id === thought.id ? (
                      <>
                        <button onClick={handleThoughtSubmit}>Save</button>
                        <button onClick={handleCancelEditThought}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEditThought(thought)}>Edit</button>
                        <button onClick={() => handleDeleteThought(thought.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tool Form */}
<form onSubmit={handleToolSubmit}>
  <h2>{editingTool ? 'Edit Tool' : 'Add Tool'}</h2>
  
  {/* Tool Name */}
  <input
    type="text"
    placeholder="Tool Name"
    value={tool.name}
    onChange={(e) => setTool({ ...tool, name: e.target.value })}
  />

  {/* Tool Logo URL or File */}
  <input
    type="text"
    placeholder="Tool Logo URL or select a file"
    value={imageInput}
    onChange={(e) => handleImageInputChange(e, setTool, 'logoUrl')}
  />
  <input
    type="file"
    onChange={(e) => handleImageInputChange(e, setTool, 'logoUrl')}
  />

  {/* Submit and Cancel Buttons */}
  <button type="submit">{editingTool ? 'Update Tool' : 'Add Tool'}</button>
  {editingTool && (
    <button onClick={handleCancelEditTool} type="button">
      Cancel Edit
    </button>
  )}
</form>

        {/* 
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
        </form> */}

        <h2>Manage Tools</h2>
        <div className="tools-table-container">
          <table className="tools-table">
            <thead>
              <tr>
                <th>Tool Name</th>
                <th>Logo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.id}>
                  <td>{tool.name}</td>
                  <td>
                    <img src={tool.logoUrl} alt={tool.name} style={{ maxWidth: '50px', height: '50px', objectFit: 'contain' }} />
                  </td>
                  <td className="buttons">
                    <button onClick={() => handleEditTool(tool)}>Edit</button>
                    <button onClick={() => handleDeleteTool(tool.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
{/* 
        <h2>Manage Tools</h2>
        <div className="tools-table-container">
          <table className="tools-table">
            <thead>
              <tr>
                <th>Tool Name</th>
                <th>Logo</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.id}>
                  <td>{tool.name}</td>
                  <td>
                    <img src={tool.logoUrl} alt={tool.name} style={{ maxWidth: '50px' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  */}

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
          />
          <input type="file" onChange={(e) => handleImageInputChange(e, setSidebar, 'photo')} />
          <button type="submit">Update Sidebar</button>
        </form>

      </div>
    </div>
  );
};

export default AdminPage;

