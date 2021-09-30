const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required!',
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: 'Email is required!',
    trim: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false
}
);


UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;
