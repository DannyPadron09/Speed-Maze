
const initialState = {
    Squares: [],
}

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_SQUARES':
            return {
                ...action.payload
            } 

        default:
            return state 
    }
}

export default CourseReducer 