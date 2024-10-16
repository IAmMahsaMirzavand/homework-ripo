// explain below concepts and write an example for each one

// action:

// action creator:

// reducer:

// store:






// ### 1. Action


// Explanation:  
// An action is a plain JavaScript object that represents an intention to change the state of the application. Each action must have a `type` property that indicates the type of action being performed. Actions may also contain additional data, known as the payload, which provides the information necessary for the state change.

// Example:


// Define an action
const addTodoAction = {
    type: 'ADD_TODO',
    payload: {
        id: 1,
        text: 'Learn Redux'
    }
};


// ### 2. Action Creator

// Explanation:  
// An action creator is a function that creates and returns an action object. Instead of creating action objects directly, it’s common to use action creators to encapsulate the action creation logic. This makes it easier to generate actions dynamically or add additional logic before returning the action.

// Example:

// Define an action creator
const addTodo = (id, text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id,
            text
        }
    };
};

// Usage of the action creator
const action = addTodo(1, 'Learn Redux');
console.log(action);
// Output:
// {
//    type: 'ADD_TODO',
//    payload: {
//        id: 1,
//        text: 'Learn Redux'
//    }
// }


// ### 3. Reducer

// Explanation:  
// A reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application’s state changes in response to actions sent to the store. They do not perform side effects, and they should not mutate the existing state directly.

// Example:

// Define an initial state
const initialState = {
    todos: []
};

// Define a reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text
                    }
                ]
            };
        default:
            return state; // Return the current state if no actions match
    }
};


// ### 4. Store

// Explanation:  
// The store is an object that holds the application’s state. It is created using the `createStore` function from Redux. The store is responsible for managing the state of the application, allowing you to dispatch actions to update the state, and subscribing to changes in the state.

// Example:

import { createStore } from 'redux';

// Create the store using the reducer
const store = createStore(todoReducer);

// Dispatch an action to update the state
store.dispatch(addTodo(1, 'Learn Redux'));

// Access the current state
console.log(store.getState());
// Output:
// {
//    todos: [
//        {
//            id: 1,
//            text: 'Learn Redux'
//        }
//    ]
// }


// ### Summary

// - Action: A plain object describing the intention to change the state.
// - Action Creator: A function that creates and returns an action object.
// - Reducer: A pure function that determines how the state changes in response to actions.
// - Store: An object that holds the application's state and allows access to the state and dispatching of actions.

// These components work together to manage the application state in a predictable manner, which is one of the key features of Redux.