import React from 'react'
import { useState } from 'react';
import {toast} from 'react-toastify';
import { useVerifiedContext } from '../Context/VerifiedContext';

function useSignUp() {
    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useVerifiedContext();

    function checkForInputs(inputs) {
        if (!inputs.name || !inputs.username || !inputs.password || !inputs.pwverify) {
            alert(`All fields must be filled`);
            return false;
        } 

        if (inputs.password !== inputs.pwverify) {
            alert(`Password mismatch`);
            return false;
        }

        return true;
    }

    const signUp = async(inputs) => {

        const evalResult = checkForInputs(inputs);

        if (!evalResult) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inputs),
            });

            const data = await res.json();

            if (data) {
                toast.success(`Registration Success ! Welcome ${data.name}`);
                localStorage.setItem("currUser", JSON.stringify(data));
                setCurrUser(data);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    } 

    return {loading, signUp}
}

export default useSignUp;