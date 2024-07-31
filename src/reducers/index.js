import { combineReducers } from 'redux';
import sidebarReducer from './SidebarReducer';
import projectReducer from './projectReducer';
import experienceReducer from './experienceReducer';
import thoughtReducer from './thoughtReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  projects: projectReducer,
  experiences: experienceReducer,
  thoughts: thoughtReducer,
  auth: authReducer,
});

export default rootReducer;
