import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css";
import {IoMdHeartEmpty} from "react-icons/io"
import { useState } from "react";

export function CharacterCard({character}) {
    const [like, setLike] = useState(false);


    const likeStyle = {
        color: 'red'
    }

    const unLikeStyle = {
        color: 'black'
    }
    
    const darLike = () => {
        setLike(!like)         
    }
    
    return (
        <li className={styles.card}>
            <Link to={`/character/${character.id}`}>
                <img 
                    src={character.image} alt={character.name}
                    width={230}
                    height={345}
                    className={styles.image}
                />
                 
                <div className={styles.name}>{character.name}</div>             
            </Link>
            <button className={styles.like} onClick={darLike} style={like ? likeStyle : unLikeStyle}> <IoMdHeartEmpty size={20} /></button>
        </li>
    )
}
