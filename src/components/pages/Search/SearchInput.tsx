import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface Props{
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleKeyDown: (event: React.KeyboardEvent) => Promise<void>
}

const SearchInput = (props:Props) => {

  return (
    <div className="field">
      <label className='label'>
        Search Database
      </label>
      <div className="field-body">
        <div className="field">
          <div className="input-control">
            <input
              placeholder='Enter keyword...'
              className='search-input'
              onChange={props.handleInput}
              onKeyPress={props.handleKeyDown}
            />
            <span className='search-icon'><SearchIcon /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
