import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

import './App.css';

export type Monster = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [searchField, setSearchFiled] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredMonsters(monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        }));
    }, [searchField, monsters]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
