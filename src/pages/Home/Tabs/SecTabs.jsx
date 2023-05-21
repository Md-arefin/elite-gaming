import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import Console from './Console';
import Games from './Games/Games';

const SecTabs = () => {

  return (
    <Tabs>
      <TabList>
        <Tab>Console</Tab>
        <Tab>Games</Tab>
        <Tab>Controller</Tab>
      </TabList>

      <TabPanel>
        <Console></Console>
      </TabPanel>
      <TabPanel>
        <Games></Games>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default SecTabs;