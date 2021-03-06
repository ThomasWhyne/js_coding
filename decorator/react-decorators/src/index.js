import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter, Link } from "react-router-dom";
import './index.styl';
import App from './App';
import * as serviceWorker from './serviceWorker';

const AuthExample=()=><Router>
    <div>
        <AuthButton />
    </div>
</Router>;

@withRouter
class  AuthButton extends React.Component {
    render(){
        const { history }=this.props;
        return(
            true ? <div>
                <p>welcome</p>
                <button onClick={ () => { history.push("/") } }>sing out</button>
            </div> : <div>
                    <p>You are not logged in</p>
                </div>
        );
    }
}

ReactDOM.render(<AuthExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
