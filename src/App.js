import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' : '송호성',
  'birthday' : '19700514',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '19800114',
  'gender' : '여자',
  'job' : '프로그래머'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name' : '임영선',
  'birthday' : '20000504',
  'gender' : '여자',
  'job' : '무직'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job} /> )})
      }
      </div>
    );
  }
}



export default App;
