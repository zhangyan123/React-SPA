import React from 'react'
// import ReactDOM from 'react-dom'
import { Transition ,animated} from 'react-spring'
// import { Gesture } from 'react-with-gesture'
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import './index.less'

const defaultStyles = {
  overflow: 'hidden',
  width: '100%',
  backgroundColor: '#247BA0',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '4em'
}

export default class Animation extends React.Component {  //组件名称必须以大写字母开头
  state = { items: ['item1', 'item2', 'item3'] }
  handleClick = (event)=>{
    event.persist();
    console.log(event.target.attributes[0].value);
    let index = +event.target.attributes[0].value;
    let newarr = [...this.state.items];
    let temp = newarr.splice(index,1)[0];
    this.setState({items:newarr},()=>{
        newarr.splice(index-1,0,temp);
        this.setState({items:newarr});
    });


  }

  render() {
    return (
      <ul>
        <Transition
          native
          keys={this.state.items}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 100 }}
          leave={{ opacity: 0, height: 0 }}
          >
          {this.state.items.map((item,index) => styles => <animated.li style={{ ...defaultStyles, ...styles }}>
            <div onClick = {this.handleClick} index = {index}>
            {item}
            </div>
          </animated.li>)}
        </Transition>
      </ul>
    )
  }

 }

// const mapStateToProps = state => ({    //在此处设置本组件需要从state中取得哪些数据，这个函数允许我们将 store 中的数据作为 props 绑定到组件上
//   homeData: state.homeData
// });

// export default connect(mapStateToProps)(Animation);
