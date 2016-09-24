import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class Activity extends Bpmn {
	render() {

		const TASK_BORDER_RADIUS = 10;

		var fill = 'white';
		var stroke = 'black';
		var strokeWidth = 2;

		var offset = this.props.offset || 0;
		
		return(

		    <g stroke='#000000' fill='#ffffff'>

		        <rect 
		        	x={this.props.offset || 0} 
		        	y={this.props.offset || 0} 
		        	width={this.props.width - offset * 2} 
		        	height={this.props.height - offset * 2} 
		        	rx={TASK_BORDER_RADIUS} 
		        	ry={TASK_BORDER_RADIUS} 
		        	stroke={this.props.stroke || stroke} 
		        	fill={this.props.fill || fill} 
		        	style={{strokeWidth: this.props.strokeWidth || strokeWidth}} 
		        />

		        {this.props.children}

		    </g>

		);
	}
}