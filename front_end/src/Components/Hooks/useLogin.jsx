import React from 'react';
import { useState } from 'react';
import { useVerifiedContext } from '../Context/VerifiedContext';
import { toast } from 'react-toastify';

function useLogin() {

    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useVerifiedContext();

    function checkForLoginInputs(inputs) {
        if (!inputs.username || !inputs.password) {
            toast.error("Username or password is missing");
            return false;
        }
        return true;
    }

        const issueLogin = async (inputs) => {
        const checkResult = checkForLoginInputs(inputs);

        if (!checkResult) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inputs),
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            } else if (data.username) {
                setCurrUser(data);
                localStorage.setItem("currUser", JSON.stringify(data));
                toast.success(`Login successful. Welcome ${data.name}`);
            } else {
                toast.error(data.message)
            }
          
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }


  return {loading, issueLogin};
}

export default useLogin;