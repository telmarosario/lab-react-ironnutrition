import { useState } from "react/cjs/react.development";


function Search({searchFilter}) {

    const [search, setSearch] = useState('');

    const handleSeach = (event) => {
        setSearch(event.target.value);
        searchFilter(event.target.value);
    }

    return ( 
    <div>
    
            <label>Search</label>
            <input type="text" name="search" value={search} onChange={handleSeach}/>
        
        
    </div> );
}

export default Search;