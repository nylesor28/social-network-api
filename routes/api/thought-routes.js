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
  .delete(removeThought)

  router
  .route('/:thoughtId/reactions')
  .post(addReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);


module.exports = router;