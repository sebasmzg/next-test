import type { NextApiRequest, NextApiResponse } from 'next'

export async function Login(req: NextApiRequest,res: NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).json({message: "Method not allowed"});
    }
    const { email, password } = req.body;
    try{
        const response = await fetch("https://simuate-test-backend-1.onrender.com/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
        });
        const data= await response.json();
        if(!response.ok){
            return res.status(response.status).json({message: data.message || "Invalid credentials"});
        }
        return res.status(200).json(data);
    } catch (error){
        return res.status(500).json({message: "Internal server error"});
    }
}