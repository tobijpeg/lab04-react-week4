import ArticleItem from "./ArticleItem";

type Article = {
    id: number;
    title: string;
    summary: string;
};

type Props = {
    articles: Article[];
    onClickRemove: (id: number) => void;
};

function ArticleList({ articles, onClickRemove }: Props) {
    return (
        <ul style={{ paddingLeft: 18 }}>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} onClickRemove={onClickRemove} />
            ))}
        </ul>
    );
}

export default ArticleList;