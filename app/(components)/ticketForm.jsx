"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
	// build our default ticket
	const startingTicketData = {
		title: "",
		description: "",
		priority: 1,
		progress: 0,
		status: "Unstarted",
		category: "Hardware Problem",
	};

	// state handler
	const [formData, setFormData] = useState(
		startingTicketData
	);

	// functionality
	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// return our component
	return (
		<div className="flex justify-center">
			<form>
				<h3>Create Ticket</h3>
				<label>Title</label>
				<input
					id="title"
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>
			</form>
		</div>
	);
};

export default TicketForm;
