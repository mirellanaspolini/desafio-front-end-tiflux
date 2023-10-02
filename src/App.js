import {
    BellOutlined,
    LoadingOutlined,
    RocketOutlined,
    SearchOutlined,
    StarOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Card, Input, Layout, Table } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import CardFilms from "./components/CardFilms";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";

function App() {
    const [data, setData] = useState(null);
    const [column, setColumn] = useState([]);
    const formatDate = (date) => format(new Date(date), "dd/MM/yyyy HH:mm:ss");
    const [buttons, setButtons] = useState([
        {
            id: 1,
            text: "Pessoas",
            req: "people",
            columns: [
                {
                    title: "Nome",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "Altura",
                    dataIndex: "height",
                    key: "height",
                },
                {
                    title: "Ano de Nascimento",
                    dataIndex: "birth_year",
                    key: "birth_year",
                },
                {
                    title: "Criado em",
                    dataIndex: "created",
                    key: "created",
                    render: formatDate,
                },
                {
                    title: "Editado em",
                    dataIndex: "edited",
                    key: "edited",
                    render: formatDate,
                },
            ],
            icon: <TeamOutlined style={{ color: "#EA580C" }} />,
            count: 0,
        },
        {
            id: 2,
            text: "Planetas",
            req: "planets",
            columns: [
                {
                    title: "Nome",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "População",
                    dataIndex: "population",
                    key: "population",
                },
                {
                    title: "Clima",
                    dataIndex: "climate",
                    key: "climate",
                },
                {
                    title: "Criado em",
                    dataIndex: "created",
                    key: "created",
                    render: formatDate,
                },
                {
                    title: "Editado em",
                    dataIndex: "edited",
                    key: "edited",
                    render: formatDate,
                },
            ],
            icon: (
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M33.987 8.02128C33.1243 6.53514 30.8424 5.14198 24.9417 6.69374C22.9722 5.33469 20.6685 4.54028 18.28 4.39651C15.8914 4.25273 13.5091 4.76507 11.3908 5.87806C9.27257 6.99105 7.49912 8.66228 6.26249 10.7108C5.02586 12.7593 4.37316 15.1071 4.37505 17.5C4.37505 17.8281 4.3869 18.1535 4.4106 18.4762C0.0766131 22.8129 0.150442 25.4844 1.01724 26.9787C1.83208 28.3842 3.45904 28.9844 5.56177 28.9844C6.90025 28.9844 8.43286 28.741 10.0667 28.3131C12.0365 29.6702 14.34 30.4628 16.7279 30.6051C19.1158 30.7474 21.4971 30.234 23.6142 29.1205C25.7313 28.007 27.5036 26.3357 28.7394 24.2875C29.9751 22.2392 30.6272 19.8921 30.625 17.5C30.625 17.1705 30.6127 16.8451 30.5881 16.5211C32.5446 14.5551 33.8502 12.6642 34.2795 11.0523C34.6651 9.62772 34.3329 8.61327 33.987 8.02128ZM17.5001 7.65624C19.7297 7.65925 21.8924 8.41794 23.6353 9.80846C25.3782 11.199 26.5982 13.1392 27.0963 15.3125C25.1563 17.0529 22.5586 18.9478 19.4032 20.7621C16.4309 22.4697 13.4491 23.8191 10.7776 24.6791C9.33896 23.3295 8.33899 21.5787 7.90736 19.6539C7.47572 17.7291 7.63233 15.719 8.35688 13.8843C9.08142 12.0496 10.3405 10.4749 11.9708 9.36437C13.6011 8.25384 15.5274 7.65874 17.5001 7.65624ZM3.85415 25.3326C3.77075 25.1863 3.83091 24.2088 5.31294 22.3644C5.77327 23.5136 6.39423 24.5916 7.15728 25.5664C4.80161 25.9232 3.94439 25.4857 3.85415 25.3326ZM17.5001 27.3437C16.4519 27.3439 15.4106 27.1759 14.4157 26.8461C16.6937 25.9188 18.9055 24.8367 21.0356 23.6072C23.1577 22.397 25.1938 21.0416 27.1292 19.5508C26.6566 21.7547 25.4432 23.7301 23.6911 25.1481C21.9391 26.5661 19.754 27.341 17.5001 27.3437ZM31.1131 10.206C30.9381 10.8596 30.4555 11.6922 29.6926 12.6396C29.2323 11.489 28.6108 10.4095 27.8469 9.43358C30.0112 9.10956 31.0147 9.43358 31.1487 9.66737C31.1719 9.70702 31.2006 9.88202 31.1131 10.206Z"
                        fill="#6366F1"
                    />
                </svg>
            ),
            count: 0,
        },
        {
            id: 3,
            text: "Espécies",
            req: "species",
            columns: [
                {
                    title: "Nome",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "Classificação",
                    dataIndex: "classification",
                    key: "classification",
                },
                {
                    title: "Designação",
                    dataIndex: "designation",
                    key: "designation",
                },
                {
                    title: "Criado em",
                    dataIndex: "created",
                    key: "created",
                    render: formatDate,
                },
                {
                    title: "Editado em",
                    dataIndex: "edited",
                    key: "edited",
                    render: formatDate,
                },
            ],
            icon: <StarOutlined style={{ color: "#EAB308" }} />,
            count: 0,
        },
        {
            id: 4,
            text: "Naves",
            req: "starships",
            columns: [
                {
                    title: "Nome",
                    dataIndex: "name",
                    key: "name",
                },
                {
                    title: "Modelo",
                    dataIndex: "model",
                    key: "model",
                },
                {
                    title: "Fabricante",
                    dataIndex: "manufacturer",
                    key: "manufacturer",
                },
                {
                    title: "Velocidade",
                    dataIndex: "max_atmosphering_speed",
                    key: "max_atmosphering_speed",
                },
                {
                    title: "Valor em créditos",
                    dataIndex: "cost_in_credits",
                    key: "cost_in_credits",
                },
            ],
            icon: <RocketOutlined style={{ color: "#0CC4B6" }} />,
            count: 0,
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [currentTable, setCurrentTable] = useState("");
    const [searchText, setSearchText] = useState("");
    const loadingStyles = {
        display: "block",
        margin: "3rem auto",
        width: "30px",
        height: "30px",
        fontSize: "1.5rem",
    };

    useEffect(() => {
        for (let i = 0; i < buttons.length; i++) {
            setLoading(true);
            fetch(`https://swapi.dev/api/${buttons[i].req}`)
                .then((response) => response.json())
                .then((json) => {
                    const updatedButtons = [...buttons];
                    updatedButtons[i].count = json.count;
                    setButtons(updatedButtons);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, []);

    const fetchData = (req, columns, text) => {
        setData(null);
        setLoading(true);
        fetch(`https://swapi.dev/api/${req}/`)
            .then((response) => response.json())
            .then((json) => {
                setData(json.results);
                setColumn(columns);
                setCurrentTable([text, req]);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    const handleSearch = () => {
        fetch(`https://swapi.dev/api/${currentTable[1]}/?search=${searchText}`)
            .then((response) => response.json())
            .then((json) => setData(json.results))
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sidebar data={{ data, setData }} />
            <Layout>
                <main style={{ padding: "3rem" }}>
                    <Header>
                        <Title level={3}>Olá, User</Title>
                        <div className="menuUser">
                            <SearchOutlined />
                            <BellOutlined />
                            <div>
                                <img src="/img/icon-user.svg" alt="" />
                                <Paragraph style={{ margin: 0 }}>
                                    User
                                </Paragraph>
                            </div>
                        </div>
                    </Header>

                    <CardFilms />

                    <div className="btnCard-Wrapper">
                        {buttons.map((button) => (
                            <ButtonComponent
                                {...button}
                                fetchData={fetchData}
                            />
                        ))}
                    </div>

                    {loading && !data ? (
                        <LoadingOutlined style={loadingStyles} />
                    ) : !data ? null : (
                        <Card>
                            <Header>
                                <Title level={5}>{currentTable[0]}</Title>
                                <Input.Search
                                    style={{ width: "30%" }}
                                    value={searchText}
                                    onChange={({ target }) =>
                                        setSearchText(target.value)
                                    }
                                    onSearch={handleSearch}
                                />
                            </Header>
                            <Table
                                style={{ overflowX: "scroll" }}
                                dataSource={data}
                                columns={column}
                            />
                        </Card>
                    )}
                </main>
            </Layout>
        </Layout>
    );
}

export default App;
