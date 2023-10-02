import Paragraph from "antd/es/typography/Paragraph";
import { format } from "date-fns";

const Films = ({ title, releaseDate }) => {
    const formatedDate = format(new Date(releaseDate), "dd/MM/yyyy");

    return (
        <>
            <Paragraph style={{ marginBottom: 0 }}>{title}</Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>{formatedDate}</Paragraph>
        </>
    );
};

export default Films;
