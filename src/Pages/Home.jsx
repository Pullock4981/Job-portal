import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";


const Home = () => {

    // hor job search category
    const [selectCategory, setSelectCategory] = useState(null);
    // job selection
    const [jobs, setJobs] = useState([]);

    // data fetch
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setJobs(data)
            })
    }, [])
    
    console.log(jobs)
    // handle input change
    const [query, setQuery] = useState('')
        const handleInputChange = (event) => {
            setQuery(event.target.value)
        }
    // console.log(query)

    // filter jobs by data
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    // console.log(filteredItems)

    // redio filturing
    const handleChange = (event) => {
        setSelectCategory(event.target.value)
    }

    // btn based filturing

    const handleClick = (event) => {
        setSelectCategory(event.target.value)
    }

    // main work
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        // filturinginput items
        if (query) {
            filteredJobs = filteredItems;
        }

        // category type filturing
        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase()
            ));
        console.log(filteredJobs)
        }

        return filteredJobs.map((data, i) => <Card key={i} data = {data}></Card>)
    }

    const result = filteredData(jobs, selectCategory, query);
    
    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}></Banner>

            {/* main section */}
            <div className="md:grid grid-cols-4 gap-8 mt-10 p-10 bg-[#FAFAFA] xl:px-24 px-4">
                <div className=" bg-white p-4 rounded">
                    left
                </div>
                <div className="col-span-2 md:p-4 py-4 bg-white rounded">
                    <Jobs result = {result}></Jobs>
                </div>
                <div className=" bg-white p-4 rounded">
                    right
                </div>
            </div>
        </div>
    );
};

export default Home;