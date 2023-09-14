import * as React from 'react';

import {useReducer} from "react";
import {Action, State, ContextState} from "../types/stateType";
import {todoReducer} from "../reducers/todoReducer";
import {observer} from 'mobx-react-lite';
import {AppStoreProvider} from '../../stores/AppStore/AppStoreProvider'; 
import {useAppStore} from '../../stores/AppStore/AppStore'; // index.jsx
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export const initialState: State = {
    newTask: '',
    tasks: []
}

// <Partial> allows you to create the context without default values.
export const ContextApp = React.createContext<Partial<ContextState>>({});
const appStore = useAppStore();
const App:  React.FC = () => {

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (
        <>
            <h1>
                React + TypeScript
            </h1>
            <AppStoreProvider>
            <ContextApp.Provider value={ContextState}>
                <NewTask />
                <TasksList />
            </ContextApp.Provider>
            </AppStoreProvider>
        </>
    )
}

export default App;
