import React from 'react';
import { Col, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf('email').isRequired,
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
  getValue: function() {
    console.log('Input: getValue');
//    return this.refs.input.getDOMNode().value;
    return this.refs.input.value;
  },
  renderInput: function(){
    console.log('Input: renderInput');
    var className = "form-control input-md";
    return <input type={this.props.type} className={className}
      placeholder={this.props.placeholder} ref="input"/>;
  },
  renderLabel: function(){
    console.log('Input: renderLabel');
    return <label>{this.props.label}</label> ? this.props.label : undefined;
  },
  render: function(){
    console.log('Input: render');
    var className = "form-group";
    if (this.state.error)
      className += ' has-error';
    return (
      <div className={className} onBlur={this.onBlur} onFocus={this.onFocus}>
      <pre>{ this.state.error }</pre>
        {this.renderInput()}
        {this.renderLabel()}
      </div>
    );
  },
  onBlur: function(e){
    console.log('Input: onBlur');
    var value = this.getValue();
    var error;
    if (this.props.required && !value)
      error = 'required';
    else if (this.props.oneOf && !(value in this.props.oneOf))
      error = 'oneOf';
    else if (this.props.minLength && value.length < this.props.minLength)
      error = 'minLength';
    this.setState({error: error});
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
    console.log('Form: getDefaultProps');
    return {
      bsClass: "form"
    };
  },
  getValues: function() {
    console.log('Form: getValues', this.props);
    var values= {errors: {}};
    var err;
    this.props.children.forEach(function(child, idx){
      console.log('Form: forEach', child, idx);
      if (child && child.props.name) {
        values[child.props.name] = child.getValue();
        err = child.state.error;
        if (err)
          values.errors[child.props.name] = err;
      }
    });
    return values;
  },
  onSubmit: function(e) {
    console.log('Form: onSubmit');
    e.preventDefault();
    if (e.target.type == 'submit') {
      this.props.callback(this.getValues());
    }
  },
  handleLogin: function(e) {
    console.log('Form: handleLogin', e);
  },
  render: function(){
    console.log('Form: render', this.props);
    return (
      <form onClick={this.onSubmit} className={this.props.bsStyle} role="form">
        {this.props.children}
      </form>
    );
  }
});

let SignIn = React.createClass({
  render: function() {
  return (
    <Form bsStyle="inline" callback={this.handleLogin}>
    <Input name="email" type="email" placeholder="Email" required={true}/>
    <Input name="password" type="password" placeholder="Password / Blank"
      required={true} minLength={5}/>
    <Button onClick={this.handleLogin} type="#" bsStyle="success">
      Log in / Recover Pass
    </Button>
    </Form>
  );
  }
});

export default SignIn;
