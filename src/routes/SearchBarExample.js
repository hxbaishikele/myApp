import React from 'react';
import {SearchBar,Button,WhiteSpace,WingBlank} from 'antd-mobile';

class SearchBarExample extends React.Component{
  state = {
    value: '美食',
  };
  componentDidMount(){
    this.autoFocusInst.focus();
  }

  render(){
    return(
      <div>
        <WingBlank>Normal</WingBlank>
        <SearchBar placeholder="自动获取光标"></SearchBar>
      </div>
    );
  }

}

export default SearchBarExample;
