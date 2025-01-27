import React from "react"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import UserList from "./UserList"
import UserForm from "./UserForm"
import ErrorBoundary from "./ErrorBoundary"
import "../styles/App.css"


function App() {
    return(
        <ErrorBoundary>
            <Router>
                <div className="App">
                    <h1>User Management App</h1>
                    <Routes>
                        <Route path='/' element={<UserList/>} />
                        <Route path='/add' element={<UserForm/>} />
                        <Route path='/edit/:id' element={<UserForm/>} />
                    </Routes>
                </div>
            </Router>
        </ErrorBoundary>
    )
}


export default App;






