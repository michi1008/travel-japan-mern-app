import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
const secret = process.env.JWT_SECRET

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (!existingUser) return res.status(401).json({ message: "User doesn't exist" })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" })
    
    res.status(200).json({ result: existingUser, token })
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" })
  }
}


export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if(!email || !password || !confirmPassword || !firstName || !lastName ) return res.status(400).json({ message: "Please enter all required fields"})
    if(existingUser) return res.status(400).json({ message: "User already exists" })
    if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match."})
    if(password.length<6) return res.status(400).json({ message: "Please enter a password of at least 6 characters."})

    const salt = await bycrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    // save a new user in database
    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } )
    

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
    
    console.log(error)
  }
}