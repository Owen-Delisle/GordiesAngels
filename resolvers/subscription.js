function newPullRequestAddition(parent, args, context, info) {
  return context.prisma.$subscribe
    .pullRequest({ mutation_in: ["CREATED"] })
    .node();
}

function newPullRequestDeletion(parent, args, context, info) {
  return context.prisma.$subscribe
    .pullRequest({ mutation_in: ["DELETED"] })
    .previousValues();
}

const pullRequestAdded = {
  subscribe: newPullRequestAddition,
  resolve: payload => {
    return payload;
  }
};

const pullRequestDeleted = {
  subscribe: newPullRequestDeletion,
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  pullRequestAdded,
  pullRequestDeleted
};
