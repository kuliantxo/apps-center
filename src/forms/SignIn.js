import React from 'react';
import { Col, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';
import auth from '../services/auth';

// https://clozeit.wordpress.com/2014/01/13/bootstrap-forms-using-react-js/
// http://stackoverflow.com/questions/27864951/how-to-access-childs-state-in-react
// https://github.com/reactjs/react-router/blob/master/examples/auth-flow/auth.js
// http://www.tech-dojo.org/#!/articles/5697fd5ddb99acd646dea1aa
// https://github.com/tech-dojo/react-showcase

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
    return {
      value: '',
      error: ''
    };
  },
  getValidationState: function(e){
    console.log('Input: getValidationState');
    var value = this.state.value;
    if (this.props.required && !value) {
      this.state.error = 'This field is required';
      return 'error';
    } else if (this.props.oneOf && !(value in this.props.oneOf)) {
      this.state.error = 'oneOf';
      return 'error';
    } else if (this.props.minLength && value.length < this.props.minLength) {
      this.state.error = 'This field requires a minimum of ' + this.props.minLength + ' characters';
      return 'error';
    }
    this.state.error = '';
  },
  onChange: function(e) {
    console.log('Input: onChange');
    this.setState({value: this.refs.input.value});
    this.props.onChange(this.props.name, {error: this.state.error, value: this.refs.input.value});
    e.stopPropagation();
  },
  renderInput: function(){
    console.log('Input: renderInput');
    var className = '';
    if(['email', 'password'].indexOf(this.props.type) > -1) {
      className = "form-control input-md";
    }
    return <input type={this.props.type} className={className}
      placeholder={this.props.placeholder} ref="input" onChange={ this.onChange } />;
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
    console.log('Input: render', ['email', 'password'].indexOf(this.props.type));
    var className = "form-group";
    // if (this.state.error) {
    //   className += ' has-error';
    // }
    console.log('Input: render', className);
    return (
      <FormGroup validationState={this.getValidationState()}>
        <pre>{ this.state && this.state.error }</pre>
        <pre>{ this.state && this.state.value }</pre>
        { this.renderLabel() }
        { this.renderInput() }
        { this.renderError() }
      </FormGroup>
    );
  }
});

var Form = React.createClass({
  propTypes: {
    callback: React.PropTypes.func.isRequired,
  },
  getInitialState() {
    return {};
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
    this.props.callback(this.state.email.value, this.state.password.value);
  },
  render: function(){
    console.log('Form: render', this.props);
    console.log('Form: render children', this.props.children);
    var thisChildren = React.Children.map(this.props.children, function(child){
      console.log('Form: render child', child);
      // if (child.type === RadioOption) {
        return React.cloneElement(child, {
          onChange: this.handleFieldChange
        });
      // }
      // return child;
    }, this);
    console.log('Form: render children last', thisChildren);
    return (
      <form onSubmit={this.onSubmit} className={this.props.bsStyle} role="form" noValidate>
        { thisChildren }
      </form>
    );
  }
});

let SignIn = React.createClass({
  handleSignin: function(email, password) {
    console.log('Form: handleSignin', email, password);
    auth.login(email, password, (loggedIn) => {
      if (!loggedIn) {
        alert( "Login Failed" );
//        return this.setState({ error: "Login Failed" })
      }
    })
  },
  render: function() {
    return (
      <Form bsStyle="inline" callback={this.handleSignin}>
        <Input key={1} name="email" type="email" placeholder="Email" required={true}/>
        <Input key={2} name="password" type="password" placeholder="Password"
          required={true} minLength={5}/>
        <Input key={3} name="remember" type="checkbox" />
        <Button key={4} type="submit" bsStyle="primary">
          Sign In
        </Button>
      </Form>
    );
  }
});

export default SignIn;
