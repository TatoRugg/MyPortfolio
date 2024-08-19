/* import React, { useEffect, useState } from 'react';
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
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching project with id:', id); // Debugging: Check the id being used
    axios.get(`http://localhost:5000/projects/${id}`)
      .then(response => {
        if (response.data) {
          console.log('Fetched project:', response.data); // Debugging: Log the fetched data
          setProject(response.data);
        } else {
          setError('Project not found');
        }
      })
      .catch(error => {
        console.error('Error fetching project', error); // Debugging: Log any errors
        setError('Failed to fetch project');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!project) return <p>No project data available.</p>;

  return (
    <div className="project-detail">
      <div className="detailsHeader">
        {project.photos && project.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Project ${index + 1}`} className="project-photo" />
        ))}
        <h1>{project.title}</h1>
      </div>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Project Link
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
