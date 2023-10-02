import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const ButtonComponent = ({
    key,
    text,
    req,
    columns,
    icon,
    count,
    fetchData,
}) => {
    const handleClick = () => {
        fetchData(req, columns, text);
    };

    return (
        <Button
            key={key}
            className="btnCard"
            size={"large"}
            onClick={handleClick}
        >
            {text}
            <div style={{ marginTop: ".5rem" }}>
                {icon}
                {!count ? (
                    <LoadingOutlined
                        style={{ fontSize: "1.3rem", marginLeft: ".5rem" }}
                    />
                ) : (
                    <Title
                        style={{ display: "inline", marginLeft: ".5rem" }}
                        level={2}
                    >
                        {count}
                    </Title>
                )}
            </div>
        </Button>
    );
};

export default ButtonComponent;
