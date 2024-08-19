import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";
import User from "../models/userModel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import {io} from "../socket/socket.js"

export const sendMessage = async (req, res, next) => {

    try {
        const {message} = req.body;
        const {receiverId} = req.params; // receiverId here is the person's id
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
            admins: [],
        });

        if (!conversation) {
            
            // How to put receiver name as the private chat's name?
            // Query for the receiver name from getAllUsers, then get the name and put it on.

            conversation = await Conversation.create({
                name: "Private Chat",
                participants: [senderId, receiverId],
            });

            await Promise.all([User.updateOne({_id: senderId}, {$push: {singleConversations: conversation._id}}), User.updateOne({_id: receiverId}, {$push: {singleConversations: conversation._id}})])
        } 

        let conversationId = conversation._id;
        const newMessage = new Message({
            senderId,
            conversationId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);

            // Save and update in MongoDB
            await Promise.all([newMessage.save(), conversation.save()]);

            const receiverSocketId = getReceiverSocketId(receiverId);

            if (receiverSocketId) {
                io.to(receiverSocketId).emit("newMessage", newMessage);
            }

            res.status(200).json(newMessage);
        }

    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}

export const sendGroupMessage = async (req, res, next) => {

    try {
        const {message} = req.body;
        const {conversationId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            _id: conversationId
        });

        if (conversation) {

            const newMessage = new Message({
                senderId,
                conversationId,
                message,
            });
    
            if (newMessage) {
                conversation.messages.push(newMessage._id);
    
                // Save and update in MongoDB
                await Promise.all([newMessage.save(), conversation.save()]);
    
                const chatParticipants = conversation.participants;
                for (let i = 0; i < chatParticipants.length; i++) {
                    const receiverSocketId = getReceiverSocketId(chatParticipants[i]);

                    if (receiverSocketId != senderId) {
                        io.to(receiverSocketId).emit("newMessage", newMessage);
                    }
                }
                
    
                res.status(200).json(newMessage);
            }
            
            
        } else {
            res.status(404).json({error: "Conversation does not exist."})
        }
        

    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}

export const getMessage = async(req, res, next) => {
    try {

        const {conversationId} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            _id: conversationId,
        }).populate("messages"); // Populate return the actual objects stored in the array field.

        if (!conversation) {
            res.status(404).json({error: "Conversation does not exist."});
        } else {
            const messages = conversation.messages;
            if (messages) {
                res.status(200).json(messages);
            }
        }

    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
}