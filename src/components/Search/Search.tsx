import {useState} from "react";
import Manual from "../Manual"
import './Search.css'

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
	  <>
		 <div className="templateContainer">
		 <div className="under">
			 <span>Прізвище</span>
			 </div>
			<div className="searchInput_Container">
			  <input className="input" id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
				 setSearchTerm(event.target.value);
			  }} />
			</div>
			<div className="template_Container">
 
					<div className="itog">
					<Manual surname={searchTerm}></Manual>
					</div>
			</div>
		 </div>
	  </>
	)
}

export default Search