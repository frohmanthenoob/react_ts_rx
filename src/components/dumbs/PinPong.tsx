import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ping } from '../../actions';

interface IProps {
  isPing:boolean
  send:(action:Action)=>{}
}

class PingPong extends React.Component<IProps, React.ComponentState> {
  public render() {
    console.log(this.props.isPing);
    return (
      <div>
        <h1>is pinging: { this.props.isPing+"" }</h1>
        <button onClick={ this.sender }>
          Start PING
        </button>
      </div>
    );
  }

  public sender = ()=>{
    this.props.send(ping());
  }
}

function mapStateToProps(state: React.ComponentState) {
  
  return {
    isPing: state.isPinging
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    send: ping
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PingPong);
