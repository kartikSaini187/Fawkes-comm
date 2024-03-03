const baseMongo = require('../models/baseMongo');
class User{
    constructor(){
    }
    userLogin(requestBody){
        if(requestBody.username === undefined || requestBody.password === undefined){
            return{"success":false,"message":"username or password is missing"}
        }
        const username = requestBody.username;
        const password = requestBody.password;
        if(username === "admin" && password === "narrate"){
            return {"success": true,"message":"Login Successfully"}
        }else{
            return {"success":false,"message":"Username or Password does not match"}
        }
    }

    async userSignup(requestBody) {
        try {
            const userColl = await baseMongo.getCollection('userDetails');
            const username = requestBody.username;
            const password = requestBody.password;
    
            const result = await userColl.insertOne({ username, password });
            console.log(result);
            if (result.acknowledged) {
                return { "success": true, "message": "Signup Successfully" };
            } else {
                return { "success": false, "message": "User not inserted" };
            }
        } catch (error) {
            console.error("Error in userSignup:", error);
            return { "success": false, "message": "An error occurred" };
        }
    }
    
}

const userInstance = new User();
module.exports = userInstance;