import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import sequenceFlowEnd from './svg/sequenceflow-end.svg';
import messageFlowEnd from './svg/messageflow-end.svg';

import MessageEvent from './bpmn/MessageEvent';
import SignalEvent from './bpmn/SignalEvent';
import ConditionalEvent from './bpmn/ConditionalEvent';
import EscalationEvent from './bpmn/EscalationEvent';
import LinkEvent from './bpmn/LinkEvent';
import ErrorEvent from './bpmn/ErrorEvent';
import EndEvent from './bpmn/EndEvent';
import IntermediateEvent from './bpmn/IntermediateEvent';

import Task from './bpmn/Task';
import ServiceTask from './bpmn/ServiceTask';
import UserTask from './bpmn/UserTask';
import ManualTask from './bpmn/ManualTask';
import SendTask from './bpmn/SendTask';
import ReceiveTask from './bpmn/ReceiveTask';
import ScriptTask from './bpmn/ScriptTask';
import BusinessRuleTask from './bpmn/BusinessRuleTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          {/*<svg>
            <circle cx={50} cy={50} r={10} fill="red" />
          </svg>*/}

          {/*
          <MessageEvent width={5} height={5} />
          <SignalEvent width={5} height={5} />
          <ConditionalEvent width={5} height={5} />
          <EscalationEvent width={5} height={5} />
          <LinkEvent width={5} height={5} />
          <ErrorEvent width={5} height={5} />
          */}

          

          {/*<svg
            xmlns="http://www.w3.org/svg/2000"
            viewBox={viewBox}
            width={size}
            height={size}
            fill={fill}>
            <path d={pathData} />
            {guidelines}
          </svg>*/}
          
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <Task width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <ServiceTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <UserTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <ManualTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <SendTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <ReceiveTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <ScriptTask width={10} height={10} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width * 10} height={this.props.height * 10} >
          <BusinessRuleTask width={10} height={10} />
        </svg>

      </div>
    );
  }
}

export default App;
