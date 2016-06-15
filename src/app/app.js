import {autorun, observable}  from 'mobx';

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
