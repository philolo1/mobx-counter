import {action, autorun, observable, useStrict} from 'mobx';

let CounterStore = observable({
  counter: 0,
});

const render = () => {
  document.getElementById('counter').innerHTML = CounterStore.counter;
};

autorun(render);

window.plusClick = () => {
  CounterStore.counter++;
};

window.minusClick = () => {
  CounterStore.counter--;
};
