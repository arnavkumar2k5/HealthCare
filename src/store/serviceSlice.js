import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const services = localStorage.getItem("services");
  return services
    ? JSON.parse(services)
    : [
        {
          id: 1,
          name: "HealthCare",
          description: "Welcome to HealthCare",
          price: "0",
        },
      ];
};

const saveToLocalStorage = (services) => {
  localStorage.setItem("services", JSON.stringify(services));
};

const initialState = {
  services: loadFromLocalStorage(),
};

export const serviceSlice = createSlice({
  name: "serviceAuth",
  initialState,
  reducers: {
    addService: (state, action) => {
      const service = {
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
      };
      state.services.push(service);
      saveToLocalStorage(state.services);
    },
    removeService: (state, action) => {
      state.services = state.services.filter(
        (service) => service.id !== action.payload
      );
      saveToLocalStorage(state.services);
    },
    editService: (state, action) => {
      const { id, name, description, price } = action.payload;
      const serviceIndex = state.services.findIndex(
        (service) => service.id === id
      );
      if (serviceIndex >= 0) {
        state.services[serviceIndex] = { id, name, description, price };
        saveToLocalStorage(state.services);
      }
    },
  },
});

export const { addService, removeService, editService } = serviceSlice.actions;

export default serviceSlice.reducer;
