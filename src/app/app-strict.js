import {action, autorun, observable, useStrict} from 'mobx';

useStrict(true);

class Counter {
  @observable counter = 0;

  constructor() {
    this.render = this.render.bind(this);
    autorun(this.render);
  }

  render() {
    document.getElementById('counter').innerHTML = this.counter; 
  }

  @action increase() {
    this.counter++;
  }

  @action decrease() {
    this.counter--;
  }
}

const counter = new Counter();
window.plusClick = counter.increase.bind(counter);
window.minusClick = counter.decrease.bind(counter);
