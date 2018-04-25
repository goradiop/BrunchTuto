import $ from "jquery";
import Rx from "rxjs/Rx";
import 'bootstrap';

//var $ = require('jquery');
//var Rx = require('rxjs/Rx');

document.addEventListener("DOMContentLoaded", () => {
  // do your setup here
  console.log("Initialized app");
  console.log("Tasty Brunch, just trying to use jQuery!", $("body"));

  //document.querySelector('rxjs').innerHTML('Approuved');
  // $("#rxjs").html ('Approuved');

  //const source$  = Rx.Observable.interval(1000).take(5);
  //source$.subscribe(v => console.log('mytestyXXX   '+v));

  const posts = [
    { title: "Post One", body: "My body" },
    { title: "Post Two", body: "My body" },
    { title: "Post Three", body: "My body" }
  ];

  const postOutput = $("#posts");

  const posts$ = Rx.Observable.from(posts);

  posts$.subscribe(
    post => {
      console.log(post.title);
      $("#posts").append('<li>'+post.title+'</li>');
    },
    err => {
      console.error(err);
    },
    complete => {
      console.log("Completed");
    }
  );
});
