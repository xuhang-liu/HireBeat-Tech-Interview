import React, { Component } from 'react';

var list = [];

export default class List extends Component {
    constructor(props) {
        super(props);

        list = props.items;
    }
    render() {
        var listRender = [];
        for(var i in list) {
            listRender.push(<li>{ "Regulation #" + list[i] }</li>);
        }
        return (
            <div className="list">
                <ul>
                    { listRender }
                </ul>
            </div>
        );
    }
}
