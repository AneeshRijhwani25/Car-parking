import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Payment from "./Payment";

function CarParkingArea() {
  const [parkingStatus, setParkingStatus] = useState([]);
  const amount = 100;
  // useEffect(() => {
  //   const fetchParkingStatus = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://127.0.0.1:5000/parking-status",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       setParkingStatus(response.data);
  //     } catch (error) {
  //       //  console.error('Error fetching parking status:', error);
  //     }
  //   };

  //   fetchParkingStatus();
  //   const interval = setInterval(fetchParkingStatus, 1000); // Fetch every 5 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:4001/orders/order", {
        amount,
      });
      // console.log("Before res");
      console.log(res.data);
      console.log(amount);
      // console.log("After res");
      handlePaymentVerify(res.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentVerify = async (data) => {
    const options = {
      key: "rzp_test_cNnJMfX0H3YkDr",
      amount: data.amount,
      currency: data.currency,
      name: "Harsh",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          // console.log("Before axios");
          const res = await axios.post("http://localhost:4001/orders/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          // console.log("After axios");

          const verifyData = res.data;

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const styles = {
    app: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // Align items to the top
    },
    container: {
      display: "flex",
      justifyContent: "space-between", // Align items with space between them
      maxWidth: "1200px", // Max width of the container
      margin: "0 auto", // Center the container
      padding: "20px", // Add padding
    },
    parkingStatus: {
      flex: 1,
      // Take up remaining space
    },
    videoFeed: {
      flex: 1, // Take up remaining space
      marginLeft: "20px", // Add margin for spacing
    },
    space: {
      padding: "30px",
      margin: "5px",
      border: "1px solid #ccc",
      width: "400px",
      textAlign: "center",
    },
    freeSpace: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    occupiedSpace: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
    videoFeedImg: {
      maxWidth: "150%",
      height: "auto",
      border: "2px solid #ccc",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.parkingStatus}>
          <h1>Parking Space Status</h1>
          {parkingStatus.map((space, index) => (
            <div
              key={index}
              style={{
                ...styles.space,
                ...(space.status.toLowerCase() === "free"
                  ? styles.freeSpace
                  : styles.occupiedSpace),
              }}
            >
              {`Space ${space.space}: ${space.status}`}
            </div>
          ))}

          <div className="pt-10 ml-10 ">
            <button
              className="input-info w-full max-w-xs btn btn-outline btn-primary"
              onClick={handlePayment}
            >
              GO NOW
            </button>
          </div>
          <Payment />
        </div>

        <div className="mr-10 pr-10" style={styles.videoFeed}>
          <h1>Live Feed</h1>
          <img
            src="http://127.0.0.1:5000/video-feed"
            alt="Live Feed"
            style={styles.videoFeedImg}
          />
        </div>
      </div>

      <div className="mr-3 mt-2">
        <Link to="/Help">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarParkingArea;
