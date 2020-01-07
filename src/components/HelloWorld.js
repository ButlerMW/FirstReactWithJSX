import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return(
            <div>
                Hello World!
                {this.props.someText}
            </div>
        );
    }
}

export default HelloWorld;