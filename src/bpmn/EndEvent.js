import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class EndEvent extends Bpmn {
	render() {
		
		return(

		    <g stroke='#000000' fill='#ffffff'>
		        <circle cx={15} cy={15} r={15} stroke={"#000000"} fill={"#ffffff"} style={{strokeWidth: 2}} ></circle>
		    </g>

		);
	}
}