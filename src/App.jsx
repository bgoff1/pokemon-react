import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Page from "./components/Page";
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './createStore';

const { store, persistor } = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={persistor}>
                    <Page/>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;