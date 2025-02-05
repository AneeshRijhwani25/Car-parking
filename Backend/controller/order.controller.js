import { Order } from "../model/order.model.js";
import { createOrder, verifyOrder } from "../utils/payment.js";

const createBooking = async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: "Amount and name are required" });
  }
  const order = await createOrder(amount);
  if (!order) {
    return res.status(500).json({ message: "order creation failed" });
  }

  const donation = await Order.create({
    orderId: order.id, // Assuming order.data contains the payment_id
    amount: amount,
    receipt: order.receipt,
    // owner: owner,
    // fullName: fullName,
  });
  res.status(201).json({ order, message: "order successfully created" });
};

const verifyBooking = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  // Verify the payment
  const isVerified = await verifyOrder(
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  );

  if (!isVerified) {
    return res.status(400).json({ message: "Payment verification failed" });
  }

  // Update the donation status
  const donation = await Order.findOne({ orderId: razorpay_order_id });
  if (!donation) {
    return res.status(404).json({ message: "Order not found" });
  }
  donation.status = "accepted";
  await donation.save();

  // Respond with success
  res
    .status(200)
    .json({ donation, message: "Order verified and recorded successfully" });
};

export { createBooking, verifyBooking };
