import './card-list.styles.css';

import CardComponent from "../card/card.component";

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => <CardComponent monster={monster} key={monster.id}/>)}
    </div>
);

export default CardList;