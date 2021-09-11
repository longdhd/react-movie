import React from 'react';
import { Tabs, Radio, Space } from 'antd';
import { useState } from 'react';

const { TabPane } = Tabs;

export default function HomeMenu() {
    
    const [state,setState] = useState({
        tabPosition: 'left',
      });
    
    const { tabPosition } = state;

    return (
        <>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://tenpack.com.vn/wp-content/uploads/2016/02/BHD-cineplex-logo.png"></img>} key="1">
            <Tabs tabPosition={tabPosition} className="text-white">
                <TabPane tab={<p>BHD Star - Bitexco</p>} key="4"></TabPane>
                <TabPane tab={<p>BHD Star - Vincom Thảo Điền</p>} key="5"></TabPane>
                <TabPane tab={<p>BHD Star - Vincom 3/2</p>} key="6"></TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://cinestar.com.vn/pictures/400x400.png"></img>} key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab={<img className="rounded" style={{height:'50px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/2048px-Lotte_%22Value_Line%22_logo.svg.png"></img>} key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </>
    )
}
