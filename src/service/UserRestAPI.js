import axios from 'axios'

const RESTAPI_USERS_URL = 'http://localhost:8080/users';

class UserRestAPI{
    getUsers(){
        return axios.get(RESTAPI_USERS_URL);
        
    }
}

export default new UserRestAPI();