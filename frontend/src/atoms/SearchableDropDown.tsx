// import React from 'react';
// import Select, { OptionTypeBase, Props as SelectProps } from 'react-select';
// import { Theme } from 'react-select/src/theme';
// import styled from 'styled-components';

// type SearchableDropdownProps<T extends OptionTypeBase> = SelectProps<T>;

// const DropdownContainer = styled.div`
//   width: 200px;
// `;

// const customStyles = (theme: Theme) => ({
//   control: (provided: any) => ({
//     ...provided,
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     minHeight: '34px',
//   }),
//   placeholder: (provided: any) => ({
//     ...provided,
//     color: '#999',
//   }),
//   singleValue: (provided: any) => ({
//     ...provided,
//     color: '#000',
//   }),
//   menu: (provided: any) => ({
//     ...provided,
//     zIndex: 9999,
//   }),
// });

// const SearchableDropdown = <T extends OptionTypeBase>({ ...rest }: SearchableDropdownProps<T>) => {
//   return (
//     <DropdownContainer>
//       <Select
//         {...rest}
//         styles={customStyles}
//         isSearchable
//         placeholder="Search..."
//         noOptionsMessage={() => 'No options found'}
//       />
//     </DropdownContainer>
//   );
// };

// export default SearchableDropdown;
