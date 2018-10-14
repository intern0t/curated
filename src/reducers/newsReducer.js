import { FETCH_NEWS } from "../actions/types";

const initialState = {
    news: [],
    apiIndex: "top-headlines",
    searchKeyword: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                ...{ news: action.payload.news }
            };
        default:
            return state;
    }
};
