const User=require("../src/models/User")
const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD } = process.env;

async function createSuperAdmin() {
    const existingAdmin = await User.findOne({ email: SUPER_ADMIN_EMAIL });


    if (existingAdmin) {
        console.log('Super admin already exists');
        return;
    }

    const superAdmin = new User({
        email: SUPER_ADMIN_EMAIL,
        password:SUPER_ADMIN_PASSWORD,
        firstName:'admin',
        lastName:'admin',
        gender:"MALE",
        role: 'SUPER_ADMIN' // Assuming you have a role field in your User model
    });

    await superAdmin.save();
    console.log('Super admin created');
}

module.exports=createSuperAdmin;