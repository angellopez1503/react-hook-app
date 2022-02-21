const todoReducer = (state=[],action) => {
    

    switch (action.type) {
        case 'add':
            
            return [...state, action.payload];
        
        case 'delete':

            return state.filter(todo => todo.id !== action.payload);

        //     break;
        
        default:
            return state;
    }

}

export default todoReducer;