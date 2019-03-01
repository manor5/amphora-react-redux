import React, {Component} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {

    constructor() {
        super();
        console.log('created app component')

        this.state = {
            appCounter: 10
        }
    }

    resetCounter = () => {
        this.setState({
            appCounter: 0
        })
    }

    // keyword
    // callback function
    // who call, react framework
    // create and return virtual dom
    render() {
        console.log('App render');
        return (
        <div>
            {/* comment */}
            {/* parent child composition
                App is parent
                header, footer are children
            
            */}

           <Header title="Shopping Cart" />

            <button onClick={this.resetCounter}>
            Reset
            </button>

           <Home startValue={this.state.appCounter} />

           <Footer year={2019}
                   company="Shopping app"
                   address = { {city: 'Hyd', state: 'TS'} }
                   countries = { ['IN', 'USA'] }
           /> 
        </div>
        )
    }
}

export default App;