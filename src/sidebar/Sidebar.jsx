import Location from "./Location";
import Salary from "./Salary";


const Sidebar = ({handleChange, handleClick}) => {
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-bold mb-2">Filter</h3>

            <Location handleChange={handleChange}></Location>
            <Salary handleChange={handleChange} handleClick={handleClick}></Salary>
        </div>
    );
};

export default Sidebar;