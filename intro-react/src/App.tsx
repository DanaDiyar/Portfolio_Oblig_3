import React from 'react';
import Contact from "./Components/Contact";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import CreateProject from "./Components/CreateProject";
import './App.css';
import useProjects from './hooks/useProjects';
import { STUDENT_INFO } from './config';

function App() {
  const { projects, handleAddProject, removeProject } = useProjects();


  return (
    <main>
      <Header student={STUDENT_INFO.name} degree={STUDENT_INFO.degree} points={STUDENT_INFO.points} />
      <Experiences />
      <Contact email={""} />
      <Projects projects={projects} removeProject={removeProject} />
      <CreateProject onAddProject={handleAddProject} />
    </main>
  );
}

export default App;