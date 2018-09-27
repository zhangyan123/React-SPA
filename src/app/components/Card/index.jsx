import React from "react";
import { Switch, Row, Col, Input } from 'antd';
import "./index.css";

const { TextArea } = Input;
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  componentDidMount() {
  }
  onChange = checked => {
    console.log('welcome:', checked);
    this.setState({
      checked: checked
    });
  }
  render() {
    return (
      <div className='welcome' style={{ border: "1px solid #80808033" ,padding: "10px"}}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={18} offset={2}>
            <h3>商家卡片</h3>
            <p>客户进入咨询页，系统自动发送商家卡片，介绍商家相关信息，并提供快捷回复入口</p>
          </Col>
          <Col span={4}>
            <Switch
              defaultChecked={false}
              onChange={this.onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={22} offset={2}>
            {this.state.checked ? (
              <div className='welcome-text'>
                <span>问候语：</span><TextArea rows={2} placeholder="实例： 你好，请问有什么可以帮你？" />
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

