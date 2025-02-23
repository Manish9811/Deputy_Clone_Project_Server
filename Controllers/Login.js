import validator from "email-validator";

export const CreatePassword = (req,res) => {
  
    const {Email,Password} = req.body;

    if(Email && Password){

        // Validate the email

        const IsEmailValidate = validator.validate(Email) ? true : false;

        if(IsEmailValidate){
            
            // Search the email and password in database

        }

        else{
            return res.status(404).json({
                Message : "Email is not validate"
            })
        }



        // Search the email and password in database
    }

    else{
        return res.status(404).json({
            Message : "Email and Password Required"
        })
    }

}

