import React, { Component } from 'react';

function decrementStateFunc(state, props) {
    // return new state
    return {
        counter: state.counter - 1
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log('Counter constructor', this.props.startValue)

        // react keyword
        // owned by component instance
        // state is destroyed when component destroyed
        // state can be mutated
        this.state = {
            counter: this.props.startValue
        }
    }

    incrementWithCrash(event) {
        console.log('incrementWithCrash called', event)
                // BAD, mutating state directly
        // 'this' keyword is undefined, called by react
        this.state.counter += 1;
    }

    incrementWithES6() {
        console.log('incrementWithES6 called')
        // BAD, mutating state directly
        this.state.counter += 1;
        console.log('counter is ',  this.state.counter)
        // BAD, try to avoid
        // react key word method, 
        // trigger react to call render method
        this.forceUpdate(); 
    }

    // ES.NEXT
    // solve this with lexical scope
    // create function per comp instance
    // recommended approach
    increment = () => {
        console.log('increment called')
        // BAD, mutating state directly
        this.state.counter += 1;
        console.log('counter is ',  this.state.counter)
        // BAD, try to avoid
        // react key word method, 
        // trigger react to call render method
        this.forceUpdate(); 
    }

    decrement = () => {
        console.log('before counter is ',  this.state.counter)

        // Good, immutable
        // accept new state,
        // batches of state
        // merge the state
        // calls the render method
        // async
        this.setState({
            counter: this.state.counter - 1
        })

        // this.state.counter use here produce bugs

        console.log('after counter is ',  this.state.counter)
    }

    decrementAndCallback = () => {
        console.log('decrementAndCallback before counter is ',  this.state.counter)

        // Good, immutable
        // accept new state,
        // batches of state
        // merge the state
        // calls the render method
        // async
        // accept callback, callback is called after render
        this.setState({
            counter: this.state.counter - 1
        }, () => {
            console.log('decrementAndCallback setState callback', this.state.counter);
        })

        // this.state.counter use here produce bugs

        console.log('decrementAndCallback after counter is ',  this.state.counter)
    }


    // setState With functional part

    decrementWithFunctionalSetState = () => {
        console.log('decrementWithFunctionalSetState before counter is ',  this.state.counter)

        
        // Good, immutable
        // accept new state,
        // batches of state
        // merge the state
        // calls the render method
        // async
        // setState with functional pattern
        this.setState(decrementStateFunc)

        // this.state.counter use here produce bugs

        console.log('decrementWithFunctionalSetState after counter is ',  this.state.counter)
    }

    parentClick = (e) => {
        console.log('parent click', e);
    }


    childClick = (e) => {
        console.trace();
        e.stopPropagation();
        console.log('childClick click', e);
    }

    incrementBy = (n) => {
        // es6 functional state
        this.setState( (state, props) => {
            return {
                counter: state.counter + n
            }
        })
    }

    incrementBy2 = (e) => {
        this.incrementBy(2);
    }

    // called very first time, creation life method
    // whenever call to this.setState on update cycle
    // whenever call to this.forceUpdate on update cycle
    // whenever parent component rendered on update cycle
    // we can prevent render on update cycle when setState used
    render() {
        console.log('Counter render', this.props, 'state', this.state)

        return (
            <div>
                <h4>Counter</h4>

                <p>Start value {this.props.startValue}</p>
                <p> Counter {this.state.counter} </p>


                {/* passing function ref to react framework 
                    React call the function when event occur
                    on 'use strict' mode, 'this' keyword will be undefined
                */}
                <button onClick={this.incrementWithCrash}>
                            incrementWithCrash
                </button>

                {/* 
                 creating a arrow function, that wraps 'this' in context}
                 var _this = this;
                 ... 
                 _this.incrementWithES6()

                 the wrapper function created for every render function call
                */}
                <button onClick={ () => this.incrementWithES6() }>
                incrementWithES6
                </button>

                <button onClick={ this.increment }>
                increment
                </button>

                <button onClick={ this.decrement }>
                decrement
                </button>


                <button onClick={ this.decrementAndCallback }>
                decrementAndCallback
                </button>

                <div onClick={ this.decrementAndCallback }>
                    <span>Bubble parent with setState </span>

                    <button onClick={ this.decrementAndCallback }>
                            With bubble event 2 times
                    </button>
                </div>



                <div onClick={ this.decrementWithFunctionalSetState }>
                    <span>Bubble parent with decrementWithFunctionalSetState </span>

                    <button onClick={ this.decrementWithFunctionalSetState }>
                            With bubble event 2 times
                    </button>
                </div>



                <div onClick={ this.parentClick }>
                    <span> Stop Propagation </span>

                    <button onClick={ this.childClick }>
                        Stop Propagation
                     </button>
                </div>


              <button onClick={this.incrementBy2}>
                 +2
              </button>

                
            </div>
        );
    }
}

export default Counter;