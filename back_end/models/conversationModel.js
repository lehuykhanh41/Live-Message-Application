import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({

    name: {
        type: String,
        default: "",
    },

    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],

    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ],

    admins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        },
    ],



}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;