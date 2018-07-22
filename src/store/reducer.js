import uuidv4 from 'uuid/v4'; // https://www.npmjs.com/package/uuid

// Import des data

/**
 * Initial State
 */
const initialState = {
  tasks: [],
  input: '',
  passwordInput: '',
  emailInput: '',
  message: '',
  logged: false,
};

/**
 * Types
 */
const INPUT_CHANGE = 'INPUT_CHANGE';
const EMAIL_CHANGE = 'EMAIL_CHANGE';
const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
const TASK_ADD = 'TASK_ADD';
const TASK_DELETE = 'TASK_DELETE';
const TASK_DONE = 'TASK_DONE';
const TASK_FAV = 'TASK_FAV';
const USER_LOGGED = 'USER_LOGGED';
const USER_DISCONNECT = 'USER_DISCONNECT';

/**
 * Traitements
 */
// const allIds = initialTasks.map(task => task.id);
// let lastId = allIds.length > 0 ? Math.max(...allIds) : 0;

const toggleTaskProp = (tasks, id, prop) => tasks.map((task) => {
  if (task.id === id) {
    return {
      ...task,
      [prop]: !task[prop],
    };
  }
  return task;
});

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        logged: true,
      };
    case USER_DISCONNECT:
      return {
        ...state,
        logged: false,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        input: action.input,
      };
    case EMAIL_CHANGE:
      return {
        ...state,
        emailInput: action.input,
      };
    case PASSWORD_CHANGE:
      return {
        ...state,
        passwordInput: action.input,
      };
    case TASK_ADD: {
      // Calcul du prochain id
      // lastId += 1;
      // Nouvelle tache
      const newTask = {
        id: uuidv4(),
        label: state.input,
        done: false,
        fav: false,
      };
      // Nouveau state
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        input: '',
      };
    }

    case TASK_DELETE: {
      const newTasks = state.tasks.filter(task => task.id !== action.id);

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case TASK_DONE: {
      const newTasks = toggleTaskProp(state.tasks, action.id, 'done');

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case TASK_FAV: {
      const newTasks = toggleTaskProp(state.tasks, action.id, 'fav');

      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeInput = value => ({
  type: INPUT_CHANGE,
  input: value,
});

export const changePassword = value => ({
  type: PASSWORD_CHANGE,
  input: value,
});

export const changeEmail = value => ({
  type: EMAIL_CHANGE,
  input: value,
});

export const addTask = () => ({
  type: TASK_ADD,
});

export const deleteTask = id => ({
  type: TASK_DELETE,
  id,
});

export const doneTask = id => ({
  type: TASK_DONE,
  id,
});

export const favTask = id => ({
  type: TASK_FAV,
  id,
});

export const logged = () => ({
  type: USER_LOGGED,
});

export const disconnect = () => ({
  type: USER_DISCONNECT,
});

/**
 * Selectors
 */
export const getFilteredTasks = tasks => [
  // pas fait et favori
  ...tasks.filter(task => !task.done && task.fav),
  // pas fait et pas favori
  ...tasks.filter(task => !task.done && !task.fav),
  // fait
  ...tasks.filter(task => task.done),
];

/**
 * Export
 */
export default reducer;
