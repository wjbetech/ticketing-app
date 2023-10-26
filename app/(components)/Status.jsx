import React from "react";

const Status = ({ status }) => {
	return (
		<span
			className={`inline-block rounded-sm px-2 py-1 text-text text-xs font-semibold w-full text-center ${
				status === "Started"
					? "bg-cyan-700"
					: status === "Paused"
					? "bg-gray-500"
					: status === "Completed"
					? "bg-success"
					: "bg-red-700"
			}`}
		>
			{status}
		</span>
	);
};

export default Status;
