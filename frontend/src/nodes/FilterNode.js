// /frontend/src/nodes/FilterNode.js
import React from 'react';
import BaseNode from './BaseNode';

const FilterNode = (props) => (
  <BaseNode {...props} type="Filter" inputs={['input']} outputs={['output']} />
);

export default FilterNode;