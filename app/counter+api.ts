let count = 0;

export async function GET() {
	return Response.json({ count: count++ });
}
