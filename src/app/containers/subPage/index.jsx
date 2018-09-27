
import React from "react";
import { connect } from "react-redux";
import { Breadcrumb, Row, Col, Input, Radio, Button } from "antd";
import ProcessDump from "../../components/ProcessDump"
import AuthSelect from "../../components/AuthSelect"
import PreviewModal from "../../components/PreviewModal"
import WelcomeText from "../../components/WelcomeText"
import Card from "../../components/Card"
import Keywords from "../../components/Keywords"
import Navigation from "../../components/Navigation"

import "./index.less";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export class SubPage extends React.Component {  //组件名称必须以大写字母开头
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      process: 0,
      platformTitle: "",
      authSelectValue: "",
      checkinTime: 0,
      consultPageTitle: "咨询页标题",
      recentAuthLabel: 123,
      authList: [
        {
          "id": 123,
          "advertiser_id": -2914339.973900974,
          "user_name": "编号89757",
          "clientid": "TOUTIAO_TT",
          "company_id": "1"
        },
        {
          "id": 234,
          "advertiser_id": -2914339.973900974,
          "user_name": "编号89756",
          "clientid": "TOUTIAO_TT",
          "company_id": "1"
        },
        {
          "id": 345,
          "advertiser_id": -2914339.973900974,
          "user_name": "编号89755",
          "clientid": "TOUTIAO_TT",
          "company_id": "1"
        },
        {
          "id": 456,
          "advertiser_id": -2914339.973900974,
          "user_name": "编号89754",
          "clientid": "TOUTIAO_TB",
          "company_id": "1"
        },
        {
          "id": 567,
          "advertiser_id": -2914339.973900974,
          "user_name": "编号89753",
          "clientid": "TOUTIAO_TB",
          "company_id": "1"
        }

      ]
    };
  }
  handleSelected = value => {
    console.log('收到select:', value);
    this.setState({
      authSelectValue: value
    });
  }
  handlePlatformTitle = e => {
    e.persist();
    this.setState({
      platformTitle: e.target.value
    });
  }
  handleConsultPageTitle = e => {
    e.persist();
    this.setState({
      consultPageTitle: e.target.value
    });
  }
  handleCheckInTime = e => {
    this.setState({
      checkinTime: e.target.value
    });
  }
  handleNext = e => {
    this.setState({
      process: 1
    });
  }
  render() {
    const { process } = this.state
    return (   //render里面最终要的就是一定要有return。jsx部分需要使用小括号包裹起来避免自动插入分号带来的麻烦，注意class应写成className,在DOM中直接展示js中的变量没有问题，React会帮我们做好注入检查
      <div className="sub-page">
        <Row>
          <Col span={15}>
            <Breadcrumb separator="/">
              <Breadcrumb.Item ><a href="" style={{ color: "#1890ff" }}>智能咨询</a></Breadcrumb.Item>
              <Breadcrumb.Item >{this.state.process ?  "设置自动回复":"新建智能咨询"}</Breadcrumb.Item>
            </Breadcrumb>
            <ProcessDump process={process} />
            {(!this.state.process) && (<div><div className="baseInfo">
              <h2>咨询页信息</h2>
              <h3>基础信息设置</h3>
              <span>平台内标题：<Input placeholder="请输入" onChange={this.handlePlatformTitle} /></span><br />
              <span>咨询页标题：<Input placeholder="请输入" onChange={this.handleConsultPageTitle} /></span>
              <h3>客服相关设置</h3>
              <span> 客服进线点：
                <RadioGroup defaultValue="0" size="middle" onChange={this.handleCheckInTime}>
                  <RadioButton value="0">用户发送第一条信息时</RadioButton>
                  <RadioButton value="1">用户进入咨询页面时</RadioButton>
                </RadioGroup>
              </span>
              <span> 选择客服账号：
            <span style={{ display: "inline-block", width: "80%" }}>
                  <AuthSelect recentAuthLabel={this.state.recentAuthLabel} authList={this.state.authList} onSelected={this.handleSelected} />
                  <a href="" target="_blank">新增客服授权</a>
                </span>
              </span>
            </div>
              <div className="submitGroup">
                <span>
                  <Button block href = "">取消</Button>
                </span>
                <span>
                  <Button block type="primary" onClick={this.handleNext}>下一步</Button>
                </span>
              </div></div>
            )}
            {(this.state.process)?(<div><div className="autoReply">
              <h2>咨询页自动回复</h2>
              <p>你可以在下方设置自动回复，可为客户提供自助查询服务，可减轻在线客服资源压力；<br/>
              如果你的在线客服资源充足，可直接跳过。
              </p>
              <WelcomeText/>
              <Card/>
              <Keywords/>
              <Navigation/>
            </div>
              <div className="submitGroup">
                <span>
                  <Button block href = "">取消</Button>
                </span>
                <span>
                  <Button block type="primary" onClick={this.handleNext}>确认创建</Button>
                </span>
              </div></div>

            ):null}

          </Col>
          <Col span={9}>
            <PreviewModal
              title={this.state.consultPageTitle}
            />
          </Col>
        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => ({    //在此处设置本组件需要从state中取得哪些数据，这个函数允许我们将 store 中的数据作为 props 绑定到组件上
  // homeData: state.homeData
});

export default connect(mapStateToProps)(SubPage);
