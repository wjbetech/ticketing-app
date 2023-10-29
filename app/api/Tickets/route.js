import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		// create our ticket
		const body = await req.json();
		const ticketData = body.formData;
		await Ticket.create(ticketData);

		// return success of ticket creation
		return NextResponse.json(
			{ message: "Ticket created!" },
			{ status: 201 }
		);
	} catch (error) {
		// send our sanitary error
		return NextResponse.json(
			{ message: "Error", error },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		// get all of our tickets
		const tickets = await Ticket.find();
		return NextResponse.json(
			{ tickets },
			{ status: 200 }
		);
	} catch (error) {
		// send our sanitary error
		return NextResponse.json(
			{ message: "Error", error },
			{ status: 500 }
		);
	}
}
