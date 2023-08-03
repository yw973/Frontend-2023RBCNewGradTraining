import React from 'react';
import UserRestAPI from '../service/UserRestAPI';

class UserInfo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userarray:[]
            //in the state we define users
        }
    }

    //use component did mount method to call restAPI
    //get the user data from the restAPI
    //then store in the users array
    componentDidMount(){
        UserRestAPI.getUsers().then((response)=>{
            this.setState({userarray:response.data})
        });
    }

    async handleDelete( userarray ) {
        await fetch( this.props.endpoint + userarray, { method: 'DELETE' } );
        this.updateState();
      }
    
      updateState() {
        fetch( this.props.endpoint, { method: 'GET' } )
          .then( result => result.json() )
          .then( userarray  => this.setState( { userarray } ) );
      }

    //design a table here and display data from the table
    render (){
        return (
            <div>
                <h1 className="text-center">Users' List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Id</td>
                            <td> User Age</td>
                            <td> User Occupation</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.userarray.map(
                                user=>
                                <tr key ={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.id}</td>
                                    <td>{user.age}</td>
                                    <td>{user.occupation}</td>

                                </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        )
    }
    //Render is for defining the React component that should be rendered.
    //render to index.html

}

export default UserInfo;