export const cookieOptions={
    secure:process.env.NODE_ENV === "production",
    sameSite:"lax",
    httpOnly:true,
    maxAge:1000*60*60 //5 minutes
}