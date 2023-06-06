import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "../atoms/Dropdown";


type SearchableDropdownProps = {
  options: string[];
  selectedVal: string | null;
  handleChange: (value: string | null) => void;
};


const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  selectedVal,
  handleChange,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const selectOption = (option: string) => {
    setQuery("");
    handleChange(option);
    setIsOpen(!isOpen);
  };

  const toggle = (e: MouseEvent)=> {
    setIsOpen(e && e.target === inputRef.current);
  }
  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);
  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options: string[]) => {
    return options.filter(
      (option) =>
        option.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <Dropdown>
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={()=>{
                toggle
            }}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option === selectedVal ? "selected" : ""
              }`}
              key={`${index}`}
            >
              {option}
            </div>
          );
        })}
      </div>
    </Dropdown>
  );
};

export default SearchableDropdown;
