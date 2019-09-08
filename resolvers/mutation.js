const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../src/utils");

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10);
  // 2
  const user = await context.prisma.createUser({ ...args, password });

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 4
  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("Cannot find user");
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 3
  return {
    token,
    user
  };
}

async function createPullRequest(parent, args, context, info) {
  const pullRequest = await context.prisma.createPullRequest({ ...args });
  return pullRequest;
}

async function deletePullRequest(parent, args, context, info) {
  const pullRequest = await context.prisma.deletePullRequest({ ...args });
  return pullRequest;
}

module.exports = {
  signup,
  login,
  createPullRequest,
  deletePullRequest
};
