import {
    FETCH_NEWS,
    SEARCH_NEWS,
    CHANGE_PAGE,
    TOGGLE_BOOKMARK
} from "../actions/types";

const initialState = {
    news: [],
    bookmarked: [],
    page: {
        current: 1,
        end: 1
    },
    apiIndex: "NEWSAPI_HEADLINES",
    searchKeyword: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                ...{
                    news: action.payload.news,
                    page: {
                        current: 1,
                        end: 1
                    }
                }
            };
        case SEARCH_NEWS:
            return {
                ...state,
                ...{
                    searchKeyword: action.payload.searchKey,
                    apiIndex: action.payload.apiIndex,
                    news: action.payload.news,
                    page: {
                        current: action.payload.page.current,
                        end: action.payload.page.end
                    }
                }
            };
        case CHANGE_PAGE:
            return {
                ...state,
                page: {
                    current: action.payload.page.current
                }
            };
        case TOGGLE_BOOKMARK:
            const _included = state.bookmarked.indexOf(
                action.payload.newspayload
            );
            if (_included >= 0) {
                return {
                    ...state,
                    ...{
                        bookmarked: state.bookmarked.filter(
                            news => news !== action.payload.newspayload
                        )
                    }
                };
            } else {
                return {
                    ...state,
                    ...{
                        bookmarked: [
                            ...state.bookmarked,
                            action.payload.newspayload
                        ]
                    }
                };
            }
        default:
            return state;
    }
};
