import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = ({ priority }) => {
	return (
		<div className="flex justify-start align-baseline items-baseline">
			<FontAwesomeIcon
				icon={faFire}
				className={`${
					priority === 1
						? "text-sm text-red-300"
						: priority === 2
						? "text-md text-red-400"
						: priority === 3
						? "text-lg text-orange-500"
						: priority === 4
						? "text-xl text-orange-600"
						: "text-2xl text-red-700"
				}`}
			/>
		</div>
	);
};

export default PriorityDisplay;
