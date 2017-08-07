import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Icon } from 'react-fa';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Valores del formulario: ', values);
      }
    });
  }

  render() {

		const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Por favor, ingrese el nombre de usuario.' }],
          })(
            <Input prefix={<Icon name="user-o" style={{ fontSize: 13 }} />}
                  placeholder="Username"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Por favor, ingrese su contraseña.' }],
          })(
            <Input prefix={<Icon name="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="Password"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
		      <br />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>

      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
