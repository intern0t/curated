import { FETCH_NEWS, SEARCH_NEWS } from "../actions/types";

const initialState = {
    news: [],
    apiIndex: "NEWSAPI_HEADLINES",
    searchKeyword: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                ...{ news: action.payload.news }
            };
        case SEARCH_NEWS:
            return {
                ...state,
                ...{
                    searchKeyword: action.payload.searchKey,
                    apiIndex: action.payload.apiIndex
                }
            };
        default:
            return state;
    }
};
