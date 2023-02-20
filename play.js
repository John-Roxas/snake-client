const { connect } = require('./client');
const { setupInput } = require('./input');

let result = connect();


setupInput(result);