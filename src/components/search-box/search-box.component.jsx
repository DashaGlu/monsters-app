import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
    <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}/>
);

export default SearchBox