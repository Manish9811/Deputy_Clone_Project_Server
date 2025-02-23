import { OtpData } from "../Models/RegisterationOtp.js";
import jwt from 'jsonwebtoken'
import CreateAdmin from "./CreateAdmin.js";

const OtpVerification = async (req,res) => {

    const tokenAuth = req.headers.authorization;
    if (!tokenAuth || tokenAuth != process.env.Secret_key) return res.status(404).json({ messsage: "Unauthorized token" });

    const {OtpToken,UserInputOtp,AdminName, BusinessEmail, Password} = req.body;
  
    if(!OtpToken) return res.status(400).json({Message : "Redirect"})

    if(!UserInputOtp) return res.status(404).json({Message : "Otp required"});

    if(UserInputOtp && OtpToken) {
        // find the user email in database and check otp was correct or not

        try{
        const FindUserOtp = await OtpData.findAll({where:{Otp_Requested_By : OtpToken}});
        
        const FindData = FindUserOtp[0];

        const SavedOtp = jwt.verify(FindData.Otp, process.env.Secret_key).Otp;

       
        const IsUserOtpMatch = UserInputOtp === SavedOtp ? true : false;

        if(IsUserOtpMatch) {
            
            CreateAdmin(req,res,AdminName, BusinessEmail, Password);
        }

        else return res.status(404).json({Message : "Otp doesn't match"});

        }

        catch(e){
            return res.status(404).json({
                Message : "Server Error ! Please re register",
                redirect : true
            })
        }
        
    }

  
}

export default OtpVerification