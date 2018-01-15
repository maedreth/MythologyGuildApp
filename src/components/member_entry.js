import React, { Component } from 'react';
import axios from 'axios';

export default class MemberEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ilvl: null
        };
    }

    fetchMemberGearscore (name) {
        const url = `https://us.api.battle.net/wow/character/Wyrmrest%20Accord/${name}?fields=items&locale=en_US&apikey=6grynkqadxeapkwjybf38p7vr4vpvx62`;
        axios.get(url)
            .then(response => {
                console.log("axios res", response);
                this.setState({
                    ilvl: response.data.items.averageItemLevel
                });
            })
            .catch((error) => {
                this.setState({
                    ilvl: "Not found"
                });
            });
    }

    componentDidMount() {
        this.fetchMemberGearscore(this.props.toon.name);
    }

    render() {
        return (
            <tr >
                <td>{this.props.toon.name}</td>
                <td>{this.state.ilvl}</td>
                <td></td>
            </tr>
        );
    }
}