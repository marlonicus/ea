const { verifyIsScientist } = require("../../utils/jwt");
const { db } = require("../../utils/db");

module.exports = {
  get: () =>
    db()
      .collection("jobs")
      .find()
      .toArray(),

  post: async ({ ctx }) => {
    const { title, description } = ctx.request.body;

    try {
      await verifyIsScientist({ ctx });

      await db()
        .collection("jobs")
        .insertOne({ title, description });

      return "Job posted";
    } catch (e) {
      return "Fail";
    }
  }
};
