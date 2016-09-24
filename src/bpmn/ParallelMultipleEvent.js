import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class ParallelMultipleEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d:'m {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' +
		        '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
		      height: 36,
		      width:  36,
		      heightElements: [2.56228, 7.68683],
		      widthElements: [2.56228, 7.68683]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        xScaleFactor: 10.2,
        yScaleFactor: 10.2,
        containerWidth: this.props.width,
        containerHeight: this.props.height,
        position: {
          mx: 0.458,
          my: 0.194
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