import React from "react";
import DeleteBlock from "./deleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

const TicketCard = () => {
	return (
		<div className="flex flex-col bg-card rounded-sm shadow-sm shadow-slate-300 p-3 m-2">
			<div className="flex mb-3 items-baseline justify-between">
				<PriorityDisplay />
				<DeleteBlock />
			</div>
			<h4>TICKET TITLE</h4>
			<hr className="h-1 border-0 bg-accent mb-2" />
			<p className="whitespace-pre-wrap">
				ticket description element
			</p>
			<div className="flex-grow"></div>
			<div className="flex mt-2">
				<div className="flex flex-col">
					<p className="text-xs my-1">
						[Date/Time]
					</p>
					<ProgressBar />
				</div>
				<div className="ml-auto flex items-end">
					<Status />
				</div>
			</div>
		</div>
	);
};

export default TicketCard;
