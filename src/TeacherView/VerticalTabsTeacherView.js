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
                    <Tab tabFor="vertical-tab-one">Иванов Иван Иванович</Tab>
                    <Tab tabFor="vertical-tab-two">Лебедев Семен Игоревич</Tab>
                    <Tab tabFor="vertical-tab-three">Смирнов Петр Александрович</Tab>
                    <Tab tabFor="vertical-tab-four">Иванов Иван Иванович</Tab>
                    <Tab tabFor="vertical-tab-five">Лебедев Семен Игоревич</Tab>
                    <Tab tabFor="vertical-tab-six">Смирнов Петр Александрович</Tab>
                    <Tab tabFor="vertical-tab-seven">Иванов Иван Иванович</Tab>
                    <Tab tabFor="vertical-tab-eight">Лебедев Семен Игоревич</Tab>
                    <Tab tabFor="vertical-tab-nine">Смирнов Петр Александрович</Tab>
                    <Tab tabFor="vertical-tab-ten">Иванов Иван Иванович</Tab>
                    <Tab tabFor="vertical-tab-eleven">Лебедев Семен Игоревич</Tab>
                    <Tab tabFor="vertical-tab-twelve">Смирнов Петр Александрович</Tab>
                    <Tab tabFor="vertical-tab-thirteen">Иванов Иван Иванович</Tab>
                    <Tab tabFor="vertical-tab-fourteen">Лебедев Семен Игоревич</Tab>
                    <Tab tabFor="vertical-tab-fifteen">Смирнов Петр Александрович</Tab>
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