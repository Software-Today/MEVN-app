const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../models/user');
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    const user = req.body;

    const takenUsername = await User.findOne({ username: user.username });
    const takenEmail = await User.findOne({ email: user.email });

    if(takenUsername) {
        res.json({ message: "Username has already been taken.", status: false });
    } else if(takenEmail) {
        res.json({ message: "Email has already been taken.", status: false })
    } else {
        user.password = await bcrypt.hash(req.body.password, 10);

        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        });
        dbUser.save();
        res.json({ message: "Success", status: true })
    }
}

exports.login = async (req, res) => {
    const login_data = req.body;

    User.findOne({ $or: [{ username: login_data.username}, { email: login_data.email }] }).then(dbUser => {
        if(!dbUser) {
            return res.json({ status: false, message: "Invalid Username or Password!" });
        }
        bcrypt.compare(login_data.password, dbUser.password).then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username
                };
                jwt.sign(
                    payload, process.env.JWT_SECRET, { expiresIn: 86400 }, 
                    (err, token) => {
                        if(err) return res.json({ message: err, status: false });
                        return res.json({
                            message: "Success",
                            token: "Bearer " + token,
                            status: false
                        });
                    }
                )
            } else {
                return res.json({
                    message: "Invalid Username or Password!",
                    status: false
                })
            }
        })
    })
}