import { AdminRegistration } from "../Models/AdminRegistration.js";
import {v4 as uuidv4} from 'uuid'

export const CreateAdmin = async (req, res, AdminName, BusinessEmail, Password) => {


    try{
        const token = uuidv4()

    const SaveAdminData = await AdminRegistration.create({
        AdminName: AdminName,

        AdminLoginToken: token,

        BusinessEmail: BusinessEmail,

        Password: Password,

        createdAt: Date.now(),

        updatedAt: Date.now()

    })

    if(SaveAdminData){
        res.cookie("Token",token,{
             httpOnly: true,  // Prevents client-side access
            secure: process.env.NODE_ENV === 'production',    // Only sent over HTTPS
            sameSite: 'lax', // Protects against CSRF
            maxAge: 2 * 60 * 1000000000 ,  
            path: '/'})
        return res.status(200).json({
            Message : "Profile Created Successfully"
        })
    }

    else{

        return res.status(404).json({
            Message : "Error Save Data"
        })
    }

}
catch(e){
    return res.status(404).json({
        Message : "Error Save Data"
    })
}
}

export default CreateAdmin