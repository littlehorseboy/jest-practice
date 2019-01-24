import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel.jsx';

it('確定組件 textContent 以及 checkbox click 觸發 change 之後的 textContent', () => {
  const checkbox = TestUtils.renderIntoDocument(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  const checkboxNode = ReactDOM.findDOMNode(checkbox);

  expect(checkboxNode.textContent).toEqual('Off');

  TestUtils.Simulate.change(
    TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'),
  );

  expect(checkboxNode.textContent).toEqual('On');
});
