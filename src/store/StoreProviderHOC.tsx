import React, { Component } from 'react';

export default function storeProviderHOC(WrappedComponent, Provider, store) {
    return class extends Component {
        render() {
            return (
                <Provider {...store}>
                    <WrappedComponent {...this.props} />
                </Provider>
            );
        }
    };
};