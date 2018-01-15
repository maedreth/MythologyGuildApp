import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToons } from '../actions/index';

class RefreshButton extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        this.props.fetchToons();
    }

    render() {
        return (
            <button onClick={this.onClick} className="btn btn-secondary">
                REFRESH
            </button>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchToons }, dispatch);
}

export default connect(null, mapDispatchToProps)(RefreshButton);