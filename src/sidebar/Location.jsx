import InputField from "../Components/InputField";


const Location = ({handleChange}) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Location</h4>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className="checkmark"></span>All
                </label>

                <InputField handleChange={handleChange} value="london" title="London" name="test"></InputField>
                <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test"></InputField>
                <InputField handleChange={handleChange} value="madrir" title="Madrir" name="test"></InputField>
                <InputField handleChange={handleChange} value="boston" title="Boston" name="test"></InputField>
            </div>
        </div>
    );
};

export default Location;