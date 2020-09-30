import React, { Component } from "react";
import ProfilePage from '../components/ProfilePage'


class UserContainer extends Component {
    
    state = {
        users: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000//api/v1/users`)
        .then(res => res.json())
        .then(users => {
            this.setState({users: users})
            // console.log(user)
        })
    }

    render() {
       const {id, users} = this.state
        return (
            <div>
            {users.map(user =>{
                return <ProfilePage key={id} user={user}/>
            })}
            </div>
        );
    }
}

export default UserContainer;
