const router = require('express').Router();
const {
    updateThought,getAllThought,
        getThoughtById, 
        addThought, 
        removeThought,   
        addReaction, 
        removeReaction } = require('../../controllers/thought-controller');


router
  .route('/')
  .get(getAllThought)
  .post(addThought)

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)


// /api/thoughts/<userId>
// router
//     .route('/:userId')
//     .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;