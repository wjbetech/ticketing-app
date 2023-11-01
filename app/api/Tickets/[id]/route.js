import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
	try {
		const { id } = params;

		const foundTicket = await Ticket.findOne({
			_id: id,
		});

		return NextResponse.json(foundTicket, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error",
				error,
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Ticket.findByIdAndDelete(id);
		return NextResponse.json(
			{ message: "Successfully deleted ticket" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error!", error },
			{ status: 500 }
		);
	}
}

export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const data = await req.json();
		const ticketData = data.formData;

		const updateTicketData =
			await Ticket.findByIdAndUpdate(id, {
				...ticketData,
			});

		return NextResponse.json(
			{
				message: "Ticket successfully updated!",
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Could not update ticket" },
			{ status: 500 }
		);
	}
}
