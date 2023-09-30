const initialState = {
    tasks: []
};

const rootReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'ADD_TASK':
            // console.log('ADD_TASK CODE 1:'+state.tasks);
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            
        case 'REMOVE_TASK':
            // console.log('REMOVE_TASK CODE 1:'+state.tasks);
            return {
                ...state,
                tasks: state.tasks.filter((task)=> task.id !==action.payload)
            };
            
        default:
            return state;
    }
};

export default rootReducer;