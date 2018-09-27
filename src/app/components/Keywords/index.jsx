import React from "react";
import { Switch, Row, Col, Input, Modal ,Button,Table} from 'antd';
import "./index.css";

export default class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      keywordsList: [],
      visible: false
    };
  }
  componentDidMount() {
  }
  onChange = checked => {
    this.setState({
      checked: checked
    });
  }
  handleSelectReply= e => {
    this.setState({
      visible: true
    })
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className='welcome' style={{ border: "1px solid #80808033", padding: "10px" }}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={18} offset={2}>
            <h3>关键词回复</h3>
            <p>用户发送关键词至平台，平台回复与之匹配信息</p>
          </Col>
          <Col span={4}>
            <Switch
              defaultChecked={false}
              onChange={this.onChange}
            />
          </Col>
        </Row>
        {this.state.checked ? (<Row>
          <Col span={22} offset={2}>
            <div className='welcome-text'>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={16}>
                  <span>关键词：</span>
                  <Input style = {{width: "50%",marginRight: "20px"}} placeholder="示例： 问题" />
                  <span style={{ color: "#1890ff", cursor: "pointer" }} onClick={this.handleSelectReply}>选择回复内容</span>
                </Col>
                <Col span={8}>
                <span style = {{display:"inline-block", width:"100%", textAlign:"center", color: "#1890ff",cursor: "pointer",borderLeft:"1px solid #80808033"}}>删除</span>
                </Col>
              </Row>
            </div>
            <span className = "addMore" style = {{color: "#1890ff",cursor: "pointer"}}>添加关键词回复（还可添加{10-this.state.keywordsList.length}个)</span>
          </Col>
        </Row>) : null}
        <Modal
          visible={this.state.visible}
          title="Title"
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

