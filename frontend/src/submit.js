// /frontend/src/submit.js
import React from 'react';
import { useStoreState } from 'react-flow-renderer';
import axios from 'axios';
import styled from 'styled-components';

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${props => props.theme.colors.info};
  }
`;

const Submit = () => {
  const nodes = useStoreState((store) => store.nodes);
  const edges = useStoreState((store) => store.edges);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/pipelines/parse', { nodes, edges });
      const { num_nodes, num_edges, is_dag } = response.data;
      alert(`Pipeline Analysis:
        Number of Nodes: ${num_nodes}
        Number of Edges: ${num_edges}
        Is DAG: ${is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('An error occurred while submitting the pipeline.');
    }
  };

  return <SubmitButton onClick={handleSubmit}>Submit Pipeline</SubmitButton>;
};

export default Submit;
