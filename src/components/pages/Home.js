import TableData from "../features/TableData";
import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";

const Home = () => {

    const tables = useSelector(getAllTables);

    return (
        <>
        <h1><strong>All tables</strong></h1>
        {tables.map((table) =>
            <TableData key={table.id}
                id={table.id}
                number={table.id}
                status={table.status} />
        )}
        </>
    );
}

export default Home;