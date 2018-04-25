import $ from 'jquery';
import Rx from 'rxjs/Rx';

//var $ = require('jquery');
//var Rx = require('rxjs/Rx');


document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  console.log('Tasty Brunch, just trying to use jQuery!', $('body'));
  
  
});

const source$  = Rx.Observable.interval(1000).take(5);

  source$.subscribe(v => console.log('mytestyXXX   '+v));
