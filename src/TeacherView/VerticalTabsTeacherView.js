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
                    <Tab tabFor="vertical-tab-one">21.10.2017</Tab>
                    <Tab tabFor="vertical-tab-two">22.10.2017</Tab>
                    <Tab tabFor="vertical-tab-three">23.10.2017</Tab>
                    <Tab tabFor="vertical-tab-four">24.10.2017</Tab>
                    <Tab tabFor="vertical-tab-five">25.10.2017ч</Tab>
                    <Tab tabFor="vertical-tab-six">26.10.2017</Tab>
                    <Tab tabFor="vertical-tab-seven">27.10.2017</Tab>
                    <Tab tabFor="vertical-tab-eight">28.10.2017</Tab>
                    <Tab tabFor="vertical-tab-nine">29.10.2017</Tab>
                    <Tab tabFor="vertical-tab-ten">30.10.2017</Tab>
                    <Tab tabFor="vertical-tab-eleven">01.11.2017</Tab>
                    <Tab tabFor="vertical-tab-twelve">02.11.2017</Tab>
                    <Tab tabFor="vertical-tab-thirteen">03.11.2017</Tab>
                    <Tab tabFor="vertical-tab-fourteen">04.11.2017</Tab>
                    <Tab tabFor="vertical-tab-fifteen">05.11.2017</Tab>
                </TabList>

                <div className='tab-panel-container'>
                    <TabPanel tabId="vertical-tab-one">
                        <TeacherTable/>
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
                        <TeacherTable/>
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-three">
                        <TeacherTable/>
                    </TabPanel>

                </div>

            </Tabs>

        );
    }
}