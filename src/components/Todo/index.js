/**
 * Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */
// Styles et assets
import './app.sass';

// Composants
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

/**
 * Code
 */
class Todo extends React.Component {
  /**
   * State
   */
  constructor() {
    super();
    this.getTaks();
  }

  state = {
    tasks: [],
    input: '',
  }

  /**
   * Actions
   */
  getTaks= () => {
    axios.get('http://localhost:3000/tasks',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        this.setState({
          tasks: res.data,
        });
      });
  }

  addTask = () => {
    console.log('ajout de tache');

    const { tasks, input } = this.state;

    // Si la valeur est vide, on arrete tout
    if (input.length < 1) {
      return;
    }

    // Recup des toutes les id
    const allIds = tasks.map(task => task.id);
    // Calcul de l'id la plus grande
    const currentId = allIds.length > 0 ? Math.max(...allIds) : 0;
    // j'incrémente l'id
    const nextId = currentId + 1;

    // Je définis la tache
    const newTask = {
      id: nextId,
      label: input,
      done: false,
      fav: false,
    };

    // const { tasks } = this.state;

    /* NOPE : PAS BON : On ne dois pas modifier le state par nous-même */
    // Récupérer les taches actuelles
    // ajouter la nouvelle tache
    // tasks.push(newTask);

    /* OK */
    // Option 1 : avec map pour une copie uniquement
    // const newTasks = tasks.map(item => item); // pour avoir une copie
    // newTasks.push(newTask);

    // Option 2 : avec concat
    // const newTasks = tasks.concat(newTask);

    /* WAOUUUH : Trop la classe :D */
    const newTasks = [...this.state.tasks, newTask];

    // console.log(newTasks);
    // console.log(this.state.tasks);
    // React va changer le state avec setState (laisse moi faire)
    this.setState({
      tasks: newTasks,
      input: '', // Je vide la valeur du champ dans le state
    });
    // console.log(newTask);
  }

  deleteTask = id => () => {
    const { tasks } = this.state;

    const newTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks,
    });
  }

  changeInputValue = (value) => {
    this.setState({
      input: value,
    });
  }

  checkTask = id => () => {
    this.toggleTaskProp(id, 'done');
  }

  favTask = id => () => {
    this.toggleTaskProp(id, 'fav');
  }

  toggleTaskProp = (id, prop) => {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          [prop]: !task[prop],
        };
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  /**
   * Rendu
   */
  render() {
    const { tasks, input } = this.state;

    // Calcul du compteur (taches non-effectuées)
    const tasksUndone = tasks.filter(task => !task.done).length;

    // Filtres sur les tâches
    const filteredTasks = [
      // pas fait et favori
      ...tasks.filter(task => !task.done && task.fav),
      // pas fait et pas favori
      ...tasks.filter(task => !task.done && !task.fav),
      // fait
      ...tasks.filter(task => task.done),
    ];

    return (
      <div id="app">
        <Form
          onAddTask={this.addTask}
          inputValue={input}
          onInputChange={this.changeInputValue}
        />
        <Counter count={tasksUndone} />
        <Tasks
          list={filteredTasks}
          actions={{
            onTaskCheck: this.checkTask,
            onTaskFav: this.favTask,
            onTaskDelete: this.deleteTask,
          }}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default Todo;
