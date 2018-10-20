import {
    FETCH_NEWS,
    SEARCH_NEWS,
    CHANGE_PAGE,
    TOGGLE_BOOKMARK,
    INITIALIZE_BOOKMARKS,
    VIEW_CHANGE
} from "../actions/types";

const initialState = {
    news: [],
    bookmarked: [],
    apiIndex: "NEWSAPI_HEADLINES",
    searchKeyword: "",
    currentViewIsNews: true,
    page: {
        current: 1,
        end: 1
    }
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
            const _included = state.bookmarked.some(
                bookmark =>
                    bookmark.title === action.payload.newspayload.title &&
                    bookmark.publishedAt ===
                        action.payload.newspayload.publishedAt &&
                    bookmark.description ===
                        action.payload.newspayload.description &&
                    bookmark.content === action.payload.newspayload.content
            );

            if (_included) {
                // Our bookmarked has the news, means remove = return the bookmarked without the passed news.
                return {
                    ...state,
                    ...{
                        bookmarked: state.bookmarked.filter(
                            news =>
                                news.title !==
                                    action.payload.newspayload.title &&
                                news.publishedAt !==
                                    action.payload.newspayload.publishedAt &&
                                news.description !==
                                    action.payload.newspayload.description &&
                                news.content !==
                                    action.payload.newspayload.content
                        )
                    }
                };
            } else {
                // Our bookmarked does not have the news, return the bookmarked + our news.
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
        case INITIALIZE_BOOKMARKS:
            return {
                ...state,
                ...{
                    bookmarked: action.payload.bookmarked
                }
            };
        case VIEW_CHANGE:
            return {
                ...state,
                ...{
                    currentViewIsNews: !state.currentViewIsNews
                }
            };
        default:
            return state;
    }
};
