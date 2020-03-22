import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
function App() {
  return (
    <div className="App">
      {/* WingBlank：两个按钮之间的左右间隙 */}
      <WingBlank>
        <Button type="primary">primary</Button>
        {/* WhiteSpace：两个按钮之间的空隙（上下） */}
        <WhiteSpace />
        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
      </WingBlank>
    </div>
  );
}

export default App;
