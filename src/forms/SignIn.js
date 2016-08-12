import React from 'react';
import { Col, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';

// https://clozeit.wordpress.com/2014/01/13/bootstrap-forms-using-react-js/
// http://stackoverflow.com/questions/27864951/how-to-access-childs-state-in-react

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['email', 'password', 'checkbox']).isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
    oneOf: React.PropTypes.array,
    minLength: React.PropTypes.int
  },
  getInitialState: function() {
    console.log('Input: getInitialState');
    return {};
  },
  renderInput: function(){
    console.log('Input: renderInput');
    var className = "form-control input-md";
    return <input type={this.props.type} className={className}
      placeholder={this.props.placeholder} ref="input" noValidate />;
  },
  renderLabel: function(){
    console.log('Input: renderLabel');
    return <label>{this.props.label}</label> ? this.props.label : undefined;
  },
  renderError: function(){
    console.log('Input: renderError');
    return <span class="error-block">{ this.state.error }</span> ? this.state.error : undefined;
  },
  render: function(){
    console.log('Input: render', this.props);
    var className = "form-group";
    if (this.state.error)
      className += ' has-error';
    return (
      <div className={className} onBlur={this.onBlur} onFocus={this.onFocus}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderError()}
      </div>
    );
  },
  onBlur: function(e){
    console.log('Input: onBlur');
    var value = this.refs.input.value;
    var error;
    if (this.props.required && !value)
      error = 'This field is required';
    else if (this.props.oneOf && !(value in this.props.oneOf))
      error = 'oneOf';
    else if (this.props.minLength && value.length < this.props.minLength)
      error = 'This field requires a minimum of ' + this.props.minLength + ' characters';
    this.setState({error: error});
    this.props.onChange(this.props.name, {error: error, value: value});
  },
  onFocus: function(e) {
    console.log('Input: onFocus');
    this.setState({error: false});
    e.stopPropagation();
  }
});

var Form = React.createClass({
  propTypes: {
    callback: React.PropTypes.func.isRequired,
  },
  getDefaultProps: function() {
    console.log('Form: getDefaultProps', this.props);
    return {
      bsClass: "form"
    };
  },
  handleFieldChange: function(field, value) {
    console.log('handleFieldChange', field, value);
    var newState = {};
    newState[field] = value;
    this.setState(newState);
  },
  onSubmit: function(e) {
    console.log('Form: onSubmit', e.target);
    e.preventDefault();
    this.props.callback(this.state);
  },
  render: function(){
    console.log('Form: render', this.props);
    console.log('Form: render children', this.props.children);
//    var thisChildren = [];
//    if(thisChildren.length == 0) {
//      thisChildren = this.props.children.map(function(child){
//        console.log('Form: render child', child);
//        console.log('Form: render child type', child.type);
//        if (child.type === RadioOption) {
//          return React.cloneElement(child, {
//           onChange: this.handleFieldChange
//          });
//       }
//        return child;
//      }, this);
//    }
    // console.log('Form: render children', thisChildren);
    // thisChildren.map(function(child){
    //   console.log('Form: render childx', child);
    // });
    return (
      <form onSubmit={this.onSubmit} className={this.props.bsStyle} role="form">
        <pre>{ this.state }</pre>
        { this.props.children }
      </form>
    );
  }
});

let SignIn = React.createClass({
  handleLogin: function(e) {
    console.log('Form: handleLogin', e);
  },
  render: function() {
    return (
      <Form bsStyle="inline" callback={this.handleLogin}>
        <Input key={1} name="email" type="email" placeholder="Email" required={true}/>
        <Input key={2} name="password" type="password" placeholder="Password"
          required={true} minLength={5}/>
        <Input key={3} name="remember" type="checkbox" />
        <Button key={4} type="submit" bsStyle="success">
          Sign In
        </Button>
      </Form>
    );
  }
});

export default SignIn;
