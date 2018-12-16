const { ObjectID } = require("mongodb");
const { verifyIsScientist } = require("../../utils/jwt");
const { db } = require("../../utils/db");

module.exports = {
  get: () =>
    db()
      .collection("jobs")
      .find()
      .toArray(),

  getById: ({ id }) =>
    db()
      .collection("jobs")
      .findOne({ _id: ObjectID(id) }),

  post: async ({ ctx }) => {
    const {
      title,
      field,
      location,
      deadline,
      description,
      requirements
    } = ctx.request.body;

    // @TODO: Sanitise these inputs

    try {
      await verifyIsScientist({ ctx });

      await db()
        .collection("jobs")
        .insertOne({
          title,
          field,
          location,
          deadline,
          description,
          requirements
        });

      return "Job posted";
    } catch (e) {
      return "Fail";
    }
  }
};
