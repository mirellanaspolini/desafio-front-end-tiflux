import { AppstoreOutlined, PoweroffOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const Sidebar = ({data}) => {
	return (
		<aside
			style={{
				backgroundColor: "#03363D",
				padding: "3rem",
				minHeight: "100vh",
				height: "100%",
			}}
		>
			<img style={{margin: "auto", display: "block", marginBottom: "3rem", width: 'auto'}} src="img/logo-tiflux.svg" alt="logo tiflux" />
			<nav>
				<ul>
					<li>
						<Button 
							onClick={() => data.setData(null)}
							style={{backgroundColor: "inherit", color: "white", border: "none", width: "100%", textAlign: "left" }}
							icon={<AppstoreOutlined />}>
								Dashboard
						</Button>
					</li>
					<li>
						<Button 
							style={{backgroundColor: "inherit", color: "white", border: "none", width: "100%", textAlign: "left" }}
							icon={<SettingOutlined />}>
								Ajustes
						</Button>
					</li>
					<li>
						<Button 
							danger={true}
							style={{backgroundColor: "inherit", border: "none", width: "100%", textAlign: "left" }}
							icon={<PoweroffOutlined />}>
								Desconectar
						</Button>
					</li>
				</ul>
			</nav>

		</aside>
	);
};
export default Sidebar;
