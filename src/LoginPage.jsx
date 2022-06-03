import React from "react";
import { Layout, Button, Input, Icon, Form, Row, Col, Card } from "antd";
import { ReactComponent as Logo } from "./assets/hd-logo.svg";

const { Content } = Layout;

export class LoginPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, onSubmit } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const { username } = values;
        onSubmit(username);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const usernameFieldDecorator = getFieldDecorator("username", {
      rules: [{ required: true, message: "Please input your username!" }]
    });

    const leadFieldDecorator = getFieldDecorator("lead", {
      rules: [{ required: true, message: "Please type in your lead id!" }]
    });

    return (
      <Layout>
        <Content style={{ height: "100vh" }}>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ height: "100%" }}
          >
            <Col span={12} offset={6}>
              <Card style={{ maxWidth: "404px" }}>
                <Row
                  type="flex"
                  justify="center"
                  align="middle"
                  style={{ marginBottom: "30px" }}
                >
                  <Logo />
                </Row>

                <Form onSubmit={this.handleSubmit}>
                  <Form.Item>
                    {leadFieldDecorator(
                      <Input
                        prefix={
                          <Icon
                            type="form"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Lead"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {usernameFieldDecorator(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Username"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="phone"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Customer Phone"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button block type="primary" htmlType="submit">
                      Sign in
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Form.create({ name: "login" })(LoginPage);
