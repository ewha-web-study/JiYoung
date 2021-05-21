/*eslint-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['어느덧 꽃은 지고','벌레를 보고 놀라','시월을 그리워하는','오월을 앓다']);
  let [하트, 하트변경] = useState(0);
  let posts = '오늘의 날씨 맑음';
  
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '어느덧 해는 지고';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      <div>
        <button onClick = {제목바꾸기}>버튼</button>
      </div>
      
      <div className = "list">
        <h3> {글제목[0]} <span onClick = { () => { 하트변경(하트+1) }} >❤</span> {하트} </h3>
        <p> 5월 21일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> {글제목[1]} </h3>
        <p> 5월 21일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> {글제목[2]} </h3>
        <p> 5월 21일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> {글제목[3]} </h3>
        <p> 5월 21일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className = "modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>  
  )
}






export default App;
