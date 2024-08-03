// /frontend/src/nodes/LLMNode.js
import React from 'react';
import BaseNode from './BaseNode';

const LLMNode = (props) => (
  <BaseNode {...props} type="LLM" inputs={['input']} outputs={['output']} />
);

export default LLMNode;