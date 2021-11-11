const { 
    PORT,
    CLIENT_ID,
    SECRET,
    CALLBACK_URL,
    USERS_URL,
    GOOGLE_URL_TOKEN,
    CLIENT_URL
} = process.env


module.exports={
    port: PORT || 80,
    clientId: CLIENT_ID,
    secret: SECRET,
    callback: CALLBACK_URL,
    usersUrl: USERS_URL,
    googleUrlToken: GOOGLE_URL_TOKEN,
    clientUrl: CLIENT_URL,
}