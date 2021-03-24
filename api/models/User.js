/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fname: { type: 'string', required: true },
    lname: { type: 'string', required: true },
    email: { type: 'string', required: true },
    mobile: { type: 'string', required: true },
  },
};

