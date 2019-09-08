import Realm from "realm";
const UserSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    token: "string"
  }
};

const realm = new Realm({ schema: [UserSchema] });

export default realm;
