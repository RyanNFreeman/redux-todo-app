const reducer = (state, action) => {
    //given a type of action
    //do that action. So you can use an if statement, ternary would not really work, switch is best.
    switch(action.type) {
        default: return state //almost always will be return state.
    }
} //only thing you need on an action is a type.


export default reducer