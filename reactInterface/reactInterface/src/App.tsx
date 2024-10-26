import React from 'react';

// Define an interface for the props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean; // optional prop
}

// Functional component that uses the interface for props
const CustomButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

// Usage example
const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <CustomButton label="Click Me" onClick={handleClick} />
      <CustomButton label="Disabled Button" onClick={handleClick} disabled />
    </div>
  );
};

export default App;
