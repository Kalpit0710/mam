
// /frontend/src/nodes/SplitNode.js
import React from 'react';
import BaseNode from './BaseNode';

const SplitNode = (props) => (
  <BaseNode {...props} type="Split" inputs={['input']} outputs={['output1', 'output2']} />
);

export default SplitNode;