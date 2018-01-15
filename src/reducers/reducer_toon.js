export default function(state = [], action) {
    console.log("action at reducer", action);
    switch(action.type) {
    case "FETCH_TOONS":
        return action.payload;
    }
    return state;
}