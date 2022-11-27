import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import App from './App';

// const teamList = [
//   {memberName: 'Casey', memberEmail: 'Casey@casey.com' , memberRole: 'Team Lead'},
//   {memberName: 'Keiran', memberEmail: 'Keiran@keiran.com', memberRole: 'Web Developer'},
//   {memberName: 'Sarah', memberEmail: 'Sarah@sarah.com', memberRole: 'Frontend Engineer'}
// ]


render(
  <>
    <App />
  </>
  , document.querySelector('#root')
)
