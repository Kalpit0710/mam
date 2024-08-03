// /frontend/src/App.js
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
// ... other imports

const App = () => {
  // ... your existing code

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        // ... other props
      />
      {/* ... other components */}
    </ThemeProvider>
  );
};

export default App;
