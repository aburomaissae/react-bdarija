// Application hooks that run for every service
const noPaging = (context) => {
  context.params.paginate = false;
  delete context.params.query.$limit;
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [noPaging],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
