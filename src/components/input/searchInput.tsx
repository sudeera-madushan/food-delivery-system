import { CiSearch } from "react-icons/ci";
function SearchInput(): JSX.Element {
    const click = (e) => {
        console.log(e.target.parentElement)
    }
    return (
        <div className="relative mx-auto  max-w-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-[var(--primary-color)] text-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <CiSearch className="w-5 h-5 text-gray-600" onClick={click}/>

            </div>
        </div>
    );
};

export default SearchInput;
