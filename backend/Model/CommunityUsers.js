import mongoose from "mongoose";;

const CommunityUsers = mongoose.Schema({
    Username:{type:String,required:true,unique:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
},{ timestamps: true })

const RegisterUser = new mongoose.model('RegisteredUsers',CommunityUsers);

export default RegisterUser;
