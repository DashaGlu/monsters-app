import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.monsters.map(({id, name}) => {
                    return <div key={id}><h1>{name}</h1></div>
                })}
            </div>
        );
    }
}

export default CardList;