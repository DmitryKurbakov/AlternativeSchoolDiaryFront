import React from '../../node_modules/react'
import VerticalTabsTeacherView from './VerticalTabsTeacherView';
import './teacher-view.css'





export default class TeacherView extends React.Component{

    render(){
        return(

            <div className='teacher-view-container'>
                <VerticalTabsTeacherView />
            </div>
        );
    }

}