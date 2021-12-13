import axios from 'axios';

const ADDRESSBOOK_API_BASE_URL = "http://localhost:8882/addressbook";

class AddressBookServices {

    getPersonAddress(){
        return axios.get(`${ADDRESSBOOK_API_BASE_URL}/getall`);
    }

    createPersonAddress(person){
        return axios.post(`${ADDRESSBOOK_API_BASE_URL}/add`, person);
    }

    getPersonAddressById(personId){
        return axios.get(`${ADDRESSBOOK_API_BASE_URL}/get/${personId}`);
    }

    updatePersonAddress(person, personId){
        return axios.put(`${ADDRESSBOOK_API_BASE_URL}/edit/${personId}`, person);
    }

    deletePersonAddress(personId){
        return axios.delete(`${ADDRESSBOOK_API_BASE_URL}/delete/${personId}`);
    }
}

export default new AddressBookServices()