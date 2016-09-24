import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import sequenceFlowEnd from './svg/sequenceflow-end.svg';
import messageFlowEnd from './svg/messageflow-end.svg';

import Event from './bpmn/Event';
import StartEvent from './bpmn/StartEvent';
import MessageEvent from './bpmn/MessageEvent';
import SignalEvent from './bpmn/SignalEvent';
import ConditionalEvent from './bpmn/ConditionalEvent';
import EscalationEvent from './bpmn/EscalationEvent';
import LinkEvent from './bpmn/LinkEvent';
import ErrorEvent from './bpmn/ErrorEvent';
import CancelEvent from './bpmn/CancelEvent';
import TimerEvent from './bpmn/TimerEvent';
import CompensateEvent from './bpmn/CompensateEvent';
import MultipleEvent from './bpmn/MultipleEvent';
import ParallelMultipleEvent from './bpmn/ParallelMultipleEvent';

import EndEvent from './bpmn/EndEvent';
import TerminateEvent from './bpmn/TerminateEvent';
import IntermediateEvent from './bpmn/IntermediateEvent';
import IntermediateCatchEvent from './bpmn/IntermediateCatchEvent';
import IntermediateThrowEvent from './bpmn/IntermediateThrowEvent';

import Gateway from './bpmn/Gateway';
import InclusiveGateway from './bpmn/InclusiveGateway';
import ExclusiveGateway from './bpmn/ExclusiveGateway';
import ComplexGateway from './bpmn/ComplexGateway';
import ParallelGateway from './bpmn/ParallelGateway';
import EventBasedGateway from './bpmn/EventBasedGateway';

import Task from './bpmn/Task';
import ServiceTask from './bpmn/ServiceTask';
import UserTask from './bpmn/UserTask';
import ManualTask from './bpmn/ManualTask';
import SendTask from './bpmn/SendTask';
import ReceiveTask from './bpmn/ReceiveTask';
import ScriptTask from './bpmn/ScriptTask';
import BusinessRuleTask from './bpmn/BusinessRuleTask';

import Activity from './bpmn/Activity';
import SubProcess from './bpmn/SubProcess';
import AdHocSubProcess from './bpmn/AdHocSubProcess';
import Transaction from './bpmn/Transaction';
import CallActivity from './bpmn/CallActivity';

import DataObject from './bpmn/DataObject';
import DataObjectReference from './bpmn/DataObjectReference';
import DataStoreReference from './bpmn/DataStoreReference';

import TextAnnotation from './bpmn/TextAnnotation';

SubProcessMarker

import ParticipantMultiplicityMarker from './bpmn/ParticipantMultiplicityMarker';
import SubProcessMarker from './bpmn/SubProcessMarker';
import ParallelMarker from './bpmn/ParallelMarker';
import SequentialMarker from './bpmn/SequentialMarker';
import CompensationMarker from './bpmn/CompensationMarker';
import LoopMarker from './bpmn/LoopMarker';
import AdhocMarker from './bpmn/AdhocMarker';

class App extends Component {

  render() {

    const TASK_BORDER_RADIUS = 10;
    const INNER_OUTER_DIST = 3;

    const LABEL_STYLE = {
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px'
    };
    
    const width = 110;
    const height = 110;

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

        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <Event width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <StartEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <MessageEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <SignalEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ConditionalEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <EscalationEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <LinkEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ErrorEvent width={30} height={30} />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <CancelEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <TimerEvent width={30} height={30} />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <CompensateEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <MultipleEvent width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ParallelMultipleEvent width={30} height={30} />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <EndEvent width={30} height={30} />
        </svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <TerminateEvent width={30} height={30} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <IntermediateEvent width={30} height={30} />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <IntermediateCatchEvent width={30} height={30} />
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <IntermediateThrowEvent width={30} height={30} />
        </svg> 



        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <Gateway width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <InclusiveGateway width={30} height={30} />
        </svg>      
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ExclusiveGateway width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ComplexGateway width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ParallelGateway width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <EventBasedGateway width={30} height={30} />
        </svg>



        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <Task width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ServiceTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <UserTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ManualTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <SendTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ReceiveTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ScriptTask width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <BusinessRuleTask width={100} height={80} />
        </svg>



        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <Activity width={100} height={80} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <SubProcess width={100} height={80} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <AdHocSubProcess width={100} height={80} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <Transaction width={100} height={80} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <CallActivity width={100} height={80} />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <DataObject width={30} height={30} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <DataObjectReference width={30} height={30} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <DataStoreReference width={30} height={30} />
        </svg>



        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <TextAnnotation width={30} height={30} />
        </svg>




        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ParticipantMultiplicityMarker width={30} height={30} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <SubProcessMarker width={30} height={30} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <ParallelMarker width={30} height={30} />
        </svg>        
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <SequentialMarker width={30} height={30} />
        </svg>       
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <CompensationMarker width={30} height={30} />
        </svg>       
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <LoopMarker width={30} height={30} />
        </svg>       
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} >
          <AdhocMarker width={30} height={30} />
        </svg>  




      </div>
    );
  }
}

export default App;
