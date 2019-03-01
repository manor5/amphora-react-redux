import React, { Component } from 'react';
import Counter from './Counter';

class Home extends Component {
    render() {
        // this.props is react keyword
        console.log('Home render', this.props);
        // this.props.startValue = 10; // immutable

        return (
            <div>
                <h2>Home</h2>

                {/* passing startValue again to child */}

                <Counter startValue={this.props.startValue} />
            </div>
        );
    }
}

export default Home;