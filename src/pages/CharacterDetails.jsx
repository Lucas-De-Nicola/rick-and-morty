import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCharacter } from "../utils/axios";
import styles from "./CharacterDetails.module.css";


export function CharacterDetails() {
    const [character, setCharacter] = useState(null);
    const {characterId} = useParams();

    useEffect(() => {
       getSingleCharacter(characterId, setCharacter)      
    }, [characterId]);

    if(!character) return null;

    return (
        <div className={styles.detailsContainer}>
            <img
                 src={character.image} alt={character.name} className={`${styles.col} ${styles.detailsImg}`}
            />
            <div className={`${styles.col} ${styles.detailsCharacter}`}>
                <p>
                    <strong>Title:</strong> {character.name}
                </p>
                <p><strong>Genres:</strong> {character.origin.name}</p>
                <p><strong>Description:</strong> {character.status} {character.species} {character.gender}</p>
                {/* <p><strong>Episodes:</strong> {character.epidode}</p> */}
            </div>
        </div>
    )
}
