import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class BusinessRuleTaskHeader extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'm {mx},{my} 0,4 20,0 0,-4 z'
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