import React, { Fragment, Component } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar
} from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import KeyboardShift from "../../components/KeyboardShift";
wingsImage = require("../../assets/wings.png");

class Login extends Component {
  render() {
    return (
      <KeyboardShift gap={2}>
        {() => (
          <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.register}>Gordies Angels</Text>
            <Image style={styles.image} source={wingsImage} />
            <Form
              onSubmit={async values => {
                response = await this.props.login({
                  variables: values
                });
                this.props.storeSessionToken(
                  response.data.login.token,
                  response.data.login.user.id
                );
              }}
              render={({ handleSubmit, values, pristine, invalid }) => (
                <Fragment>
                  <Field name="email">
                    {({ input, meta }) => (
                      <Fragment>
                        <TextInput
                          {...input}
                          style={styles.input}
                          placeholder="Email"
                          placeholderTextColor="white"
                          autoCapitalize="none"
                        />
                        {meta.error && meta.touched && (
                          <Text>{meta.error}</Text>
                        )}
                      </Fragment>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <Fragment>
                        <TextInput
                          {...input}
                          secureTextEntry={true}
                          style={styles.input}
                          placeholder="Password"
                          placeholderTextColor="white"
                          autoCapitalize="none"
                        />
                        {meta.error && meta.touched && (
                          <Text>{meta.error}</Text>
                        )}
                      </Fragment>
                    )}
                  </Field>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleSubmit(values);
                    }}
                  >
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Signup")}
                  >
                    <Text style={styles.text}>Need an account? Sign Up</Text>
                  </TouchableOpacity>
                </Fragment>
              )}
            />
          </View>
        )}
      </KeyboardShift>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export default compose(graphql(loginMutation, { name: "login" }))(Login);
