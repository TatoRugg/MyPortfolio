import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThoughts } from '../actions/thoughtActions';
import './ThoughtsColumn.css';

const ThoughtsColumn = () => {
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thoughts);

  useEffect(() => {
    dispatch(fetchThoughts());
  }, [dispatch]);

  // Refetch thoughts when a thought is added or removed
  useEffect(() => {
    dispatch(fetchThoughts());
  }, [thoughts.length, dispatch]);

  return (
    <div className="thoughts-column">
      <h2>Latest Thoughts</h2>
      {thoughts.length === 0 ? (
        <p>No thoughts available.</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought.id} className="thought">
            <p>{thought.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ThoughtsColumn;


