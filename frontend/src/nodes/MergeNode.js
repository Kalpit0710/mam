
// /frontend/src/nodes/MergeNode.js
import React from 'react';
import BaseNode from './BaseNode';

const MergeNode = (props) => (
  <BaseNode {...props} type="Merge" inputs={['input1', 'input2']} outputs={['output']} />
);

export default MergeNode;