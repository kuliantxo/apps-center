import React from 'react';
import { Col, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';

// https://clozeit.wordpress.com/2014/01/13/bootstrap-forms-using-react-js/
// http://stackoverflow.com/questions/27864951/how-to-access-childs-state-in-react

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['email', 'password']).isRequired,
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
      placeholder={this.props.placeholder} ref="input" novalidate />;
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
    console.log('Input: render');
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
      error = 'This field has a minimum of ' + this.props.minLength;
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
//    if (e.target.type == 'submit') {
      this.props.callback(this.state);
//    }
  },
  render: function(){
    console.log('Form: render', this.props);
    var fields = this.props.fields.map(function(field) {
      console.log('Form: render children', field);
      var props = {
        onChange: this.handleFieldChange
      }
      console.log('Form: render children2', props);
      console.log('Form: render children3', field.props);
      return <Input {...props} {...field.props} />
    }, this);
    return (
      <form onSubmit={this.onSubmit} className={this.props.bsStyle} role="form">
        { fields }
        { this.props.children }
      </form>
    );
  }
});

let fields = [
  {
    ele: 'input',
    props: {
      key: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true
    }
  },
  {
    ele: 'input',
    props: {
      key: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      minLength: 5
    }
  }
];

let SignIn = React.createClass({
  handleLogin: function(e) {
    console.log('Form: handleLogin', e);
  },
  render: function() {
    return (
      <Form bsStyle="inline" fields={ fields } callback={this.handleLogin}>
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
});

export default SignIn;
