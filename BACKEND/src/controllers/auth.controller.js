import wrapAsync from "../utils/tryCatchWrapper"

export const register_user = wrapAsync(async (req, res) => {
  const {name,email,password}=req.body;
  const user= await registerUser(name,email,password);
  res.status(200).json(user)

})

export const login_user = wrapAsync(async (req, res) => {
  res.send("Login")
})