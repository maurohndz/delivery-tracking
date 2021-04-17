"use sctrict";

const { handleError } = require("../utils/errors");

module.exports = function setupRestaurantModel(client) {
  const TABLE = "products";

  async function findAll() {
    return client
      .query(`SELECT * FROM ${TABLE}`)
      .then((result) => result.rows)
      .catch(handleError);
  }

  return {
    findAll,
  };
};
