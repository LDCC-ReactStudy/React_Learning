import React from 'react';
import Hello from './Hello';

function App() {
  var 현재상태 = 'refund';
  return (
    <>
      <div>
        <Hello />
      </div>
      {/* enum 실습 */}
      <div>
        {
          {
            info: <p>상품정보</p>,
            shipping: <p>배송관련</p>,
            refund: <p>환불약관</p>,
          }[현재상태]
        }
      </div>
    </>
  );
}

export default App;
