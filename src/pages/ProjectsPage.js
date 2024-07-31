import React, { useEffect } from 'react';
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


