import {useState} from "react";
import Manual from "../Manual"
import styles from './Search.module.css'

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	
	return (
	<div className={styles.templateContainer}>
		 <div className={styles.under}>
			<span>Прізвище</span>
			 </div>
			<div className={styles.searchInput_Container}>
			  <input className={styles.input} id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
				 setSearchTerm(event.target.value);
			  }} />
			</div>
			<div className={styles.template_Container}>
					<div className={styles.itog}>
					<Manual surname={searchTerm}></Manual>
					</div>
			</div>
		 </div>
	)
}

export default Search