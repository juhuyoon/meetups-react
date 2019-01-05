import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class EditMeetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            city: '',
            address: '',
            zipcode: '',
            description: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.getMeetupDetails();
    }

    getMeetupDetails() {
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address,
                    zipcode: response.data.zipcode,
                    description: this.refs.description.value
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err))
    }

    editMeetup(newMeetup) {
        //console.log(newMeetup);
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/meetups/${this.state.id}`,
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

        this.editMeetup(newMeetup);
        //console.log(this.refs.name.value);
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>Edit Meetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
                        <label className='active' htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange} />
                        <label className='active' htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange} />
                        <label className='active' htmlFor="address">Address</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="zipcode" ref="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} />
                        <label className='active' htmlFor="zipcode">Zipcode</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange} />
                        <label className='active' htmlFor="description">Description</label>
                    </div>
                    <input type='submit' value='Submit' className='btn right' />
                </form>
            </div>
        )
    }
}

export default EditMeetup;