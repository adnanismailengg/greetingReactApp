import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
let csstyle = {};

if (curDate>=1 && curDate<12)
{
  greeting = "Good Morning";
  csstyle.color = "green";
}else if (curDate>=12 && curDate<17)
{
  greeting = "Good Afternoon";
  csstyle.color = "orange";
}
else if (curDate>=17 && curDate<22)
{
  greeting = "Good Evening";
  csstyle.color = "Blue";
}else {
  greeting = "Good Night";
  csstyle.color = "black";
}
ReactDom.render(
  <>
  <div>
  <h1>Hello Sir,<span style={csstyle}> {greeting} </span></h1>
  </div>
  </>,
  document.getElementById('root')
)