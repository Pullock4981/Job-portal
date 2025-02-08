import { useState } from "react";
import Banner from "../Components/Banner";


const Home = () => {

    const [query, setQuery] = useState('')
        const handleInputChange = (event) => {
            setQuery(event.target.value)
        }
    console.log(query)
    
    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}></Banner>
        </div>
    );
};

export default Home;