import { format } from "date-fns";

const Films = ({title, releaseDate}) => {
    const formatedDate = format(new Date(releaseDate), "dd/MM/yyyy") 
    return ( 
        <li style={{display: "flex", justifyContent: "space-between", color: "c", borderRadius: "4px", fontWeight: "600", backgroundColor: "#03363D0F", padding: "0.75rem", margin: "0 1rem"}}>
            <p>{title}</p>
            <p>{formatedDate}</p>
        </li>
    )
};

export default Films;