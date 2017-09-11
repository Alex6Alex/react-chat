//server-side render
import Router from 'express'

import * as staticPages from '../controllers/StaticPages'

const router = Router();

router.get('/', staticPages.home);
router.get('/messages', staticPages.messages);
router.get('/start', staticPages.auth);
router.get('/signup', staticPages.sign_up);

export default router;
