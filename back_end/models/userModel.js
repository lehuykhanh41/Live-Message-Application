import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    avatar: {
        type: String,
        default: "",
    },

    singleConversations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
            default: [],
        },
    ],

    groupConversations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
            default: [],
        },
    ]

}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;