import React, { Component } from "react";
import Realm from "../../config/models";

const UserContext = React.createContext();
class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      id: null
    };
  }

  componentDidMount() {
    this.queryUser();
  }

  async storeSessionToken(token, id) {
    try {
      await Realm.write(() => {
        Realm.create("User", { id: id, token: token });
        this.setState({ token: token, id: id });
      });
    } catch (e) {
      return e;
    }
  }

  async removeUserIdToken(id) {
    try {
      await Realm.write(() => {
        Realm.delete(Realm.objectForPrimaryKey("User", id));
        this.setState({ id: null, token: null });
      });
    } catch (e) {
      return e;
    }
  }

  async queryUser() {
    try {
      let user = await Realm.objects("User").map(user => user);
      this.setState({ id: user[0].id, token: user[0].token });
    } catch (e) {
      return e;
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          storeSessionToken: this.storeSessionToken.bind(this),
          removeUserIdToken: this.removeUserIdToken.bind(this),
          queryUser: this.queryUser.bind(this)
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
