import React from 'react';
import './app.css'; 

interface ProjectProps {
  children: React.ReactNode;
}

export default function Project({ children }: ProjectProps) {
  return (
    <div className="project-container">
      {children}
    </div>
  );
}
