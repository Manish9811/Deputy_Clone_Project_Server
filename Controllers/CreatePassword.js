export const CreatePassword = (req,res) => {
  
    const {Password, ConfirmPassword} = req.body;


    const IsPasswordValidate = Password.length > 7 ? true : false;

    const IsPasswordMatch = Password == ConfirmPassword ? true : false;


    if(IsPasswordValidate){

        // Check if the password and confirm password is match


        if(IsPasswordMatch){

            // Save the user in the database
        }


        else{
            return res.status(404).json({
                Message : "Password must match with confirm password"
            })
        }
    }


    else{
        return res.status(400).json({
            Message : "Password must contain 8 chars"
        })
    }




}

