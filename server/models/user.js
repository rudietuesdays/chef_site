console.log('loading user model...');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
	first_name: {
      type: String,
      required: [true, 'enter your first name'],
      trim: true,
    },

    last_name: {
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
    minlength: [8, "Password must be at least 8 characters long with 1 number, uppercase and special character"],
    maxlength: [32, "Password must be at least 8 characters long with 1 number, uppercase and special character"],
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password must be at least 8 characters long with 1 number, uppercase and special character"
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

}, {timestamps:true});

// encrypt password
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// check if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    console.log(this.password);
    done();
});

mongoose.model('User', UserSchema);
