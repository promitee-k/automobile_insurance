import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 6px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;


const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleChange} />
      <CheckboxCheckmark />
    </CheckboxContainer>
  );
};

export default Checkbox;
