import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

import Activity from './bpmn/Activity';
import Task from './bpmn/Task';
import ServiceTask from './bpmn/ServiceTask';
import UserTask from './bpmn/UserTask';
import ManualTask from './bpmn/ManualTask';
import SendTask from './bpmn/SendTask';
import ReceiveTask from './bpmn/ReceiveTask';
import ScriptTask from './bpmn/ScriptTask';
import BusinessRuleTask from './bpmn/BusinessRuleTask';

import Flow from './bpmn/Flow';
import SequenceFlow from './bpmn/SequenceFlow';

import Process from './bpmn/Process';
import SubProcess from './bpmn/SubProcess';
import AdHocSubProcess from './bpmn/AdHocSubProcess';
import Transaction from './bpmn/Transaction';
import CallActivity from './bpmn/CallActivity';

import DataObject from './bpmn/DataObject';
import DataObjectReference from './bpmn/DataObjectReference';
import DataStoreReference from './bpmn/DataStoreReference';

import TextAnnotation from './bpmn/TextAnnotation';

import ParticipantMultiplicityMarker from './bpmn/ParticipantMultiplicityMarker';
import SubProcessMarker from './bpmn/SubProcessMarker';
import ParallelMarker from './bpmn/ParallelMarker';
import SequentialMarker from './bpmn/SequentialMarker';
import CompensationMarker from './bpmn/CompensationMarker';
import LoopMarker from './bpmn/LoopMarker';
import AdhocMarker from './bpmn/AdhocMarker';

import Viewport from './svg/Viewport';

import myProcess from './diagram.json';

import uuid from 'node-uuid';

class App extends Component {

  shapeMap = {
    'bpmn:process': function (props) {
      return <Process {...props} key={props.key || uuid.v4()} />;
    },

    'bpmn:startEvent': function (props) {
      return <StartEvent {...props} key={props.key || uuid.v4()} />;
    },

    'bpmn:task': function (props) {
      return <Task {...props} key={props.key || uuid.v4()} />;
    },

    'bpmn:sequenceFlow': function (props) {
      return <SequenceFlow {...props} key={props.key || uuid.v4()} />;
    },

    'bpmn:endEvent': function (props) {
      return <EndEvent {...props} key={props.key || uuid.v4()} />;
    }
  }

  createElements(element) {
    return this.shapeMap[element.type](element);
  }

  render() {

    const TASK_BORDER_RADIUS = 10;
    const INNER_OUTER_DIST = 3;

    const LABEL_STYLE = {
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px'
    };
    
    const width = 1024;
    const height = 768;

    return ( 
      <Viewport width={'90%'} height={800} >
        {
          myProcess.map( (e) =>
            this.createElements(e)
          )
        }.bind(this)
      </Viewport> 
    );
    
    /*return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Viewport width={'90%'} height={800} >
          
          <Event width={36} height={36} x={250} y={250} text="Início" />  
          <StartEvent width={36} height={36} x={390} y={350} text="Início" />
          <MessageEvent width={36} height={36} x={290} y={350} text="Email" />
          <SignalEvent width={36} height={36} x={190} y={350} text="Notificação" />
          
          <Task width={100} height={80} />
          <ScriptTask width={100} height={80} />
          <SendTask width={100} height={80} />
          <ReceiveTask width={100} height={80} />
          

          {Viewport}

        </Viewport>

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
        


      /*</div>
    );*/
  }

}

export default App;
