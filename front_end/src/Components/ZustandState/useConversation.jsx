import { create } from "zustand";

// Show which conversation is currently being selected.

const useConversation = create((set)=>({

    currentTab: 0,
    setCurrentTab: (currentTab)=>{set({currentTab});},
    
    // Which conversation is being selected?
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
   
    // Messages of the selected conversaton.
    // The initial data will be stored in the array, then mapped to components.
    messages: [],
    setMessages: (messages) => set({messages}),
}));

export default useConversation;