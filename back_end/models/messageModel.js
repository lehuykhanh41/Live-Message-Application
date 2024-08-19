import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true
    },
    message: {
        type: String,
        require: true,
    }

}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;