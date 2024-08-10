import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortingDataFunc, searchDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-pink-300 text-gray-800 px-4 py-3">
      <div className="text-3xl">Collection de Parfums</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            id=""
          >
            <option value="asc">Croissance</option>
            <option value="desc">Décroissant</option>
          </select>
        </div>
        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-10 rounded-lg px-4 text-black"
          type="text"
          placeholder="écrire du text.."
        />
        <div
          onClick={() => dispatch(modalFunc())}
          className=" bg-purple-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer "
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
