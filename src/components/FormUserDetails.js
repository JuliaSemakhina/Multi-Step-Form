import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
				<React.Fragment>
				<AppBar title="Enter User Details"/>
				<TextField 
				hintText ="Enter Your First Name"
				floatingLabelText = "First name"
				onChange = {handleChange('firstName')}
				defaultValue ={values.firstName}
				/>
				<br/>
				<TextField 
				hintText ="Enter Your Last Name"
				floatingLabelText = "Last name"
				onChange = {handleChange('lastName')}
				defaultValue ={values.lastName}
				/>
				<br/>
				<TextField 
				hintText ="Enter Your E-mail"
				floatingLabelText = "E-mail"
				onChange = {handleChange('email')}
				defaultValue ={values.email}
				/>
				<br/>
				<RaisedButton 
				label="Continue"
				primary={true}
				style={styles.button}
				onClick = { this.continue }
				/>
				</React.Fragment>
			</MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 20
    }
}

export default FormUserDetails