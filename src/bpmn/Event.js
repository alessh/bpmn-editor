import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class Event extends Bpmn {
	render() {

		let strokeWidth = this.props.strokeWidth || 2;

	    let cx = this.props.width / 2,
	        cy = this.props.height / 2;

		return(

		    <g stroke={this.props.stroke || '#000000'} fill={this.props.fill || '#ffffff'} >
		        
		        <circle 
		        	cx={cx} 
		        	cy={cy} 
		        	r={Math.round((this.props.width + this.props.height) / 4 - (this.props.offset || 0))} 
		        	stroke={this.props.stroke || '#000000'} 
		        	fill={this.props.fill || '#ffffff'} 
		        	style={{strokeWidth: this.props.strokeWidth || 2}}
		        />

		        {this.props.children}

		    </g>

		);
	}
}