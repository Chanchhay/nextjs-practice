export default async function CatchAllRoutes({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    return (
        <>
            <h1>Catch all segments: {slug}</h1>
        </>
    );
}
