import User from '../models/userModel.js';
import Conversation from '../models/conversationModel.js';

export const getSingleConversations = async (req, res, next) => {

    try {

        const currentUserId = req.user._id;
        const singleConversations = await Conversation.find({participants: {$size: 2, $all: [currentUserId]}});

        if (!singleConversations) {
            res.status(500).json({error: "Single Conversation Getters Error"});
            console.log(error);
        } else {
            res.status(200).json(singleConversations);
        }

    } catch (error) {
        res.status(500).json({error: "Single conversation Server Error"});
        console.log(error);
    }

    next();
};

export const getGroupConversations = async (req, res, next) => {

    try {

        const currentUserId = req.user._id;
        const groupConversations = await Conversation.find({participants: {$all: [currentUserId]}, name: {$ne: "Private Chat"}});

        if (!groupConversations) {
            res.status(500).json({error: "User Database Error"});
            console.log(error);
        } else {
            res.status(200).json(groupConversations);
        }

    } catch (error) {
        res.status(500).json({error: "Group conversation Server Error)"});
        console.log(error);
    }

    next();
};

export const createConversation = async (req, res, next) => {

    try {
        const senderId = req.user._id;
        const {conversationName, participants} = req.body;


        // Convert from username search to user ID.
        const participantsId = participants;

        let conversation = await Conversation.create({
            name: conversationName,
            participants: [senderId, ...participantsId],
            admins: [senderId],
        });

        await Promise.all([User.updateOne({_id: senderId}, {$push: {groupConversations: conversation._id}}), conversation.save()]);

        for (let i = 0; i < participantsId.length; i++) {
            await User.updateOne({_id: participantsId[i]}, {$push: {groupConversations: conversation._id}});
        }
        
        res.status(200).json({id: conversation._id, paricipants: participantsId});
        
    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}


export const addPersonToConversation = async (req, res, next) => {

    try {
        const senderId = req.user._id;
        const {conversationId} = req.params;
        const {participants} = req.body;

        // Convert from username search to user ID.
        const participantsId = participants;

        await Conversation.updateOne({_id: conversationId}, {$push: {participants: [...participantsId]}})

        for (let j = 0; j < participantsId.length; j++) {
            await (User.updateOne({_id: participantsId[j]}, {$push: {groupConversations: conversationId}}));
        }   
                
        res.status(200).json({message: `Person ${participants} added successfully from Conversation ${conversationId}`});
        
    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}

// Remove one at a time !

export const removePersonFromConversation = async (req, res, next) => {

    try {
        const senderId = req.user._id;
        const {conversationId} = req.params;
        const {participants} = req.body;

        // Convert from username search to user ID.

        await Conversation.updateOne({_id: conversationId}, {$pull: {participants: participants}});
        await (User.updateOne({_id: participants}, {$pull: {groupConversations: conversationId}}));                
        res.status(200).json({message: `Person ${participants} removed successfully from Conversation ${conversationId}`});
        
    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}


export const viewPeopleInConversation = async (req, res, next) => {

    try {
        const senderId = req.user._id;
        const {conversationId} = req.params;

        // Convert from username search to user ID.

        const peopleList = await Conversation.findOne({_id: conversationId}).populate("participants");
       if (peopleList) {
            res.status(200).json(peopleList.participants);
       } else {
            res.status(404).json({error: "Conversation Not Found"});
       }
        
    } catch (error) {
        res.status(500).json({error: "Server Error (Message)"});
        console.log(error);
    }
    
    next();
}