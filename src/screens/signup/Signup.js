import React, { Fragment } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  StatusBar
} from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import KeyboardShift from "../../components/KeyboardShift";

const inputResult = async (values, signup, navigation) => {
  await signup({ variables: values }).then(() => {
    {
      {
        Alert.alert("Register Complete!", "Thank You For Registering!", [
          { text: "Got it!", onPress: () => navigation.navigate("SignIn") }
        ]);
      }
    }
  });
};

const required = value => (value ? undefined : "*Required Field");

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Does not match password";
  }

  return errors;
};

const SignUp = ({ signup, navigation }) => {
  return (
    <KeyboardShift gap={2}>
      {() => (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.register}>REGISTER</Text>
          <Form
            validate={validate}
            onSubmit={values => inputResult(values, signup, navigation)}
            render={({ handleSubmit, pristine, invalid }) => (
              <Fragment>
                <Field name="firstname" validate={required}>
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        {...input}
                        style={styles.input}
                        placeholder="First name"
                        placeholderTextColor="white"
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field name="lastname" validate={required}>
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        {...input}
                        style={styles.input}
                        placeholder="Last name"
                        placeholderTextColor="white"
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field name="email" validate={required}>
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        {...input}
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        autoCapitalize="none"
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        {...input}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        secureTextEntry={true}
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </Fragment>
                  )}
                </Field>
                <Field name="confirmPassword" validate={required}>
                  {({ input, meta }) => (
                    <Fragment>
                      <TextInput
                        {...input}
                        style={styles.input}
                        placeholder="Confirm password"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        secureTextEntry={true}
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </Fragment>
                  )}
                </Field>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit(signup)}
                >
                  <Text style={styles.text}>REGISTER</Text>
                </TouchableOpacity>
              </Fragment>
            )}
          />
        </View>
      )}
    </KeyboardShift>
  );
};

const signUpMutation = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export default compose(graphql(signUpMutation, { name: "signup" }))(SignUp);
