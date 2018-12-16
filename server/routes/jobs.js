const { verifyIsScientist } = require("../../utils/jwt");
const { db } = require("../../utils/db");

module.exports = {
  get: () =>
    db()
      .collection("jobs")
      .find()
      .toArray(),

  post: async ({ ctx }) => {
    const {
      title,
      field,
      location,
      deadline,
      description,
      requirements
    } = ctx.request.body;

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
