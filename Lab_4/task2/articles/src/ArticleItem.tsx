import { useState } from "react";

type Article = {
    id: number;
    title: string;
    summary: string;
};

type Props = {
    article: Article;
    onClickRemove: (id: number) => void;
};

function ArticleItem({ article, onClickRemove }: Props) {
    // Local state: each item controls its own opened/closed state
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function onClickToggle(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setIsOpened((prev) => !prev);
    }

    return (
        <li style={{ marginBottom: 12 }}>
            <a
                href={`#${article.id}`}
                title="Toggle Summary"
                onClick={onClickToggle}
                style={{ marginRight: 10 }}
            >
                {article.title}
            </a>

            <button onClick={() => onClickRemove(article.id)} style={{ cursor: "pointer" }}>
                ×
            </button>

            <p style={{ display: isOpened ? "block" : "none", margin: "8px 0 0" }}>
                {article.summary}
            </p>
        </li>
    );
}

export default ArticleItem;