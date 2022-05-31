import React from "react";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabs = ({ data }) => (
  <TabsComponent>
    <TabList>
      {data.map(({ heading,disabled,icons }, i) => (
          <Tab key={i} disabled={disabled}>{heading}
        {icons}
          </Tab>
      ))}
    </TabList>
    {data.map(({ body }, i) => (
      <TabPanel key={i}>{body}</TabPanel>
    ))}
  </TabsComponent>
);

export default Tabs;