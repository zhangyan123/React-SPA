
import React from "react";
import { connect } from "react-redux";
import { Input, Table, Row, Col} from "antd";
import Keywords from "../../components/Keywords"

import "./index.less";

export class SubPage extends React.Component {  //组件名称必须以大写字母开头
  constructor(props) {
    super(props);
    this.state ={

    };
  }
  
  render() {
    return (  
    <div className="sub-page">
        <Row>
          <Col span={15}>
           <Keywords/>
          </Col>
          <Col span={9}>
           
          </Col>
        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => ({      
  // homeData: state.homeData
});

export default connect(mapStateToProps)(SubPage);
