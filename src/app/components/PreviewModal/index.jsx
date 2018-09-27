import React from "react";
import { Input, Button } from "antd";
import "./index.less";

export default class PreviewModal extends React.Component {
  constructor(props) {
    super(props);
  
  }


  render() {
    return (
      <div className="preview">
        <div className="previewHeader">
         {this.props.title}
         </div>
        <div className="previewContent">

        </div>
        <div className="previewBottom">
          <Input disabled={true} placeholder="请输入咨询内容" />
          <Button disabled = {true} type="primary">发送</Button>
        </div>
      </div>
    );
  }
}

