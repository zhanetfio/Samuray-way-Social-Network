import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    appState: RootStateType
}
function App(props:AppPropsType) {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile postsState={props.appState.profilePage} />}/>
                    <Route path="/dialogs" element={<Dialogs dialogs={props.appState.messagesPage} />}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
