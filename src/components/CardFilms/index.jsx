import { LoadingOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import Films from "./Films";

const CardFilms = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        color: "c",
        borderRadius: "4px",
        fontWeight: "600",
        backgroundColor: "#03363D0F",
        padding: "0.75rem",
        margin: " 1rem",
    };

    useEffect(() => {
        setData(null);
        setLoading(true);
        fetch("https://swapi.dev/api/films/")
            .then((resp) => resp.json())
            .then((json) => {
                setData(json.results);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Card style={{ marginBottom: "2rem" }}>
            <Title level={4}>Filmes</Title>

            {loading && (
                <LoadingOutlined
                    style={{
                        margin: "1rem",
                        display: "block",
                        fontSize: "1.5rem",
                    }}
                />
            )}
            {!data ? null : (
                <List
                    grid={{ column: 2 }}
                    dataSource={data}
                    renderItem={({ episode_id, title, release_date }) => (
                        <List.Item style={styles}>
                            <Films
                                key={episode_id}
                                title={title}
                                releaseDate={release_date}
                            />
                        </List.Item>
                    )}
                />
            )}
        </Card>
    );
};

export default CardFilms;
