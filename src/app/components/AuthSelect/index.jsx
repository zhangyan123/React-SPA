import React from "react";
import { Select } from 'antd';
import "./index.css";

const { Option, OptGroup } = Select;
const clientTypeMap = {
  "TOUTIAO_TB": "通宝客服",
  "TOUTIAO_KF53": "53客服",
  "TOUTIAO_TT": "小6客服",
  "TOUTIAO_KST": "快商通客服",
  "TOUTIAO_MQ": "美洽客服"
}
export default class AuthSelect extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChange = value => {
    this.props.onSelected(value);
  }

  render() {
    const { recentAuthLabel, authList } = this.props;
    return (
      recentAuthLabel ?
        <Select
          defaultValue={recentAuthLabel}
          onChange={this.handleChange}
        >
          {
            authList
              .reduce((last, curr) => {
                let len = last.length;
                if (len < 1) {
                  last.push({ clientid: curr.clientid, data: [curr] });
                  return last;
                }
                (!last[len - 1].clientid) && (last[len - 1].clientid = curr.clientid);
                if (last[len - 1].clientid !== curr.clientid) {
                  last.push({ clientid: curr.clientid, data: [curr] })
                } else {
                  last[len - 1].data.push(curr);
                }
                return last;
              }, []).map(authlist =>
                (
                  <OptGroup label={clientTypeMap[authlist.clientid]+'('+authlist.data.length+")"} key = {authlist.clientid}>
                    {
                      authlist.data.map(auth => (
                        <Option value={auth.id} key={auth.id}>{auth.user_name}</Option>
                      )
                      )
                    }
                  </OptGroup>
                )
              )

          }
        </Select> :
        <Select
          placeholder="请选择授权账号"
          onChange={this.handleChange}
        >
          {authList
            .reduce((last, curr) => {
              let len = last.length;
              if (len < 1) {
                last.push({ clientid: curr.clientid, data: [curr] });
                return last;
              }
              (!last[len - 1].clientid) && (last[len - 1].clientid = curr.clientid);
              if (last[len - 1].clientid !== curr.clientid) {
                last.push({ clientid: curr.clientid, data: [curr] })
              } else {
                last[len - 1].data.push(curr);
              }
              return last;
            }, []).map(authlist =>
              (
                <OptGroup label={clientTypeMap[authlist.clientid]+'('+authlist.data.length+")"} key = {authlist.clientid}>
                  {
                    authlist.data.map(auth => (
                      <Option value={auth.id} key={auth.id}>{auth.user_name}</Option>
                    )
                    )
                  }
                </OptGroup>
              )
            )
          }
        </Select>

    );
  }
}

