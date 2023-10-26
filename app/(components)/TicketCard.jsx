import React from "react";
import DeleteBlock from "./deleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import Ticket from "@/(models)/ticket";
import moment from "moment/moment";

const TicketCard = ({ ticket }) => {
	return (
		<div className="flex flex-col bg-card rounded-sm shadow-sm shadow-slate-300 p-3 m-2">
			<div className="flex mb-3 items-baseline justify-between">
				<PriorityDisplay
					priority={ticket.priority}
				/>
				<DeleteBlock />
			</div>
			<h4 className="pb-2">{ticket.title}</h4>
			<hr className="bg-gray-400 mb-2" />
			<p className="whitespace-pre-wrap">
				{ticket.description}
			</p>
			<div className="flex-grow"></div>
			<div className="flex mt-2 justify-between">
				<div className="flex flex-col w-[60%]">
					<p className="text-xs my-1">
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
