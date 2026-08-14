interface PlaceholderPageProps {
    title: string;
}

function PlaceHolderPage({
    title,
}: PlaceholderPageProps) {
    return (
        <section className="placeholder-page">
            <h2>{title}</h2>

            <p>
                아직 구현하지 않았습니다.
            </p>
        </section>
    );
}

export default PlaceHolderPage;