import React, { Component } from 'react';
import Bpmn from './BPMN';

import Draggable from 'react-draggable';

export default class Event extends Bpmn {
	constructor(props) {
		super(props);

        this.state = {
        	activeDrags: 0,
        	deltaPosition: {
          		x: this.props.x, 
          		y: this.props.y
        	},
        	controlledPosition: {
          		x: this.props.x, 
          		y: this.props.y
        	}
      	};

        this.handleDrag = this.handleDrag.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.adjustXPos = this.adjustXPos.bind(this);
        this.adjustYPos = this.adjustYPos.bind(this);
        this.onControlledDrag = this.onControlledDrag.bind(this);
        this.onControlledDragStop = this.onControlledDragStop.bind(this);      			
	}

    handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    }

    onStart() {
      this.setState({activeDrags: ++this.state.activeDrags});
    }

    onStop() {
      this.setState({activeDrags: --this.state.activeDrags});
    }

    // For controlled component
    adjustXPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    }

    adjustYPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    }

    onControlledDrag(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }

    onControlledDragStop(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }

	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      	const {deltaPosition, controlledPosition} = this.state;

		let strokeWidth = this.props.strokeWidth || 2;

	    let cx = (this.props.width / 2) + this.state.x || 0,
	        cy = (this.props.height / 2) + this.state.y || 0;

		return(

			<Draggable {...dragHandlers} >
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
			</Draggable>
		);
	}
}