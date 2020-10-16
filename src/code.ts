import { Observable } from "rxjs/Observable";
import { from } from "rxjs/Observable/from";
import 'rxjs/add/operator/share';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/pluck";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";





/*
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
}).share();

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

/*var observer2 = observable.subscribe(
    (x:any) => addItem(x)
);

 
setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: '+x)
    );
}, 1000);
*/

/*
var observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription = observable.subscribe(
        (x:any) => addItem(x)
    )
},2000);
*/

//var subject = new Subject()
//var subject = new BehaviorSubject('First')
//var subject = new ReplaySubject(2)
//var subject = new ReplaySubject(30, 200)
//var subject = new AsyncSubject()

/*
subject.subscribe(
    data => addItem('Observer 1: '+ data),
    //err => addItem(err),
    () => addItem('Observer 1 Completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: '+ data)
    )
    subject.complete();
}, 500);
*/

/*var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
})

var observable2 = Observable.create((observer:any) => {
    observer.next('How is it going?')
})

var newObs = merge(observable, observable2);

newObs.subscribe((x:any) => addItem(x));
*/

/*Observable.create((observer:any) => {
    observer.next('Hey guys!')
})
.map((val:any) => val.toUpperCase())
.subscribe((x:any) => addItem(x));
*/

/*from([
    { first: 'Gary', last: 'Simon', age: '34'},
    { first: 'Jane', last: 'Simon', age: '34'},
    { first: 'John', last: 'Simon', age: '34'},
])
.pluck('first')
.subscribe((x:any) => addItem(x));
*/

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hey!')
}, 3000)

var newObs = observable1.skipUntil(observable2)

newObs.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}