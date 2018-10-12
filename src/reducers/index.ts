import { Action } from 'redux';

const defaultValue = { isPinging: false };

const pingReducer = (state = defaultValue, action:Action) => {
    switch (action.type) {
      case 'PING':
        return { isPinging: true };
  
      case 'PONG':
        return { isPinging: false };
  
      default:
        return state;
    }
};

export default pingReducer;