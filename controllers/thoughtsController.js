const Thought = require("../models/Thought");

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
        .then(async (thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err)) 
    },

    // get a single thought by _id
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((aThought) => res.json(aThought))
        .catch((err) => res.status(500).json(err))
    },

    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(500).json(err))
    },

    // update thought by _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { ...req.body },
            { new: true })
        .then((updatedThoughtData) => res.json(updatedThoughtData))
        .catch((err) => res.status(500).json(err))
      },

    //   delete thought by _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((deletedThought) => res.json(deletedThought))
        .catch((err) => res.status(500).json(err))
      },

    //  Create reaction stored in single Thoughts reactions array field
      createReaction(req,res) {
          Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body }},
            { new: true },
            )
          .then((updatedReactions) => res.json(updatedReactions))
          .catch((err) => res.status(500).json(err))
      },
    // delete to pull and remove a reaction by the reactions reactionId value
    deleteReaction(req,res) {
        Thought.findOneAndUpdate(
          { _id: req.params.reactionId},
          { $pull: { reactions: thought._id }},
          { new: true },
          )
        .then((deletedReaction) => res.json(deletedReaction))
        .catch((err) => res.status(500).json(err))
    }
}   
// ^exports closure