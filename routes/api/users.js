const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')

const User = require('../../models/User')

// @route POST api/users
// @desc Test route
// @access Public
router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Please include a valid email')
			.isEmail(),
		check('password', 'Please enter a password with 6 or more characters')
			.isLength({min: 6})
	],
	async (req, res)=> {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()})
		}

		const {name, email, password} = req.body

		try {
			// Check if user exist
			let user = await User.findOne({email})

			if (user) {
				return res.status(400).json({ errors: [{msg: 'User already exist'}]})
			}

			user = new User({name, email, password})

			// Encrypt password
			const salt = await bcrypt.genSalt(10)

			user.password = await bcrypt.hash(password, salt)

			await user.save()

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user.id
				}
			}

			console.log('payload', payload )

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 7600 }, (err, token) => {
				if (err) throw err
				res.json({ token })
			})

		} catch (error) {
			console.log(error.message)
			res.status(500).send('Server error')
		}


	}
)

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', async (req, res)=> {
	try {
		const user = await User.find()
		console.log('user', user)
		res.json(user)

	} catch (error) {
		console.log(error.message)
		res.status(500).send('Server Error')
	}
})

module.exports = router
