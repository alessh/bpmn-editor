import React, { Component } from 'react';
import Bpmn from './BPMN';

import ScriptTaskMarker from './ScriptTaskMarker';

export default class ScriptTask extends Bpmn {
	render() {

		return(

		    <g stroke='#000000' fill='#ffffff'>
		        <rect x={0} y={0} width={100} height={80} rx={10} ry={10} stroke={"#000000"} fill={"#ffffff"} style={{strokeWidth: 1}} ></rect>
		        <ScriptTaskMarker />
		    </g>
		    
		);
	}
}