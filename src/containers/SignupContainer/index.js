import React, {Component} from 'react';
import SignupComponent from '../../components/SignupComponent';

export default class SignupContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            password2:'',
            address:'',
            postalCode:'',
            phoneNumber:'',
            userType: '',
            restaurantName: ''
        };

    }
    handleFirstNameChange = e => {
        this.setState({firstName: e.target.value})
    };
    handleLastNameChange = e => {
        this.setState({lastName: e.target.value})
    };
    handleEmailChange = e => {
        this.setState({email:e.target.value})
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    };
    handlePassword2Change = e => {
        this.setState({password2: e.target.value})
    };
    handleAddressChange = e => {
        this.setState({address: e.target.value})
    };
    handlePostalCodeChange = e => {
        this.setState({postalCode: e.target.value})
    };
    handlePhoneNumberChange = e => {
        this.setState({phoneNumber: e.target.value})
    };
    handleRestaurantNameChange = e => {
        this.setState({ restaurantName: e.target.value })
    };
    handleUserTypeChange = e => {
        this.setState({userType: e.target.value})
    };

    handleSubmit = () => {

        console.log('SUBMIT PRESSED', this.state.firstName, this.state.lastName, this.state.email,
            this.state.password, this.state.password2, this.state.userType, this.state.restaurantName);
        this.props.history.push('/customer')

        //TODO: CREATE NEW ACCOUNT
    };
    handleCancel = () => {
        this.props.history.push('/');
    };


    getValidationState = () => {
        //TODO
        return null;
    };

    render(){
        return(
          <div>
              <SignupComponent
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                email = {this.state.email}
                password = {this.state.password}
                password2 = {this.state.password2}
                address = {this.state.address}
                postalCode = {this.state.postalCode}
                phoneNumber = {this.state.phoneNumber}
                userType = {this.state.userType}
                restaurantName = {this.state.restaurantName}
                handleFirstNameChange= {this.handleFirstNameChange}
                handleLastNameChange= {this.handleLastNameChange}
                handleEmailChange= {this.handleEmailChange}
                handlePasswordChange= {this.handlePasswordChange}
                handlePassword2Change= {this.handlePassword2Change}
                handleAddressChange= {this.handleAddressChange}
                handlePostalCodeChange= {this.handlePostalCodeChange}
                handlePhoneNumberChange= {this.handlePhoneNumberChange}
                handleSubmit = {this.handleSubmit}
                handleCancel = {this.handleCancel}
                handleUserTypeChange = {this.handleUserTypeChange}
                validationState={this.getValidationState}
                handleRestaurantNameChange = {this.handleRestaurantNameChange}

              />;
          </div>
        );
    }

}