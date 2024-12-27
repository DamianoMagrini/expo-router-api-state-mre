function loop(i: number) {
	console.log('alive and looping, ' + i);
	setTimeout(() => {
		loop(i + 1);
	}, 1000);
}

loop(0);

export async function GET() {
	return Response.json({});
}
