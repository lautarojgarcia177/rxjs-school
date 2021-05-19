import { from } from 'rxjs';
import { displayLog } from './utils';

export default () => {
    /** start coding */
    const myArray = [1,2,3,4,5];
    const myString = 'Hello World';
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('Hello World')
    }), 2000);

    const observable = from(myPromise);
    const subscription = observable.subscribe(val => displayLog(val));

    /** end coding */
}