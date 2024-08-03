// /frontend/src/nodes/TransformNode.js
import React from 'react';
import BaseNode from './BaseNode';

const TransformNode = (props) => (
  <BaseNode {...props} type="Transform" inputs={['input']} outputs={['output']} />
);

export default TransformNode;