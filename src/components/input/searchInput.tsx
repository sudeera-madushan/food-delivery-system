import { CiSearch } from "react-icons/ci";
function SearchInput(): JSX.Element {
    const click = (e) => {
        console.log(e.target.parentElement)
    }
    return (
        <div className="relative mx-auto  max-w-md w-[25vw] max-[856px]:w-[40vw]
          max-[986px]:pt-1 ">
            <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-[var(--primary-color)] text-blue-500
                max-[986px]:h-9 max-[986px]:text-[13px] "
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 max-[986px]:pl-3">
                <CiSearch className="w-5 h-5 text-gray-600 cursor-pointer max-[986px]:mb-1 max-[986px]:mt-2" onClick={click}/>

            </div>
        </div>
    );
};

export default SearchInput;
