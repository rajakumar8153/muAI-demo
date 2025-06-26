// Redux slice for devices (if using Redux)
export const initialState = {
  devices: [],
};

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
