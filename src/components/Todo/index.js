/**
 * Import
 */
import React from 'react';
// import axios from 'axios';

/**
 * Local import
 */
// Styles et assets
import './app.sass';

// Composants
import Form from 'src/containers/Form';
import Counter from 'src/containers/Counter';
import Tasks from 'src/containers/Tasks';

/**
 * Code
 */
const Todo = () => (
  <div id="app">
    <Form />
    <Counter />
    <Tasks />
  </div>
);

/**
 * Export
 */
export default Todo;
/**
 * Actions
 */
// getTaks= () => {
//   axios.get('http://localhost:3000/tasks',
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//     .then((res) => {
//       this.setState({
//         tasks: res.data,
//       });
//     });
// }
