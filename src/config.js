module.exports = {
    NEWSAPI_KEY:
        localStorage.getItem("newsapi_key") ||
        "9cfe982cec6d46aba451c8d7aece560b",
    NEWSAPI_ENDPOINT: "https://newsapi.org/v2/",
    NEWSAPI_HEADLINES: "top-headlines?country=us&apiKey=",
    NEWSAPI_SEARCH: "everything?q=SEARCH_QUERY&apiKey=",
    GITHUB_REPO_URL: "https://github.com/intern0t/learning-react-redux"
};
