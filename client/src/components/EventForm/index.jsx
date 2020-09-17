import React from "react";
import { Form, Input, DatePicker, TimePicker, Button } from "antd";
import "antd/dist/antd.css";

const EventForm = () => {
  const { RangePicker } = TimePicker;
  return (
    <Form>
      <Form.Item label="Your Event Title">
        <Input placeholder="Enter Title Here"></Input>
      </Form.Item>
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Time">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Location">
        <Input placeholder="Enter address or virtual meeting link"></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
					Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
