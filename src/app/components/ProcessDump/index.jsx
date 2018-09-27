import React from "react";
import "./index.css";

export default class ProcessDump extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       process:0
    };
  }
  componentDidMount() {
   this.setState({process:this.props.process})
  }

  render() {
    return (
    <div className = 'process'>
      <span className = {this.props.process?'step1':'done'}>完善咨询页信息</span>
      <span>{''+'>'+''}</span>
      <span className = {this.props.process?'undo':'step2'}>设置自动回复</span>
    </div>
    );
  }
}

