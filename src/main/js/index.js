import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto';
import './styles.less';

function Application() {
  return (
    <div>{'Heracles'}</div>
);
}

render(<Application />, document.getElementById('root'));
