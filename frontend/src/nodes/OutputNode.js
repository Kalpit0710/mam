// /frontend/src/nodes/OutputNode.js
import React from 'react';
import BaseNode from './BaseNode';

const OutputNode = (props) => (
  <BaseNode {...props} type="Output" inputs={['input']} />
);

export default OutputNode;