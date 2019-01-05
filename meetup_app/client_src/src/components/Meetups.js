import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
    constructor() { //called before it is mounted. 
        super(); //only used with constructors. 
        this.state = {
            meetups: []
        }
    }

    componentWillMount() { //launches immediately
        //console.log('123')
        this.getMeetup();
    }

    getMeetup() {
        axios.get('http://localhost:3000/api/meetups')
            .then(response => {
                //console.log(response.data);
                this.setState({ meetups: response.data }, () => {
                    // console.log(this.state);
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const meetupItems = this.state.meetups.map((meetup, i) => {
            return (
                <MeetupItem key={meetup.id} item={meetup} />
            )
        })
        return (
            <div>
                <h1> Meetups </h1>
                <ul className="collection">
                    {meetupItems}
                </ul>
            </div>
        )
    }
}

export default Meetups;