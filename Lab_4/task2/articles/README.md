# Lab 4.2 — Articles (Refactoring)

## Components

- **ArticleManager**: stores articles state, handles add/remove, passes props
- **AddArticle**: form UI for adding articles (title + summary)
- **ArticleList**: renders list of articles
- **ArticleItem**: local `useState` controls opening/closing the summary

## Key point

Each `ArticleItem` manages its own opened/closed state (local state), not the parent component.
