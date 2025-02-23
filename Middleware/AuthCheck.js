import { AdminRegistration } from "../Models/AdminRegistration.js";

const AuthCheck = async (req,res) => {
    

    const UserLoginToken = req.cookies.Token;

    try{
    const SearchAdmin = await AdminRegistration.findAll({where:{AdminLoginToken : UserLoginToken}});


    if(SearchAdmin && SearchAdmin[0].AdminName) {
        return res.status(200).json({
            Message : "User Found"
        })
    }

}
catch(e){
    return res.status(404).json({
        Message : "No User Found"
    })
}

}

export default AuthCheck