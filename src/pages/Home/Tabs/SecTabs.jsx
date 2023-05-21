import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import Accessory from './Accessory/Accessory';
import Console from './Console';
import Controller from './Controller/Controller';
import Games from './Games/Games';

const SecTabs = () => {

  return (
    <Tabs>
      <TabList>
        <Tab>Console</Tab>
        <Tab>Games</Tab>
        <Tab>Controller</Tab>
        <Tab>Gaming Accessory</Tab>
      </TabList>

      <TabPanel>
        <Console></Console>
      </TabPanel>
      <TabPanel>
        <Games></Games>
      </TabPanel>
      <TabPanel>
       <Controller></Controller>
      </TabPanel>
      <TabPanel>
        <Accessory></Accessory>
      </TabPanel>
    </Tabs>
  );
};

export default SecTabs;