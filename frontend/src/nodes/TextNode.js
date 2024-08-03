// /frontend/src/nodes/TextNode.js
import React, { useState, useEffect } from 'react';
import { Handle } from 'react-flow-renderer';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.secondary};
  min-width: 150px;
  max-width: 300px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: vertical;
`;

const TextNode = ({ data }) => {
  const [text, setText] = useState(data.text || '');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const matches = text.match(/{{(\s*[\w]+\s*)}}/g) || [];
    const vars = matches.map(match => match.replace(/[{}]/g, '').trim());
    setVariables(vars);
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
    data.text = event.target.value;
  };

  return (
    <NodeWrapper style={{ width: `${Math.min(300, Math.max(150, text.length * 5))}px` }}>
      <div>Text Node</div>
      <TextArea value={text} onChange={handleTextChange} />
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position="left"
          id={`var-${index}`}
          style={{ top: `${20 + (index * 10)}%` }}
        />
      ))}
      <Handle type="source" position="right" id="output" />
    </NodeWrapper>
  );
};

export default TextNode;
