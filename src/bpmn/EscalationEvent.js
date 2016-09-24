import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class EscalationEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z',
		      height: 36,
		      width: 36,
		      heightElements: [20, 7],
		      widthElements: [8]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        xScaleFactor: 10,
        yScaleFactor: 10,
        containerWidth: this.props.width,
        containerHeight: this.props.height,
        position: {
          mx: 0.5,
          my: 0.2
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