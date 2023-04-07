import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Field = styled.div`
  margin-bottom: 0.75rem;
`
const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const InputContainer = styled.div`
  position: relative;
  opacity: 0.7;
`

const Input = styled.input`
  position: relative;
  width: 50%;
  border: 1px solid rgb(156 163 175);
  border-radius: 0.25rem;
  border-width: 1px;
  padding: 0.5rem 0.75rem;
  padding-left: 2.5rem;
  height: 2.5rem;
  font-size: 100%;
`

const Icon = styled.span`
  position: absolute;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  `

interface Props{
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleKeyDown: (event: React.KeyboardEvent) => Promise<void>
}

const SearchInput = (props:Props) => {

  return (
    <Field>
      <Label>Search Database</Label>
      <div>
        <Field>
          <InputContainer>
            <Input
              placeholder='Enter keyword...'
              onChange={props.handleInput}
              onKeyPress={props.handleKeyDown}
            />
            <Icon><SearchIcon /></Icon>
          </InputContainer>
        </Field>
      </div>
    </Field>
  );
};

export default SearchInput;
