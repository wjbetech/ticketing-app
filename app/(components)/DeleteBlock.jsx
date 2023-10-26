import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const DeleteBlock = () => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faX}
				className="bg-inherit cursor-pointer text-text"
			/>
		</div>
	);
};

export default DeleteBlock;
