import {
	AppstoreOutlined,
	PoweroffOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

const Sidebar = ({ data }) => {
    const styles = {
        backgroundColor: "inherit",
        border: "none",
        width: "100%",
        textAlign: "left",
        boxShadow: "none",
    };
    return (
        <Sider
            width={"25%"}
            style={{
                backgroundColor: "#03363D",
                padding: "3rem",
                minHeight: "100vh",
                height: "auto",
            }}
        >
            <img
                style={{
                    margin: "auto",
                    display: "block",
                    marginBottom: "3rem",
                    width: "auto",
                }}
                src="img/logo-tiflux.svg"
                alt="logo tiflux"
            />
            <nav>
                <ul>
                    <li>
                        <Button
                            onClick={() => data.setData(null)}
                            type="primary"
                            style={styles}
                            icon={<AppstoreOutlined />}
                        >
                            Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button
                            style={styles}
                            type="primary"
                            icon={<SettingOutlined />}
                        >
                            Ajustes
                        </Button>
                    </li>
                    <li>
                        <Button
                            danger={true}
                            style={styles}
                            icon={<PoweroffOutlined />}
                        >
                            Desconectar
                        </Button>
                    </li>
                </ul>
            </nav>
        </Sider>
    );
};
export default Sidebar;
