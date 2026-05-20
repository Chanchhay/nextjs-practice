export default async function DynamicDashboard({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div>
            <h1>Dynamic Dashboard: {slug}</h1>
        </div>
    );
}
