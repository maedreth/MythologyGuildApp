import React, { Component } from 'react';
import axios from 'axios';

export default class MemberEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ilvl: null,
            timeStamp: ""
        };
    }

    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const options = {  
            year: "numeric", month: "short",  
            day: "numeric", hour: "2-digit", minute: "2-digit"  
        };
        return date.toLocaleDateString("en-US", options);
    }

    fetchMemberGearscore (name) {
        const url = `https://us.api.battle.net/wow/character/Wyrmrest%20Accord/${name}?fields=items&locale=en_US&apikey=6grynkqadxeapkwjybf38p7vr4vpvx62`;
        axios.get(url)
            .then(response => {
                console.log("axios res", response);
                this.setState({
                    ilvl: response.data.items.averageItemLevelEquipped,
                    timeStamp: response.data.lastModified
                });
            })
            .catch((error) => {
                this.setState({
                    ilvl: "Not found",
                    timeStamp: "Not found"
                });
            });
    }

    componentDidMount() {
        this.fetchMemberGearscore(this.props.toon.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.timeStamp > this.state.timeStamp) {
            return true;
        } else {
            console.log(this.props.toon.name, "is up to date");
            return false;
        }
    }

    render() {
        return (
            <tr >
                <td>{this.props.toon.name}</td>
                <td>{this.state.ilvl}</td>
                <td>{this.formatTimestamp(this.state.timeStamp)}</td>
            </tr>
        );
    }
}