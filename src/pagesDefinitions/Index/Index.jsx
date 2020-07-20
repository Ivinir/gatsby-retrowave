import React from 'react';

import App from '../../containers/App';
import TestComponent from '../../components/TestComponent/TestComponent';
import TaskBar from '../../components/TaskBar/TaskBar';

const IndexPage = () => (
  <App>
    <TestComponent />
    <TaskBar />
  </App>
);

export default IndexPage;
