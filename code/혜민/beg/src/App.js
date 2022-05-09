import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  var 현재상태 = 'refund';
  return (
    <>
      <div>
        <Hello name="hi" color="red" />
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

      <div>
        <Wrapper>
          <Hello name="react" color="red" />
          <Hello color="pink" />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
