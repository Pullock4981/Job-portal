

const Banner = ({query, handleInputChange}) => {

    return (
        <div className="xl:px-24 px-4">
            <h1 className="lg:text-5xl text-2xl font-bold">Find your <span className="text-blue">new job</span> today</h1>
            <p className="text-gray-600 mb-8 mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt blanditiis asperiores libero excepturi vel?
            </p>

            <form>
                <div className="flex md:flex-row flex-col gap-4 md:gap-0">
                    <div className="w-full">
                        <input type="text" name="title" id="title" placeholder="search for job here"
                            className="border rounded-sm md:rounded-lg py-2 px-3 w-full"
                            onChange={handleInputChange}
                            value={query}
                        />
                    </div>
                    <div className="w-full">
                        <input type="text" name="title" id="title" placeholder="Location"
                            className="border rounded-sm md:rounded-lg py-2 px-3 w-full"
                            value={''}
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue px-5 py-2 text-white rounded">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Banner;