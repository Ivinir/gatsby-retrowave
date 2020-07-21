import React from 'react';

import App from '../../containers/App';
import TaskBar from '../../components/TaskBar/TaskBar';
import Desktop from '../../components/Desktop/Desktop';

const IndexPage = () => {

  return (
    <App>
      <Desktop />
      <TaskBar />
    </App>
  );
}

export default IndexPage;
