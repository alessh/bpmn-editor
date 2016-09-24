import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class TerminateEvent extends Bpmn {
	render() {

		return(

		    <g stroke='#000000' fill='#ffffff'>
		        <circle cx={15} cy={15} r={15} stroke={"#000000"} fill={"#ffffff"} style={{strokeWidth: 4}} ></circle>
		    </g>
		    
		);
	}
}