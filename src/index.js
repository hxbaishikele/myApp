import dva, { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import fetch from 'dva/fetch';
import React from 'react';
import styles from './index.less';
import request from './utils/request'

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
app.model({
  namespace: 'count',
  state:{
    record:0,
    current:0,
    msg:"haha",
  },

  reducers:{
    add(state){
      const newCurrent = state.current +1;
      return {...state,
        record:newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state){
      return {...state,current:state.current -1};
    },
    querySuccess(state,{payload}){
      return {...state,msg:JSON.stringify(payload)};
    }
  },

  effects:{
    *query({payload},{call,put}){
      const data = yield call(delay);
      yield put({type:'querySuccess',payload:data});
    },
  },



});

const CountApp = ({count,dispatch}) =>{
  return (
    <div className={styles.normal}>
      <div className={styles.record}>zuigaojilu: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.current}>{count.msg}</div>
      <div className={styles.button}>
        <button onClick={() =>{dispatch({type:'count/query'});}}>+</button>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {count : state.count};
}


const HomePage = connect(mapStateToProps)(CountApp);
// 3. Router
//const HomePage = () => <div>Hello Dva.</div>;
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');


//helpers
function delay(){
  return request('http://localhost:8080/hello');
}
