import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`)
      .then(response => setProject(response.data))
      .catch(error => console.error('Error fetching project', error));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.photos && project.photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Project ${index + 1}`} />
      ))}
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>}
    </div>
  );
};

export default ProjectDetail;
