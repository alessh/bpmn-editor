import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class BusinessRuleTaskMain extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'm {mx},{my} 0,12 20,0 0,-12 z' +
		        'm 0,8 l 20,0 ' +
		        'm -13,-4 l 0,8'
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        abspos: {
          x: 8,
          y: 8
        }
      });

		var fill = this.propsisThrowing ? 'black' : 'white';
		var stroke = this.propsisThrowing ? 'white' : 'black';

		/*var messagePath = this.drawPath(p, pathData, {
			strokeWidth: 1,
			fill: fill,
			stroke: stroke
		})*/

		return(super.render(path));
	}
}