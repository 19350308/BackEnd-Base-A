const {Router} = require ("express")
const router = Router()
const{rootMessage, hiMessage, byeMessage,postMessage,putMessage,deleteMessage} = require ('../controllers/messages')

router.get('/', rootMessage) //end point
router.get('/hi', hiMessage) //end point
router.get('/bye', byeMessage)//end point

router.get('/', postMessage) //end point
router.get('/hi', putMessage) //end point
router.get('/bye', deleteMessage)//end point

module.exports = router