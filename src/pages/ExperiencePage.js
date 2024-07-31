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
    <div className="main-content">
      <h1>Experience</h1>
      {experiences.length === 0 ? (
        <p>No experiences available.</p>
      ) : (
        experiences.map((experience) => (
          <div key={experience.id} className="experience">
            <p>{experience.description}</p>
            {experience.photo && (
              <img src={experience.photo} alt="Experience" className="experience-photo" />
            )}
            {experience.link && (
              <p>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  {experience.link}
                </a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ExperiencePage;


