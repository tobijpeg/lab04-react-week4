import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

type Article = {
    id: number;
    title: string;
    summary: string;
};

function ArticleManager() {
    // Articles state (parent stores the array)
    const [articles, setArticles] = useState<Article[]>([
        { id: 1, title: "First article", summary: "This is the first summary." },
        { id: 2, title: "Second article", summary: "This is the second summary." },
    ]);

    // Form state for adding articles
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");

    // Add article
    function onClickAdd() {
        const trimmedTitle = title.trim();
        const trimmedSummary = summary.trim();

        if (!trimmedTitle || !trimmedSummary) return;

        const newArticle: Article = {
            id: Date.now(),
            title: trimmedTitle,
            summary: trimmedSummary,
        };

        setArticles((prev) => [newArticle, ...prev]);
        setTitle("");
        setSummary("");
    }

    // Remove article by id
    function onClickRemove(id: number) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
    }

    return (
        <div>
            <AddArticle
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={onClickAdd}
            />

            <hr style={{ margin: "18px 0" }} />

            <ArticleList articles={articles} onClickRemove={onClickRemove} />
        </div>
    );
}

export default ArticleManager;