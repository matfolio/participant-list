import React, { Component } from 'react';
import RowContent from './RowContent';
import Header from './Header';
//import '../mystyle.css';

class Content extends Component {
	constructor(props) {
    super(props);
    this.getFullNameFromHeader = this.getFullNameFromHeader.bind(this);
    this.getEmailFromHeader = this.getEmailFromHeader.bind(this);
    this.getPhoneNumberFromHeader = this.getPhoneNumberFromHeader.bind(this);
  }

  /* referencing begins */

  getFullNameFromHeader() {
    
    return this.fullname.getFullName();
  }
  getEmailFromHeader() {
    return this.email.getEmail();
  }
  getPhoneNumberFromHeader() {
    return this.phonenumber.getPhoneNumber();
  }
  getFullNameFromHeaderNull() {
    return this.fullname.getFullNameNull();
  }
  getEmailFromHeaderNull() {
    return this.email.getEmailNull();
  }
  getPhoneNumberFromHeaderNull() {
    return this.phonenumber.getPhoneNumberNull();
  }

  /* referencing ends */



  render() {
  	// Extract the props needed in this instance only
  	let {commit,addnew,edittable,edit,remove,cancel,save,sort} = this.props;

  	// filter those needed for the rowcontent instance
  	let props = {commit,edittable,edit,remove,cancel,save,sort}

  	// filter those needed for the header component.
    let header = {
    	addnew,
    	ref: input => {
  			this.fullname = input;
            this.email = input;
            this.phonenumber = input;
        }
    }
    return (
      
          <div> 
          	  {/*Header component */}          
              <Header {...header}/>
               {/*Rowcomponent component */} 
              <RowContent {...props}/>
              
          </div>
      
    );
  }
}

export default Content;