import React from 'react';

function Hello({ color, name, flag }) {
  return (
    //<div style={{ color: props.color }}>안녕하세요 {props.name} </div>
    <div style={{ color }}>
      {flag ? <b>*</b> : null}
      안녕 내 이름 {name}
    </div>
  );
}

export default Hello;
