import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECT);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
	{
		title: String,
		description: String,
		category: String,
		priority: Number,
		progress: Number,
		status: String,
		active: boolean,
	},
	{
		timestamps: true,
	}
);

const Ticket =
	mongoose.models.Ticket ||
	mongoose.model("Ticket", ticketSchema);
export default Ticket;
