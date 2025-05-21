import jwt from "jsonwebtoken"

const createTokenAndSaveCookie=(userId,res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "10d",
    });

    res.cookie("jwt", token, {
        httpOnly : true, //xss(access atteck se bachayaha)
        secure : true,
        sameSite: "strict", //csfr

    });
};

export default createTokenAndSaveCookie;