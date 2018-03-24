#Attendant-List App
===================
Built using plain Reactjs under certain datailed requirement.

###Introduction
===============

This simple attendant list app focus on listing bunch of list of attendant at a particular event having filled a form.I have built this app using reactjs and presently working on building the same concept with react-redux which would focus on a more realistic way of handling the state of an app. 

I have divided this app into components each handling a specific operation which all in the end are suspended into the main component for controlled state management.

##Components

###App
This section of the App does the main rendering of the App content. The content component instance in embedded in this component. Making use of ES6 rest and spread object to pass props into the react component `Content` instance.
```
<Content  {...props}/>
``` 
Using the following Object  as props:
```
let props = {
      addnew: this.handleAddNew,
        commit: this.state.participant,
        edittable: this.state.edittable,
        edit: this.editRow,
        remove: this.deleteRow,
        cancel: this.cancel,
        save:this.save,
        sort:this.sort,
        ref: input => {this.fullname = input;
                    this.email = input;
                    this.phonenumber = input;
                  }
                          
}
```
The main App component defines, implements and binds the following functions to React component:
```
    this.handleAddNew = this.handleAddNew.bind(this);
    this.getName = this.getName.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.editRow = this.editRow.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
    this.sort = this.sort.bind(this);
    this.getId = this.getId.bind(this);
    this.renderDefaultUser = this.renderDefaultUser.bind(this);
```
The opeartions of the functions have been commented besides I have used semantic names for these functions

###Content

This component instance is embedded with other two components which I have passed to them the props passed from the main components(App) unto the Content component. It actually makes sense that I considering the hierachy of the source of data is from the main state of the app which is the state footprint.
Embedding the needed components like this:
```
 <div> 
      {/*Header component */}          
      <Header {...header}/>
      {/*Rowcomponent component */} 
      <RowContent {...props}/>          
 </div>
```
Using the follwing object as props:
```
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
```


###Header
This component displays the header of the app which contains section for adding a new person to the list. I have focus on some logic while implementing the component. I have used the ref for accessing the contents from the control boxes of course not considered as the best way to reference any DOM item. in this case the ref is used positively and over used besides this is a small scale app.

###RowContent
The section which is used to render component to the table. This component instance is embeded in the Content component.

###RowEdit

[attendant-lsit App on Heroku]().

