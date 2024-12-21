import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExperiences } from '../actions/experienceActions';
import './ExperiencePage.css';

const ExperiencePage = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences);

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  return (
    <div className="timeline-container">
      <h1>My Road to Glory</h1>
      <p>Below you can see a timeline with some of my professional accomplishments.</p>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              {experience.photo && experience.photo[0] && (
                <img
                  src={experience.photo[0]}
                  alt={`Experience - ${experience.title}`}
                  className="experience-photo"
                />
              )}
              <div className="experience-text">
                <h2>{experience.title}</h2>
                <h3>{experience.date}</h3>
                <p>{experience.description}</p>
                {experience.link && (
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    View More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
