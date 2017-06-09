var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	first: {
      type: String,
      required: [true, 'enter your first name'],
      trim: true,
    },

    last: {
      type: String,
      required: [true, 'enter your last name'],
      trim: true
    },

  email: {
    type: String,
    required: [true, 'enter email address'],
    unique: [true, "user already exists"],
    validate: {
      validator: function( value ){
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test( value );
      },
      message: "enter a valid email address"
    }
  },

  password: {
    type: String,
    required: [true, 'enter a password'],
    minlength: 8,
    maxlength: 32,
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  },

	is_admin: false,

	phone: {
		type: String,
		required: [true, 'enter your phone number'],
		trim: true
	},

	street1: {
		type: String,
		required: [true, 'enter your street address'],
		trim: true
	},

	street2: {
		type: String,
		trim: true
	},

	city: {
		type: String,
		required: [true, 'enter your city'],
		trim: true
	},

	state: {
		type: String,
		required: [true, 'select a state'],
	},

	zipcode: {
		type: String,
		required: [true, 'enter your zipcde'],
		trim: true
	},

	family_size: {
		type: Number,
		required: [true, 'how many people will be eating?']
	},

	allergies: {
		type: String,
		trim: true
	},

	food_preferences: {
		type: String,
		trim: true
	},

}, {timestamps:true})

mongoose.model('User', UserSchema); //For more information, research mongoose schemas
