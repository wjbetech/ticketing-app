import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
	try {
		const res = await fetch(
			"http://localhost:3000/api/Tickets",
			{
				cache: "no-store",
			}
		);
		return res.json();
	} catch (error) {
		console.log("Failed to get tickets", error);
	}
};

const Dashboard = async () => {
	// fetch tickets from getTickets above
	const { tickets } = await getTickets();
	const uniqueCategories = [
		// make a new set of unique tickets
		...new Set(
			// a set for each category of ticket
			tickets?.map(({ category }) => category)
		),
	];

	return (
		<div className="p-6">
			<div className="">
				{tickets &&
					uniqueCategories?.map(
						(uniqueCategory, categoryIndex) => (
							<div
								key={categoryIndex}
								className="mb-4"
							>
								<h2 className="p-2">
									{uniqueCategory}
								</h2>
								<div className="grid lg:grid-cols-2 xl:grid-cols-3">
									{tickets
										.filter(
											(ticket) =>
												ticket.category ===
												uniqueCategory
										)
										.map(
											(
												filteredTicket,
												_index
											) => (
												<TicketCard
													id={_index}
													key={_index}
													ticket={filteredTicket}
												/>
											)
										)}
								</div>
							</div>
						)
					)}
			</div>
		</div>
	);
};

export default Dashboard;
