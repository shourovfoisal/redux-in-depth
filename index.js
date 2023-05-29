const CAKE_ORDERED = "CAKE_ORDERED";

/**
 * action is the specification
 * reducer is the implementation
 * action creator's job is just to return the action
 * an action object only needs just a "type" property
 * although we can add any property to it, like "quantity"
 */

// action creator
function orderCake() {
    // action
    return {
        type: "CAKE_ORDERED",
        quantity: 1
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}