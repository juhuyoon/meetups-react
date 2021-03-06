import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddMeetup extends Component {
    addMeetup(newMeetup) {
        //console.log(newMeetup);
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/meetups',
            data: newMeetup
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value,
            zipcode: this.refs.zipcode.value,
            description: this.refs.description.value
        }
        this.addMeetup(newMeetup);
        //console.log(this.refs.name.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>Add Meetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="zipcode" ref="zipcode" />
                        <label htmlFor="zipcode">Zipcode</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="description" ref="description" />
                        <label htmlFor="description">Description</label>
                    </div>
                    <input type='submit' value='Submit' className='btn right' />
                </form>
            </div>
        )
    }
}

export default AddMeetup;