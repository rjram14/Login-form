import React,{Component} from 'react';
import UserDisplay from './UserDisplay'

const url = "http://localhost:5000/api/auth/users"

class UserList extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    render(){
        if(sessionStorage.getItem('_ltk')==null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('_ltk')!==null && sessionStorage.getItem('_Rtk')!=='admin'){
            this.props.history.push('/profile')
        }
        return(
            <div>
                <UserDisplay userData={this.state.user}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                user:data
            })
        })
    }
}

export default UserList;