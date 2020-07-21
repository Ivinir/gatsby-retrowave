import React from 'react';

import App from '../../containers/App';
import TaskBar from '../../components/TaskBar/TaskBar';
import Desktop from '../../components/Desktop/Desktop';
import BackgroundSection from '../../components/BackgroundSection/BackgroundSection';

const IndexPage = () => {

  return (
    <App>
      <Desktop />
      <TaskBar />
      <BackgroundSection className="background" />

    </App>
  );
}

export default IndexPage;
