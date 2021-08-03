import React, {useState} from 'react';
import Fight from '../components/fight';
import ChooseFighter from '../components/choose-fighter';

function FightPage() {
    const [user, setUser] = useState({email: ""});
    


    return (
        <ChooseFighter></ChooseFighter>
    )
}

export default FightPage;