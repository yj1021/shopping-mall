import React, { ReactElement, useState } from 'react'
import {
    FullscreenOutlined,  //全屏
    FullscreenExitOutlined, //退出全屏
    UserOutlined,
    DownOutlined
} from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Space } from 'antd';
import './index.less'

interface Props {
    
}

interface TElement extends Element {
    requestFullScreen?: () => Promise<boolean>;
    webkitRequestFullScreen?: () => Promise<boolean>;
    mozRequestFullScreen?: () => Promise<boolean>;
}

interface TDocument extends Document {
    mozCancelFullScreen: () => Promise<boolean>;
    webkitExitFullscreen: () => Promise<boolean>;
}
// type ElementType = Element extends TElement

const fontStyle = {
    color: '#333',
    fontSize: '40px',
    marginTop: '25px'
} 

export default function Header({}: Props): ReactElement {

    const [isFull, setIsFull] = useState<boolean>(false)


    const menu = (
        <Menu>
          <Menu.Item key='center'>
            个人中心
          </Menu.Item>
          <Menu.Item key='exit'>
            退出
          </Menu.Item>
        </Menu>
      );

      const setFullScreen = (status: boolean): void => {
          setIsFull(status)
          let el: TElement = document.documentElement
          if(status) {
            if(el.requestFullScreen) { 
                el.requestFullScreen(); 
               } else if(el.webkitRequestFullScreen ) { 
                 el.webkitRequestFullScreen(); 
                } else if(el.mozRequestFullScreen) { 
                el.mozRequestFullScreen(); 
               } 
          }else{
            if(document.exitFullscreen) {
                document.exitFullscreen();
             } else if((document as TDocument).mozCancelFullScreen) {
                (document as TDocument).mozCancelFullScreen();
             } else if((document as TDocument).webkitExitFullscreen) {
                (document as TDocument).webkitExitFullscreen();
             }
          }
      }

    return (
        <div className='header'>
            <img src='http://sdkadmin.ujuec.com/interface/static/img/96-96.7af9b1c.png' className='logo'/>
            <div className='operation'>
                <Space>
                    {   !isFull ? 
                        <FullscreenOutlined style={fontStyle} onClick={() => {setFullScreen(true)}}/>
                        : <FullscreenExitOutlined style={fontStyle} onClick={() => {setFullScreen(false)}}/>
                    }
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <a>
                            <Space>
                                <Avatar size={50} icon={<UserOutlined />} />
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Space>
            </div>
        </div>
    )
}
