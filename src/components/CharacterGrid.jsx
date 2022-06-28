import styles from './CharacterGrid.module.css';
import { useEffect, useState } from "react";
import { getAllCharacters } from "../utils/axios";
import { CharacterCard } from "./CharacterCard";
import { useQuery } from '../utils/useQuery';

export function CharacterGrid() {
    const [characters, setCharacters] = useState([]);
    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        getAllCharacters(setCharacters);
         
    }, [search]);

    return (
        <ul className={styles.characterGrid}>
            {characters.map(character => (
                <CharacterCard key={character.id} character={character}/>
            ))} 
        </ul>
    )
}
