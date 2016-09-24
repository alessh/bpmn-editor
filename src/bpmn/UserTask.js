import React, { Component } from 'react';
import Bpmn from './BPMN';

import UserTaskMarker1 from './UserTaskMarker1';
import UserTaskMarker2 from './UserTaskMarker2';
import UserTaskMarker3 from './UserTaskMarker3';

export default class UserTask extends Bpmn {
	render() {

		return(

		    <g stroke='#000000' fill='#ffffff'>
		        <rect x={0} y={0} width={100} height={80} rx={10} ry={10} stroke={"#000000"} fill={"#ffffff"} style={{strokeWidth: 2}} ></rect>
		        <UserTaskMarker1 />
		        <UserTaskMarker2 />
		        <UserTaskMarker3 />
		    </g>
		    
		);
	}
}