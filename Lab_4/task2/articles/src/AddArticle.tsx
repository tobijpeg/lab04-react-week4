type Props = {
    name: string;
    title: string;
    summary: string;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void;
};

function AddArticle({
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
}: Props) {
    return (
        <section>
            <h2 style={{ marginBottom: 10 }}>{name}</h2>

            <div style={{ display: "grid", gap: 10 }}>
                <input placeholder="Title" value={title} onChange={onChangeTitle} style={{ padding: 10 }} />
                <input
                    placeholder="Summary"
                    value={summary}
                    onChange={onChangeSummary}
                    style={{ padding: 10 }}
                />
                <button onClick={onClickAdd} style={{ padding: "10px 16px", cursor: "pointer" }}>
                    Add
                </button>
            </div>
        </section>
    );
}

export default AddArticle;