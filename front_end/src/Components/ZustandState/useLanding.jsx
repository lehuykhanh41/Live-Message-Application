import {create} from 'zustand';

// Is the current page landing page? Or is it another page?

const useLanding = create((set)=> ({
    isLanding: true,
    setLanding: (isLanding)=>(set({isLanding})),
}));

export default useLanding;