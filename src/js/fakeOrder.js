import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { writable } from "svelte/store";
import { f7 } from 'framework7-svelte';

export const orderStatusStore = writable(null);

//const orderUrl = "http://localhost:5165/order";
const orderUrl = "https://droneapiweb20240125135113.azurewebsites.net/order";
let businessLocation = "";
let dropoffLocation = "";
let orderStatus = "";
let ongoingOrder = false;
let orderCancelled = false;
let orderCompleted = false;
let intervalId;

const manageOrders = () => {
  const store = writable(null);

  async function getAllOrders() {
    try {
      const response = await axios.get(`${orderUrl}`);

      if (response.status === 200) {
        console.log("All orders:", response.data);
        return response.data;
      } else {
        console.log(
          "Error getting all orders:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error getting all orders:", error);
    }
  }

  const createFakeOrder = async (businessLocation, dropoffLocation) => {
    const fakeOrder = {
      id: uuidv4(), //Generate a GUID for the order
      businessLocation: businessLocation,
      dropoffLocation: dropoffLocation,
    };
    console.log(fakeOrder);

    try {
      const response = await axios.post(`${orderUrl}/`, fakeOrder);

      if (response.status === 200 || response.status === 201) {
        console.log("Order created successfully:", response.data);
      } else {
        console.log("Error creating order:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  async function getOrderStatus() {
    try {
      const response = await axios.get(`${orderUrl}/orderStatus`);

      if (response.status === 200) {
        orderStatus = response.data;
        console.log("Order status:", response.data);

        if (response.data === "Order Completed") {
          await completeOrder();
        }
      } else {
        console.log(
          "Error getting order status:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error getting order status:", error);
    }
  }

  function startOrderStatusUpdates() {
    if (intervalId) {
      clearInterval(intervalId);
    }

    orderStatusStore.set(orderStatus);

    intervalId = setInterval(async () => {
      
      await getOrderStatus();
      let orderstatus_Notification;
			orderstatus_Notification = f7.notification.create({
				icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>',
				title: "Order Status!",
				text: orderStatus,
				closeTimeout: 3000,
			});
      orderstatus_Notification.open();
      orderStatusStore.set(orderStatus);
    }, 5000);
  }

  async function handleOrderStart() {
    await createFakeOrder();
    await startOrderStatusUpdates();
    orderCancelled = false;
  }

  async function cancelOrder() {
    try {
      const response = await axios.post(`${orderUrl}/cancelOrder`);
      clearInterval(intervalId);
      orderStatus = null;

      if (response.status === 200) {
        orderCancelled = true;
        console.log("Order cancelled successfully:", response.data);
      } else {
        console.log("Error cancelling order:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  }

  async function completeOrder() {
    try {
      const response = await axios.post(`${orderUrl}/completeOrder`);
      clearInterval(intervalId);

      if (response.status === 200) {
        console.log("Order completed successfully:", response.data);
      } else {
        console.log("Error completing order:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error completing order:", error);
    }
  }

  return {
    subscribe: store.subscribe,
    getAllOrders,
    createFakeOrder,
    getOrderStatus,
    startOrderStatusUpdates,
    handleOrderStart,
    cancelOrder,
    completeOrder,
  };
};

export const orders = manageOrders();
