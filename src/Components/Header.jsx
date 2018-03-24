import React, { Component } from 'react';
import '../mystyle.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.getFullName = this.getFullName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
  }

  getFullName() {
    
    return this.fullname.value;
  }
  getEmail() {
    // Explicitly focus the text input using the raw DOM API
    return this.email.value;
  }
  getPhoneNumber() {
    // Explicitly focus the text input using the raw DOM API
    return this.phonenumber.value;
  }
  getFullNameNull() {
    
    return this.fullname.value = "";
  }
  getEmailNull() {
    // Explicitly focus the text input using the raw DOM API
    return this.email.value = "";
  }
  getPhoneNumberNull() {
    // Explicitly focus the text input using the raw DOM API
    return this.phonenumber.value = "";
  }
  render() {
    let {addnew} = this.props;
    return (
      <div className="header table-responsive">          
          <table className="table">
            <tbody className="list">
              <tr>
                <td className="list-item col-md-3"><input type="text" placeholder="Enter name" name="fullname" ref={input => this.fullname = input}/></td>
                <td className="list-item col-md-3"><input type="email" placeholder="Enter name" name="email" ref={input => this.email = input}/></td>
                <td className="list-item col-md-3"><input type="number" placeholder="Enter phonenumber" name="phone" ref={input => this.phonenumber = input}/></td>
                <td className="list-item col-md-2"><div className="add" onClick={addnew}>Add new</div></td>
                <td className="list-item¨col-md-1"></td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default Header;