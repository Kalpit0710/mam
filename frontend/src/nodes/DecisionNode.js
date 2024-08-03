// /frontend/src/nodes/DecisionNode.js
import React from 'react';
import BaseNode from './BaseNode';

const DecisionNode = (props) => (
  <BaseNode {...props} type="Decision" inputs={['input']} outputs={['true', 'false']} />
);

export default DecisionNode;
