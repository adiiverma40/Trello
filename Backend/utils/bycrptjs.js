import bcrypt from "bcryptjs"

async function encrypt(password) {
    const salt = 10
    const hashed = await bcrypt.hash(password , salt)
    console.log("hashed text : ",hashed);
    return hashed
}

async function checkPassword(dbPassword , userPassword) {
    console.log('Database : ' , dbPassword , 'password : ' , userPassword);
    
    let passwordCheck = await bcrypt.compare(userPassword , dbPassword)
    console.log(passwordCheck);
    return passwordCheck
    
}



export {
    encrypt,
    checkPassword
}