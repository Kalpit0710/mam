// /frontend/src/nodes/BaseNode.js
import React from 'react';
import { Handle } from 'react-flow-renderer';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.color || '#fff'};
  border: 1px solid #ddd;
`;

const BaseNode = ({ data, type, inputs = [], outputs = [] }) => {
  return (
    <NodeWrapper color={data.color}>
      <div>{type} Node</div>
      <div>{data.label}</div>
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position="left"
          id={`input-${index}`}
          style={{ top: `${25 + (index * 10)}%` }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position="right"
          id={`output-${index}`}
          style={{ top: `${25 + (index * 10)}%` }}
        />
      ))}
    </NodeWrapper>
  );
};

export default BaseNode;
