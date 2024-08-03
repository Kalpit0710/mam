// /frontend/src/nodes/InputNode.js
import React from 'react';
import BaseNode from './BaseNode';

const InputNode = (props) => (
  <BaseNode {...props} type="Input" outputs={['output']} />
);

export default InputNode;