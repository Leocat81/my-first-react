// import React, { Component } from 'react';
// class HomeIndex extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 'test' );
//     }
// }
 
// export default HomeIndex;

import React, { useState } from 'react';

export default function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(100);

  return (
    <div>
      <p>You clicked {count} times</p>
      <input type="text" onChange={e=>setCount(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}