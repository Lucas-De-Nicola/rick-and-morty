import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../utils/useQuery";

export function Search() {
    const [searchText, setSearchText] = useState("Smith");
    const history = useHistory();
    const query = useQuery();
    const search = query.get("search");
    
    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/character/?name=" + searchText);
    } 

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    placeholder="Search..." 
                    value={searchText} 
                    onChange={ (e) => setSearchText(e.target.value) } 
                />
                <button className={styles.searchButton} type="submit"> 
                    <FaSearch size={20}/> 
                </button>
            </div>
        </form>
    )
}
