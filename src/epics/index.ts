
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import { pong } from '../actions';
import { PING } from '../constents/ActionTypes';

const pingEpic = (action$:ActionsObservable<Action>) => action$.pipe(
    ofType(PING),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(pong())
);

export default pingEpic;

