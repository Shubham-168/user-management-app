import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <header>
            <h1>User Management App</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add" element={<UserForm />} />
              <Route path="/edit/:id" element={<UserForm />} />
            </Routes>
          </main>
          <footer>
            <p>&copy; 2025 User Management App. All Rights Reserved.</p>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
