export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log("Type: ", action.type);
    console.log("Payload: ", action.payload);
    console.log("CurrentState: ", store.getState());

    // calling the next subsequent middleware
    next(action)

    console.log("NEXT_STATE: ", store.getState());

}