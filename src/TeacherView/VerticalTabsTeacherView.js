import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs/es';
import 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import TeacherTable from './TeacherTable';

export default class VerticalTabsTeacherView extends Component {
    render() {
        return (
            <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList>
                    <Tab tabFor="vertical-tab-one">Tab 1</Tab>
                    <Tab tabFor="vertical-tab-two">Tab 2</Tab>
                    <Tab tabFor="vertical-tab-three">Tab 3</Tab>
                </TabList>
                <TabPanel tabId="vertical-tab-one">
                    <p><TeacherTable /></p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                    <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                    <p>Tab 3 content</p>
                </TabPanel>
            </Tabs>
        );
    }
}