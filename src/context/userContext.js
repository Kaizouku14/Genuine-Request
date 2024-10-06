import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [date, setDate] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customIdea, setCustomIdea] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      const updatedOptions = selectedOptions.filter((selected) => selected !== option);
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <UserContext.Provider
      value={{
        date,
        handleDateChange,
        selectedOptions,
        setSelectedOptions,
        customIdea,
        setCustomIdea,
        handleOptionSelect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
