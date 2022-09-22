import { Input } from "antd"
import { useDispatch } from "react-redux";
import { setFiltered } from "../slices/dataSlice";

const Searcher = () => {

    const dispatch = useDispatch();

    const onSearch = (value) => {
        console.log("Busqueda " + value);
        dispatch(setFiltered(value))
    }

    return <Input.Search placeholder="Buscar..." onSearch={onSearch} />
}

export default Searcher;