import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faTicket,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<nav className="flex justify-evenly items-baseline py-2 px-8 bg-navbar text-text">
			<div className="flex flex-1 space-x-4">
				<Link href="/">
					<FontAwesomeIcon
						icon={faHome}
						className="icon"
					/>
				</Link>
				<Link href="/TicketPage/new">
					<FontAwesomeIcon
						icon={faTicket}
						className="icon"
					/>
				</Link>
			</div>
			<div className="flex flex-1">
				<h1 className="text-2xl">Ticketeer</h1>
			</div>
			<div className="">
				<p className="text-sm">
					wjbetech@gmail.com
				</p>
			</div>
		</nav>
	);
};

export default NavBar;
