import React from 'react';


class BadgeForm extends React.Component{
    handleClick = (e)=>{
        console.log("click");
    };

    render(){
        return (
           <div>
               <form onSubmit={this.props.onSubmit}>
                   <div className="form-group">
                       <label>First Name</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formsValues.firstName}></input>
                   </div>

                   <div className="form-group">
                       <label>Last Name</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formsValues.lastName}></input>
                   </div>

                   <div className="form-group">
                       <label>Email</label>
                       <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formsValues.email}></input>
                   </div>

                   <div className="form-group">
                       <label>Twitter</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formsValues.twitter}></input>
                   </div>

                   <div className="form-group">
                       <label>Job Title</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formsValues.jobTitle}></input>
                   </div>
                   
                   <button onClick={this.handleClick} className="btn btn-primary">Save</button>
               </form>
               {this.props.error && <p className="alert alert-danger mt-3" role="alert">{this.props.error.message}</p>}
           </div>
        )
    }
}
export default BadgeForm;