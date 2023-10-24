import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = () => {
	return (
		<div className="flex justify-start align-baseline items-baseline">
			<FontAwesomeIcon
				icon={faFire}
				className="text-sm text-red-200"
			/>
			<FontAwesomeIcon
				icon={faFire}
				className="text-md text-red-300"
			/>
			<FontAwesomeIcon
				icon={faFire}
				className="text-lg text-orange-400"
			/>
			<FontAwesomeIcon
				icon={faFire}
				className="text-xl text-orange-500"
			/>
			<FontAwesomeIcon
				icon={faFire}
				className="text-2xl text-orange-600"
			/>
		</div>
	);
};

export default PriorityDisplay;
