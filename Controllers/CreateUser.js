import validator from 'email-validator'

export const CreateUser = (req, res) => {

    const { Email, UserName, DOB } = req.body;

    // Validate email ?

    const IsEmailValidate = validator.validate(Email) ? true : false;

    if (IsEmailValidate) {
        // Check Username and DOB

        const IsFullFillAllData = UserName && DOB ? true : false;

        if (IsFullFillAllData) {

            // Send the email to the user and save the data in the database

        }

        else {
            return res.status(404).json({
                Message: "All Fields Required"
            })
        }

    }

    // Email Not Valid
    else {
        return res.status(404).json({
            Message: "Invalid email address"
        })
    }

}

