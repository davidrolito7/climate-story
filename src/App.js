import React from 'react';
import './App.css';
import Menu from './components/menu/menu';

const items = [
  {
    name: "Freelance",
    color: "#f44336",
    href: "#"
  },
  {
    name: "Design",
    color: "#e91e63",
    href: "#"
  },
  {
    name: "Director",
    color: "#9c27b0",
    href: "#"
  },
  {
    name: "Experience",
    color: "#673ab7",
    href: "#"
  },
  {
    name: "Interface",
    color: "#3f51b5",
    href: "#"
  }
];

function App() {
  return (
    
    <div className="App">
      <Menu items={items} />
    </div>
  );
}

export default App;
