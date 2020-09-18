import React from "react";
import { Row, Col } from "antd";
import { FolderAddTwoTone } from "@ant-design/icons";
import TableComp from "../../components/Table/TableComp";
import DetailCard from "../../components/DetailCard/DetailCard";
import ButtonComp from "../../components/Button/ButtonComp";
import "./style.css";

const dataSourceItemsArray = [];

for (let i = 0; i < 10; i++) {
	dataSourceItemsArray.push({
		key: i,
		item: `item ${i}`,
		price: 32,
		url: `http:"www.example.html"`,
	});
}

const columns = [
	{
		title: "Wish List Items",
		dataIndex: "item",
		key: "item",
		responsive: ["sm", "md", "lg"],
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
		responsive: ["sm", "md", "lg"],
	},
	{
		title: "Purchase Gift Here",
		dataIndex: "url",
		key: "url",
		responsive: ["sm", "md", "lg"],
	},
];

const ParticipantEvent = () => {
	return (
		<>
			<Row style={{ marginTop: "40px" }}>
				<Col span={4} orientation="right">
					<ButtonComp
						type="secondary"
						icon={<FolderAddTwoTone tyle={{ color: "green", fontSize: 60 }} />}
						text="Add Item"
						style={({ backgroundColor: "white" }, { border: "3px" })}
						shape="round"
					/>
				</Col>
			</Row>
			<Row gutter={40} style={{ marginTop: "30px" }}>
				<Col span={4} offset={1}>
					<DetailCard
						style={{ witdh: "400px" }}
						date="date"
						startTime="9:00 am"
					/>
				</Col>
				<Col offset={1}></Col>
				<Col flex="auto">
					<TableComp dataSource={dataSourceItemsArray} columns={columns} />
				</Col>
				<Col offset={1}></Col>
			</Row>
		</>
	);
};

export default ParticipantEvent;
