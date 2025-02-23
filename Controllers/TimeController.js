export const TimeController = async (req, res) => {

    const {id} = req.body;

    const User = [
        {

            Id: 1, Name: "Manish Pokhrel", WorkPlace: "Chinise Rest", ShiftsDetails: [
               
                {
                    "ShiftStartTime": "2/16/2025, 16:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
                {
                    "ShiftStartTime": "2/18/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
                {
                    "ShiftStartTime": "2/19/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                }, {
                    "ShiftStartTime": "2/20/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
            ]
        },


        {
            Id: 2, Name: "Madhu Khanal", WorkPlace: "Japanese Rest", ShiftsDetails: [
                {
                    "ShiftStartTime": "2/16/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
                {
                    "ShiftStartTime": "2/17/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
                {
                    "ShiftStartTime": "2/18/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
                {
                    "ShiftStartTime": "2/19/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                }, {
                    "ShiftStartTime": "2/20/2025, 19:00:00",
                    "ShiftEndTime": "2/17/2025, 12:00:00"
                },
            ]
        }

    ]

    // Extracting the every shift details of login user


    const loginUserId = id;
    let isTodayShift = false;
    let todayShiftDetails = null;


    // Maping the user

    const loginUserShift = User[loginUserId];



  for(let i = 0 ; i <= User[loginUserId].ShiftsDetails.length -1 ; i++){
    const value = loginUserShift.ShiftsDetails[i];
    const index = i;
    console.log(value)

        if (new Date(value.ShiftStartTime).getFullYear() == new Date().getFullYear()
            && new Date(value.ShiftStartTime).getMonth() == new Date().getMonth()
            && new Date(value.ShiftStartTime).getDay() == new Date().getDay()
        ) {
           
            manageTime(value.ShiftStartTime, value.ShiftEndTime, res)
            break;
        }

        
        else if(index == User[loginUserId].ShiftsDetails.length - 1){
            manageTime(null, null, res)
            break
        }
    }    


}

function manageTime(ShiftStartTime, ShiftEndTime, res) {

    // check user is late or early to start shift
    if(!ShiftStartTime || !ShiftEndTime){
        return res.json({
            message : " No shift today"
        })
    }

    const staffShiftStartingTime = new Date(ShiftStartTime);
    const staffShiftEndingTime = new Date(ShiftEndTime);
    const currentDate = new Date();


    if (staffShiftStartingTime > currentDate) {

        // Calculate what time shift start

        const differenceTime = staffShiftStartingTime - currentDate

        const differentTimeInMs = Math.floor(differenceTime / (1000 * 60));



        const calculateHours = Math.floor(differentTimeInMs / 60)
        const differenceMinutes = differentTimeInMs % 60 + 1

        return res.json({
            message: `Shift start in ${calculateHours} hours and ${differenceMinutes} minutes`
        })
    }
    else {
        const differenceTime = currentDate - staffShiftStartingTime

        const differentTimeInMs = Math.floor(differenceTime / (1000 * 60));



        const calculateHours = Math.floor(differentTimeInMs / 60)
        const differenceMinutes = differentTimeInMs % 60

        return res.json({
            message: `Staff late by ${calculateHours} hours and ${differenceMinutes} minutes`
        })   
     }

}
export default TimeController
