import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
	return (
		<div className="p-6">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<TicketCard />
				<TicketCard />
				<TicketCard />
				<TicketCard />
			</div>
		</div>
	);
};

export default Dashboard;
