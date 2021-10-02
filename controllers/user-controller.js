const { User } = require('../models');
const {  Types  } = require('mongoose');

const userController = {
  // get all users
  getAllUser(req, res) {
    User.find({})
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
  },


  getUserById({ params }, res) {
    const userId = params.id ;

    if  (!Types.ObjectId.isValid(userId)){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    User.findOne({ _id: userId })
    //.select('-__v')
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    const userId = params.id ;

    if  (!Types.ObjectId.isValid(userId)){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }


    User.findOneAndUpdate({ _id: userId}, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    const userId = params.id ;

    if  (!Types.ObjectId.isValid(userId)){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  addFriend({params}, res){
  
    const userId = params.userId  ;
    const friendId = params.friendId ;

    if  (!Types.ObjectId.isValid(userId) ||
        !Types.ObjectId.isValid(friendId) ){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }

    )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));


  },

  removeFriend({params}, res){

  
    const userId = params.userId  ;
    const friendId = params.friendId ;

    if  (!Types.ObjectId.isValid(userId) ||
        !Types.ObjectId.isValid(friendId) ){
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true, runValidators: true }

    )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));


  },

  
};


module.exports = userController;
