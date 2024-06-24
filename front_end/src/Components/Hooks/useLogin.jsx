import React from 'react';
import { useState } from 'react';
import { useVerifiedContext } from '../Context/VerifiedContext';

function useLogin() {

    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useVerifiedContext();

    function checkForLoginInputs(inputs) {
        if (!inputs.username || !inputs.password) {
            alert("Please fill all fields.");
            return false;
        }

        return true;
    }

    async function issueLogin(inputs) {
        const checkResult = checkForLoginInputs(inputs);

        if (!checkResult) {
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("http://localhost:7000/api/auth/login", {
                method: "POST",
                header: {"Content-Type": "application/json"},
                body: JSON.stringify(inputs),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            if (data.username) {
                setCurrUser(data);
                localStorage.setItem("currUser", JSON.stringify(data));
            } else {
                alert(data.message);
            }
            
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }


  return {loading, issueLogin};
}

export default useLogin;