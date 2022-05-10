import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  var 현재상태 = 'refund';
  return (
    <>
      {/* Props 실습 */}
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

      {/* Wrapper 실습 */}
      <div>
        <Wrapper>
          <Hello name="react" color="red" />
          <Hello color="pink" />
        </Wrapper>
      </div>

      {/* 조건부 렌더링 실습 */}
      <div>
        <Hello name="hi" color="red" flag={false} />
      </div>

      {/* useState 실습 */}
      <div>
        <Counter />
      </div>

      {/* input 실습 */}
      <div>
        <InputSample />
      </div>
    </>
  );
}

export default App;
