import React from "react";
import DeleteBlock from "./deleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import moment from "moment/moment";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
	return (
		<div className="flex flex-col bg-card rounded-sm p-5 m-2">
			<div className="flex mb-3 items-baseline justify-between">
				<PriorityDisplay
					priority={ticket.priority}
				/>
				<DeleteBlock id={ticket._id} />
			</div>
			<div className="flex justify-between items-baseline py-4">
				<h4 className="">{ticket.title}</h4>
				<Link
					href={`/TicketPage/${ticket._id}`}
					className="bg-teal-700 hover:bg-teal-600 px-2 rounded-md"
				>
					Edit
				</Link>
			</div>
			<hr className="bg-gray-400 mb-2" />
			<p className="whitespace-pre-wrap">
				{ticket.description}
			</p>
			<div className="flex-grow"></div>
			<div className="flex mt-2 justify-between">
				<div className="flex flex-col w-[60%]">
					<p className="text-xs my-1">
						{`Created: `}
						{moment(ticket.createdAt).format(
							"MMM D YYYY"
						)}
					</p>
					<ProgressBar
						progress={ticket.progress}
					/>
				</div>
				<div className="flex items-end w-[35%] ml-auto">
					<Status status={ticket.status} />
				</div>
			</div>
		</div>
	);
};

export default TicketCard;
