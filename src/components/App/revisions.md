/**
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local Import
 */

function hello() {
  const resultat = 1 + 2;

  return resultat;
}
/*eslint-disable */
Form = () => {
  const handleSubmit = (evt) => {
    // gestion du click
    evt.preventDefault()
  }
  // travail préparatoire
  // infos diverses à traiter
  // console.log et autre opération

  return (
    <form id="resultat" onSubmit={handleSubmit}>
      mon resultat
    </form>
  );
}

class Form extends React.Component {
  handleSubmit = (evt) => {
    // gestion du click
    evt.preventDefault()
  }
  // travail préparatoire
  // infos diverses à traiter
  // console.log et autre opération
  render() {
    return (
      <form id="resultat" onSubmit={handleSubmit}>
        mon resultat
      </form>
    );
  }
}
<div id="app">
  <p id="app-desc" className="text">Hello</p>
</div>

React.createElement('div', {id: 'app'}, 
  React.createElement('p', {id: 'app-desc', className: 'text'}, 'Hello')
)



hello = () => (
  <div id="resultat">
    mon resultat
  </div>
)


/**
 * Code
 */
const Login = ({ data }) => {
  // Je fais ma cuisine dans la fonction
  console.log(data);
  // ...

  // Je retourne du JSX
  return (
    <div id="login">
      {data.title}
    </div>
  );
};

Login.propTypes = {
  data: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Login;
