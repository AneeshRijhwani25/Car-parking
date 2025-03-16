// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import qr from "../../public/QR.png";
// import Code from "./Code";
// // import Booking from "./Booking";
// // import axios from "axios";
// // import toast from "react-hot-toast";
// function Payment({ bookingData }) {
//   console.log("HIIIi")
//   console.log(bookingData)
//   const [showCode, setShowCode] = useState(false);
//   const [upiAddress, setUpiAddress] = useState("");
//   const [isPayClicked, setIsPayClicked] = useState(false);
//   const [code, setCode] = useState("");

//   const handlePayClick = (e) => {
//     e.preventDefault();
//     if (upiAddress) {
//       setShowCode(true);
//       setIsPayClicked(true);
//       generateCode();
//     }
//   };
//    // try {
//     //   const res = await axios.post(
//     //     "http://localhost:4001/book/booking",
//     //     regInfo
//     //   );
//     //   if (res.data) {
//     //     // document.getElementById("my_modal_4").close();
//     //     // // document.getElementById("my_modal_7").showModal()
        
//     //     // // localStorage.setItem("Users", JSON.stringify(res.data.user));
//     //     // // handleDownload(data); // Call handleDownload with form data
//     //     // toast.success("Parking slot selected successful Now Make Payment");
//     //     // return <Payment bookingData={regInfo} />;
//     //   }
//     // } catch (err) {
//     //   if (err.response) {
//     //     toast.error("Error: " + err.response.data.message);
//     //   } else {
//     //     toast.error("An unexpected error occurred");
//     //   }
//     // } finally {
//     //   setLoading(false);
//     // }
//   // const handlePayment = async () => {
//   //   try {
//   //     const res = await axios.post("http://localhost:4001/orders/order", {
//   //       amount,
//   //     });
//   //     // console.log("Before res");
//   //     console.log(res.data);
//   //     console.log(amount);
//   //     // console.log("After res");
//   //     handlePaymentVerify(res.data.order);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const handlePaymentVerify = async (data) => {
//   //   const options = {
//   //     key: "rzp_test_cNnJMfX0H3YkDr",
//   //     amount: data.amount,
//   //     currency: data.currency,
//   //     name: "Harsh",
//   //     description: "Test Mode",
//   //     order_id: data.id,
//   //     handler: async (response) => {
//   //       console.log("response", response);
//   //       try {
//   //         // console.log("Before axios");
//   //         const res = await axios.post("http://localhost:4001/orders/verify", {
//   //           razorpay_order_id: response.razorpay_order_id,
//   //           razorpay_payment_id: response.razorpay_payment_id,
//   //           razorpay_signature: response.razorpay_signature,
//   //         });
//   //         // console.log("After axios");

//   //         const verifyData = res.data;

//   //         if (verifyData.message) {
//   //           toast.success(verifyData.message);
//   //         }
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     },
//   //     theme: {
//   //       color: "#5f63b8",
//   //     },
//   //   };
//   //   const rzp1 = new window.Razorpay(options);
//   //   rzp1.open();
//   // };
//   const handleUpiChange = (e) => {
//     setUpiAddress(e.target.value);
//     setIsPayClicked(false); // Reset the pay click state if the UPI address is changed
//   };

//   const generateCode = () => {
//     const newCode = generateRandomTenCharacterString();
//     setCode(newCode);
//   };

//   const generateRandomTenCharacterString = () => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";
//     for (let i = 0; i < 10; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       result += characters[randomIndex];
//     }
//     return result;
//   };
//   // const handleDownload = (data) => {
//   //   const downloadData = new Blob(
//   //     [
//   //       `Car Number: ${data.carnumber}\n`,
//   //       `Entry Date: ${data.entrydate}\n`,
//   //       `Entry Time: ${data.entrytime}\n`,
//   //       `Exit Date: ${data.exitdate}\n`,
//   //       `Parking Area: ${data.area}\n`,
//   //       `Slot Number: ${data.slot}\n`,
//   //       `Amount: ${data.amount}\n`,
//   //       `Token Number: ${data.code}\n`,
//   //     ],
//   //     { type: "text/plain" }
//   //   );

//   //   const url = URL.createObjectURL(downloadData);
//   //   const a = document.createElement("a");
//   //   a.href = url;
//   //   a.download = "booking_info.txt";
//   //   a.click();
//   //   URL.revokeObjectURL(url);
//   // };


//   return (
//     <>
//       <div>
//         <dialog id="my_modal_7" className="modal">
//           <div className="modal-box">
//             <Link
//               to="/Help"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_7").close()}
//             >
//               ✕
//             </Link>

//             <div className="order-1 w-full mt-5 md:w-1/2 flex items-center">
//               <img
//                 src={qr}
//                 className="md:w-[300px] md:h-[240px] md:ml-12 items-center"
//                 alt="it is an image"
//               />
//             </div>

//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm bg-base-100">
//                 <form>
//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text">Enter UPI Address</span>
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="anshuman@okabi"
//                       className="input input-bordered input-info w-full max-w-xs"
//                       value={upiAddress}
//                       onChange={handleUpiChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-control mt-6">
//                     <button
//                       className="input-info w-full max-w-xs btn btn-outline btn-primary"
//                       onClick={handlePayClick}
//                     >
//                       Pay
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {showCode && (
//               <div className="mt-2">
//                 <Code code={code} />
//               </div>
//             )}

//             <div className="ml-6 pl-3 form-control mt-4">
//               <button
//                 className={`input-info w-full max-w-xs btn btn-outline btn-success ${
//                   !isPayClicked ? "btn-disabled" : ""
//                 }`}
//                 onClick={() =>
//                   document.getElementById("my_modal_4").showModal()
//                 }
//                 disabled={!isPayClicked}
//               >
//                 Go Next
//               </button>
//             </div>

//             {/* <Booking code={code} /> */}
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Payment;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import qr from "../../public/QR.png";
// import Code from "./Code";
// import Booking from "./Booking";

// function Payment() {
//   const [showCode, setShowCode] = useState(false);
//   const [code, setCode] = useState("");

//   const generateCode = () => {
//     const newCode = generateRandomTenCharacterString();
//     setCode(newCode);
//   };

//   const generateRandomTenCharacterString = () => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";
//     for (let i = 0; i < 10; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       result += characters[randomIndex];
//     }
//     return result;
//   };

//   const handleGoNext = () => {
//     generateCode(); // Generate code before redirecting
//     document.getElementById("my_modal_4").showModal();
//   };

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_7" className="modal">
//           <div className="modal-box">
//             <Link
//               to="/Help"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_7").close()}
//             >
//               ✕
//             </Link>

//             <div className="order-1 w-full mt-5 md:w-1/2 flex items-center">
//               <img
//                 src={qr}
//                 className="md:w-[300px] md:h-[240px] md:ml-12 items-center"
//                 alt="it is an image"
//               />
//             </div>

//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm bg-base-100">
//                 <div className="form-control mt-6">
//                   <button
//                     type="button"
//                     className="input-info w-full max-w-xs btn btn-outline btn-primary"
//                     onClick={handleGoNext}
//                   >
//                     Generate Code & Go Next
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {showCode && (
//               <div className="mt-2">
//                 <Code code={code} />
//               </div>
//             )}

//             <div className="ml-6 pl-3 form-control mt-4">
//               <button
//                 className="input-info w-full max-w-xs btn btn-outline btn-success"
//                 onClick={handleGoNext}
//               >
//                 Go Next
//               </button>
//             </div>

//             <Booking code={code} />
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Payment;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Code from "./Code";

function Payment({ bookingData }) {
  const [showCode, setShowCode] = useState(false);
  const [isPayClicked, setIsPayClicked] = useState(false);
  const [code, setCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePayment = async () => {
    if (paymentMethod === "cash") {
      completeBooking();
    } else if (paymentMethod === "online") {
      try {
        const res = await axios.post("http://localhost:4001/orders/order", {
          amount: bookingData.amount,
        });

        if (res.data && res.data.order) {
          handlePaymentVerify(res.data.order);
        }
      } catch (error) {
        toast.error("Error initiating payment.");
      }
    } else {
      toast.error("Please select a payment method.");
    }
  };

  const handlePaymentVerify = (data) => {
    const options = {
      key: "rzp_test_cNnJMfX0H3YkDr",
      amount: data.amount,
      currency: data.currency,
      name: "Parking Payment",
      description: "Parking Slot Booking",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyRes = await axios.post("http://localhost:4001/orders/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data && verifyRes.data.message) {
            toast.success("Payment verified successfully!");
            completeBooking();
          }
        } catch (error) {
          toast.error("Payment verification failed.");
        }
      },
      theme: { color: "#5f63b8" },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const completeBooking = async () => {
    const newCode = generateRandomTenCharacterString();
    setCode(newCode);
    setShowCode(true);
    setIsPayClicked(true);

    const bookingInfo = {
      carnumber: bookingData.carnumber,
      entrydate: bookingData.entrydate,
      entrytime: bookingData.entrytime,
      exitdate: bookingData.exitdate,
      area: bookingData.area,
      slot: bookingData.slot,
      amount: bookingData.amount,
      code: newCode,
    };
    await axios.post("http://localhost:4001/book/booking", bookingInfo);
    toast.success("Booking confirmed!");
  };

  const generateRandomTenCharacterString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length: 10 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  };

  const handleDownload = () => {
    const ticketData = `
      Car Number: ${bookingData.carnumber}
      Entry Date: ${bookingData.entrydate}
      Entry Time: ${bookingData.entrytime}
      Exit Date: ${bookingData.exitdate}
      Parking Area: ${bookingData.area}
      Slot Number: ${bookingData.slot}
      Amount Paid: ${bookingData.amount}
      Token Number: ${code}
    `;

    const blob = new Blob([ticketData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Parking_Ticket.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-full">
      <div className="modal-box ">
        <Link to="/Help" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_7").close()}>
          ✕
        </Link>

        <h2 className="text-lg font-semibold">Select Payment Method</h2>

        <div className="mt-4 space-y-2">
          <button className={`btn w-full ${paymentMethod === "cash" ? "btn-active" : "btn-outline"}`} onClick={() => setPaymentMethod("cash")}>
            Pay with Cash
          </button>
          <button className={`btn w-full ${paymentMethod === "online" ? "btn-active" : "btn-outline"}`} onClick={() => setPaymentMethod("online")}>
            Pay Online
          </button>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary w-full" onClick={handlePayment}>Proceed to Payment</button>
        </div>

        {showCode && <div className="mt-4"><Code code={code} /></div>}

        {isPayClicked && (
          <div className="mt-4">
            <button className="btn btn-success w-full" onClick={handleDownload}>Download Ticket</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;