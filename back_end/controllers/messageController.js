import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const sendMessage = async (req, res, next) => {

    try {
        const {message} = req.body;
        const {receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        });

        if (!conversation) {

            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);

            // Save and update in MongoDB
            await Promise.all([newMessage.save(), conversation.save()]);
            res.status(200).json(newMessage);
        }


    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}

export const getMessage = async(req, res, next) => {
    try {

        const {receiverId} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        }).populate("messages"); // Populate return the actual objects stored in the array field.

        if (!conversation) {
            res.status(400).json({error: "Conversation does not exist."});
        }

        const messages = conversation.messages;
        if (messages) {
            res.status(200).json(messages);
        }

    } catch {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
}