"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = ({ ticket }) => {
	const EDITING =
		ticket._id === "new" ? false : true;

	// router
	const router = useRouter();

	// build our default ticket
	const startingTicketData = {
		title: "",
		description: "",
		priority: 1,
		progress: 0,
		status: "Unstarted",
		category: "Hardware Problem",
	};

	if (EDITING) {
		startingTicketData["title"] = ticket.title;
		startingTicketData["description"] =
			ticket.description;
		startingTicketData["priority"] =
			ticket.priority;
		startingTicketData["progress"] =
			ticket.progress;
		startingTicketData["status"] = ticket.status;
		startingTicketData["category"] =
			ticket.category;
	}

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/Tickets", {
			method: "POST",
			body: JSON.stringify({ formData }),
			"content-type": "application/json",
		});
		if (!res.ok) {
			throw new Error(
				"Failed to create new ticket"
			);
		}
		router.refresh();
		router.push("/");
	};

	// return our component
	return (
		<div className="flex justify-center mt-8 w-[75%] mx-auto">
			<form
				className="flex flex-col gap-3 w-1/2"
				method="post"
				onSubmit={handleSubmit}
			>
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
				<label>Description</label>
				<textarea
					id="description"
					name="description"
					rows={3}
					value={formData.description}
					onChange={handleChange}
					required
				/>
				<label>Category</label>
				<select
					name="category"
					id="category"
					value={formData.category}
					onChange={handleChange}
				>
					<option value="Hardware Problem">
						Hardware Problem
					</option>
					<option value="Software Problem">
						Software Problem
					</option>
					<option value="Project">Project</option>
					<option value="Other">Other</option>
				</select>
				<label>Priority</label>
				<div className="priority-radio">
					<input
						id="priority-1"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={1}
						checked={formData.priority == 1}
					/>
					<label>1</label>
					<input
						id="priority-2"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={2}
						checked={formData.priority == 2}
					/>
					<label>2</label>
					<input
						id="priority-3"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={3}
						checked={formData.priority == 3}
					/>
					<label>3</label>
					<input
						id="priority-4"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={4}
						checked={formData.priority == 4}
					/>
					<label>4</label>
					<input
						id="priority-5"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={5}
						checked={formData.priority == 5}
					/>
					<label>5</label>
				</div>
				<label>Progress</label>
				<input
					type="range"
					name="progress"
					id="progress"
					value={formData.progress}
					min={0}
					max={100}
					onChange={handleChange}
				/>
				<label>Status</label>
				<select
					name="status"
					id="status"
					value={formData.status}
					onChange={handleChange}
				>
					<option value="Not started">
						Not Started
					</option>
					<option value="Started">Started</option>
					<option value="Paused">Paused</option>
					<option value="Completed">
						Completed
					</option>
				</select>
				<input
					type="submit"
					className="button"
					value="Create Ticket"
				/>
			</form>
		</div>
	);
};

export default TicketForm;
