/* import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (!projects) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-content">
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.photos && project.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Project ${index}`} className="project-photo" />
            ))}
            {project.link && (
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsPage;
 */
/* import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (!projects) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-content">
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
            <div className="project">
              {project.photos && (
                <img src={project.photos[0]} alt={`Project ${project.title}`} className="project-photo" />
              )}
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevents triggering the project link
                    className="external-link"
                  >
                    {project.link}
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ProjectsPage;
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (!projects) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-content">
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project-container">
            <Link to={`/projects/${project.id}`} className="project-link">
              <div className="project">
                {project.photos && (
                  <img src={project.photos[0]} alt={`Project ${project.title}`} className="project-photo" />
                )}
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.link}
                    </a>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsPage;
