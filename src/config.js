module.exports = {
    NEWSAPI_KEY:
        localStorage.getItem("newsapi_key") ||
        "0868d8876ce94ef0858efb79c21af261",
    NEWSAPI_ENDPOINT: "https://newsapi.org/v2/",
    NEWSAPI_HEADLINES: "top-headlines?country=us&apiKey=",
    NEWSAPI_SEARCH: "everything?q=SEARCH_QUERY&apiKey=",
    GITHUB_REPO_URL: "https://github.com/intern0t/curated",
    LOCAL_STORAGE: {
        API_KEY: "newsapi_key",
        BOOKMARKED_KEY: "bookmarked"
    }
};
