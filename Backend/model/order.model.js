import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: false,
    },

    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },

    amount: {
      type: Number,
      required: true,
    },

    receipt: {
      type: String,
      required: true,
    },
    // code: {
    //   type: String,
    //   required: true,
    // },

    status: {
      type: String,
      enum: ["rejected", "accepted"],
      required: true,
      default: "rejected",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export { Order };
