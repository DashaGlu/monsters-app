import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [searchField, setSearchFiled] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        setFilteredMonsters(monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        }));
    }, [searchField, monsters]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchFiled(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
                className='search-box'/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
};

export default App;
