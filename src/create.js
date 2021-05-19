import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */

    const hello = new Observable(function(observer) {
        observer.next('Hello');
        setTimeout(() => {observer.next('World');observer.complete();}, 2000);
    });

    const observer = {
        next: evt => displayLog(evt),
        error: err => console.err('[ERR] - ', err),
        complete: () => displayLog('[DONE]')
    };

    const subscribe = hello.subscribe(evt => displayLog(evt));
    const subscribe2 = hello.subscribe(evt => displayLog(evt));
    subscribe.unsubscribe();

    /** end coding */
}