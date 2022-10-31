import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler, className }: SearchBoxProps) => (
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}/>
);

export default SearchBox