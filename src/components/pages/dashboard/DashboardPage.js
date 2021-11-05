import React from 'react';
import { useState } from 'react';
import { Tabs, Footer, List } from '../../shared';
import UsersPane from './UsersPane';

const tabs = [
    {
        name: 'News Item 1',
        contents: 'All regulation filings have been completed!'
    },
    {
        name: 'News Item 2',
        contents: 'New dodd-frank regulations might be added under the trump administration.'
    },
    {
        name: 'News Item 3',
        contents: 'To all employees; there is beer in the kitchen!'
    }
]

const DashboardPage = () => {

    const [ tab, setTab ] = useState(0);
    const [ pane, setPane ] = useState(0);
    return (
        <div>
            <h2>News Items</h2>
            <div className="dashboard-pane">
                <Tabs tabs={tabs.map(t => t.name)} selected={tab} setTab={setTab} setPane={setPane}>
                    { tabs.map((t, i) => 
                        <Tabs.Pane selected={i === pane} key={`tab-${i}`}>
                            All regulation filings have been completed!
                        </Tabs.Pane>
                    )}
                </Tabs>
            </div>
            
            <h2>Latest Signups</h2>
            <UsersPane />
            
            <h2>Updated Regulations</h2>
            <div className="dashboard-pane">
                <List items={['12441', '49921', '30902']} />
            </div>

            <Footer />
        </div>
    );
};

export default DashboardPage;