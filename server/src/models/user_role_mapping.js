const mongoose = require("mongoose");
 

const user_role_mappingSchema = mongoose.Schema(
     {
        userId :{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "User"
        },
	   roleId :{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "Role"
        },
     },
    {
        timestamps: true,
        collection: "User_role_mapping",
    }
);
user_role_mappingSchema.index({"$**": "text"});

 
const User_role_mapping = mongoose.model("User_role_mapping", user_role_mappingSchema);

module.exports = User_role_mapping; 