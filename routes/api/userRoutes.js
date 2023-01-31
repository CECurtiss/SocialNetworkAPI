const router = require('express').Router();
const { 
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// get all users
// get single user by its _id and populated thought and friend data
// post a new user

// put to update a user by its _id
// delete to remove a freinds form that users friend list

