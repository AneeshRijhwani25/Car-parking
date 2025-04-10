// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Payment from "./Payment";

// function Booking() {
//   // const location = useLocation();
//   const [showPayment, setShowPayment] = useState(false);
//   const [bookingData, setBookingData] = useState(null);

//   const selectedParking =
//     JSON.parse(localStorage.getItem("selectedParking")) || {};
//   const [loading, setLoading] = useState(false);
//   const [availableSlots, setAvailableSlots] = useState([1, 2, 3, 4]); // All possible slots initially
//   const [formData, setFormData] = useState({
//     carnumber: "",
//     entrydate: "",
//     entrytime: "",
//     exitdate: "",
//     area: selectedParking.RoadName || "",
//     slot: "",
//     amount: selectedParking.Cost || "",
//   });

//   // useEffect(() => {
//   //   setFormData({
//   //     ...formData,
//   //     area: selectedParking.RoadName || "",
//   //     amount: selectedParking.Cost || ""
//   //   });
//   // }, [selectedParking]);

//   useEffect(() => {
//     // Only update formData if selectedParking values differ
//     if (
//       formData.area !== (selectedParking.RoadName || "") ||
//       formData.amount !== (selectedParking.Cost || "")
//     ) {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         area: selectedParking.RoadName || "",
//         amount: selectedParking.Cost || "",
//       }));
//     }
//   }, [selectedParking]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: formData,
//   });

//   const checkSlotAvailability = async (area, slot) => {
//     try {
//       const res = await axios.get("http://localhost:4001/book/check-slot", {
//         params: { area, slot },
//       });
//       return res.status === 200;
//     } catch (err) {
//       return false;
//     }
//   };

//   const filterAvailableSlots = async () => {
//     const slots = [1, 2, 3, 4];
//     const filteredSlots = [];
//     for (const slot of slots) {
//       const isAvailable = await checkSlotAvailability(formData.area, slot);
//       if (isAvailable) {
//         filteredSlots.push(slot);
//       }
//     }
//     setAvailableSlots(filteredSlots);
//   };

//   useEffect(() => {
//     if (formData.area) {
//       filterAvailableSlots();
//     }
//   }, [formData.area]);

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

//   const onSubmit = async (data) => {
//     // setLoading(true);
//     const regInfo = {
//       carnumber: data.carnumber,
//       entrydate: data.entrydate,
//       entrytime: data.entrytime,
//       exitdate: data.exitdate,
//       area: data.area,
//       slot: data.slot,
//       amount: data.amount,
//     };
//     document.getElementById("my_modal_4").close();
//     toast.success("Parking slot selected successful Now Make Payment");
//     // document.getElementById("my_modal_7").showModal()
//     console.log("HII")
//     setBookingData(regInfo);
//     setShowPayment(true);
//     // try {
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
//   };

//   return (
//     <div>
//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             <Link
//               to="/Help"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_4").close()}
//             >
//               ✕
//             </Link>

//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm bg-base-100">
//                 {/* Car Number */}
//                 <div className="mt-4 space-y-2">
//                   <span>Car Number</span>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Enter your Car Number"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("carnumber", { required: true })}
//                   />
//                   {errors.carnumber && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Entry Date */}
//                 <div className="mt-4 space-y-2">
//                   <span>Entry Date</span>
//                   <br />
//                   <input
//                     type="date"
//                     placeholder="Enter your Entry Date"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("entrydate", { required: true })}
//                   />
//                   {errors.entrydate && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Entry Time */}
//                 <div className="mt-4 space-y-2">
//                   <span>Entry Time</span>
//                   <br />
//                   <input
//                     type="time"
//                     placeholder="Enter your Entry Time"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("entrytime", { required: true })}
//                   />
//                   {errors.entrytime && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Exit Date */}
//                 <div className="mt-4 space-y-2">
//                   <span>Exit Date</span>
//                   <br />
//                   <input
//                     type="date"
//                     placeholder="Enter your Exit Date"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("exitdate", { required: true })}
//                   />
//                   {errors.exitdate && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Parking Area */}
//                 <div className="mt-4 space-y-2">
//                   <span>Parking Area</span>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Enter The Area"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("area", { required: true })}
//                     defaultValue={formData.area}
//                     disabled
//                   />
//                   {errors.area && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Parking Slot Number */}
//                 <div className="mt-4 space-y-2">
//                   <span>Parking Slot Number</span>
//                   <br />
//                   <select
//                     className="select select-bordered select-info w-full max-w-xs"
//                     {...register("slot", { required: true })}
//                   >
//                     <option value="">Select a Slot</option>
//                     {availableSlots.map((slot) => (
//                       <option key={slot} value={slot}>
//                         {slot}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.slot && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Amount */}
//                 <div className="mt-4 space-y-2">
//                   <span>Amount</span>
//                   <br />
//                   <input
//                     type="number"
//                     placeholder="Enter your Amount"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("amount", { required: true })}
//                     defaultValue={formData.amount}
//                     disabled
//                   />
//                   {errors.amount && (
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Buttons */}
//                 <div className="pt-5 flex flex-col space-y-2">
//                   <button
//                     className="input-info w-full max-w-xs btn btn-outline btn-success"
//                     type="submit"
//                     disabled={loading}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//           {showPayment && bookingData && <Payment bookingData={bookingData} />}
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Booking;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Payment from "./Payment";

function Booking() {
  const [showPayment, setShowPayment] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([1, 2, 3, 4]);

  const selectedParking =
    JSON.parse(localStorage.getItem("selectedParking")) || {};

  const [formData, setFormData] = useState({
    carnumber: "",
    entrydate: "",
    entrytime: "",
    exitdate: "",
    area: selectedParking.RoadName || "",
    slot: "",
    amount: selectedParking.Cost || "",
  });

  useEffect(() => {
    if (
      formData.area !== (selectedParking.RoadName || "") ||
      formData.amount !== (selectedParking.Cost || "")
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        area: selectedParking.RoadName || "",
        amount: selectedParking.Cost || "",
      }));
    }
  }, [selectedParking]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const checkSlotAvailability = async (area, slot) => {
    try {
      const res = await axios.get("http://localhost:4001/book/check-slot", {
        params: { area, slot },
      });
      return res.status === 200;
    } catch (err) {
      return false;
    }
  };

  const filterAvailableSlots = async () => {
    const slots = [1, 2, 3, 4];
    const filteredSlots = [];

    for (const slot of slots) {
      const isAvailable = await checkSlotAvailability(formData.area, slot);
      if (isAvailable) {
        filteredSlots.push(slot);
      }
    }
    setAvailableSlots(filteredSlots);
  };

  useEffect(() => {
    if (formData.area) {
      filterAvailableSlots();
    }
  }, [formData.area]);

  const onSubmit = async (data) => {
    setLoading(true);

    const regInfo = {
      carnumber: data.carnumber,
      entrydate: data.entrydate,
      entrytime: data.entrytime,
      exitdate: data.exitdate,
      area: data.area,
      slot: data.slot,
      amount: data.amount,
    };

    try {
      document.getElementById("my_modal_4").close();
      toast.success("Parking slot selected successfully. Now Make Payment");
      // Save booking data and show the Payment component
      setBookingData(regInfo);
      setShowPayment(true);
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </Link>

            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm bg-base-100">
                <div className="mt-4 space-y-2">
                  <span>Car Number</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Car Number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("carnumber", { required: true })}
                  />
                  {errors.carnumber && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Entry Date</span>
                  <br />
                  <input
                    type="date"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("entrydate", { required: true })}
                  />
                  {errors.entrydate && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Entry Time</span>
                  <br />
                  <input
                    type="time"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("entrytime", { required: true })}
                  />
                  {errors.entrytime && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Exit Date</span>
                  <br />
                  <input
                    type="date"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("exitdate", { required: true })}
                  />
                  {errors.exitdate && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Parking Area</span>
                  <br />
                  <input
                    type="text"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("area", { required: true })}
                    defaultValue={formData.area}
                    disabled
                  />
                  {errors.area && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Parking Slot Number</span>
                  <br />
                  <select
                    className="select select-bordered select-info w-full max-w-xs"
                    {...register("slot", { required: true })}
                  >
                    <option value="">Select a Slot</option>
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.slot && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <span>Amount</span>
                  <br />
                  <input
                    type="number"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("amount", { required: true })}
                    defaultValue={formData.amount}
                    disabled
                  />
                  {errors.amount && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="pt-5 flex flex-col space-y-2">
                  <button
                    className="btn btn-outline btn-success w-full max-w-xs"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>

      {showPayment && bookingData && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className=" p-5 rounded-lg">
            <Payment bookingData={bookingData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
