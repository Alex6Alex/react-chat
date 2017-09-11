import React from 'react'

import SideBar from '../LeftBar/SideBar'
import InfoBar from '../RightBar/InfoBar'
import PageContainer from '../Content/PageContainer'

export default class Wrapper extends React.Component {
    render() {
        return(
            <div className='wrapper'>
                <SideBar/>
                <PageContainer/>
                <InfoBar />
            </div>
        )
    }
}