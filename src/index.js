import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect.js/SimpleForm';
import HookApp from './HookApp';


ReactDOM.render(

  // <HookApp />,
  // <CounterApp />,

  // <CounterWithCustomHook />
  <SimpleForm />
  ,

  document.getElementById('root')
);


