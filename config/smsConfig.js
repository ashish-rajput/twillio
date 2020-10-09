var twilioCredentials = {
    accountSid : process.env.accountSid,
    authToken : process.env.authToken,
    smsFromNumber : process.env.smsFromNumber,
};

module.exports = {
    twilioCredentials: twilioCredentials
};
