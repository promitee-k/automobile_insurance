import  { useState } from 'react';
import styled from 'styled-components';

interface YearDropdownProps {
  selectedYear: number;
  onChange: (year: number) => void;
}

const YearDropdownContainer = styled.div`
  position: relative;
`;

const YearDropdownButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const YearDropdownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  z-index: 1;
`;

const YearDropdownOption = styled.div<{ isActive: boolean }>`
  padding: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const YearDropdown = ({ selectedYear, onChange }: YearDropdownProps) => {
  const [startYear] = useState(() => new Date().getFullYear() - 10);
  const [endYear] = useState(() => new Date().getFullYear() + 10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleYearClick = (year: number) => {
    onChange(year);
    setIsDropdownOpen(false);
  };

  const renderYearOptions = () => {
    const options = [];
    for (let year = startYear; year <= endYear; year++) {
      const isActive = year === selectedYear;
      options.push(
        <YearDropdownOption
          key={year}
          isActive={isActive}
          onClick={() => handleYearClick(year)}
        >
          {year}
        </YearDropdownOption>
      );
    }
    return options;
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <YearDropdownContainer>
      <YearDropdownButton onClick={toggleDropdown}>
        {selectedYear}
      </YearDropdownButton>
      {isDropdownOpen && (
        <YearDropdownOptions>{renderYearOptions()}</YearDropdownOptions>
      )}
    </YearDropdownContainer>
  );
};

export default YearDropdown;
