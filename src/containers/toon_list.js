import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemberEntry from '../components/member_entry';

class ToonList extends Component {

    renderMember(toon) {
        console.log("renderMember", toon);
        return (
            <MemberEntry key={toon.name} toon={toon} />
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>iLvL</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.toons.map(this.renderMember)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    console.log("state mapped to toonlist", state);
    return { toons : state.toons }
}

export default connect(mapStateToProps)(ToonList);