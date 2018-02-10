import React from '../../node_modules/react'
import './teacher-view.css'
import TeacherTable from './TeacherTable'
import PeriodController from './PeriodController'
import ClassController from './ClassController'
import TeacherInfoComponent from './TeacherInfoComponent'

export default class TeacherView extends React.Component{

    render(){
        return(
        	<div>
	        	<div id ='top-bar' className='top-bar'>
	        	<TeacherInfoComponent/>
	        		<PeriodController setPeriod = {(newperiodid) => this.setState({periodid: newperiodid})} />
	     			<ClassController setPeriod = {(newperiodid) => this.setState({periodid: newperiodid})} />

	     		 </div>  

	            <div className='teacher-view-container'>
	                	<TeacherTable/>
	            </div>
            </div>
        );
    }

}