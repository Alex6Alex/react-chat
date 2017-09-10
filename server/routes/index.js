//server-side render
import Router from 'express'

import * as staticPages from '../controllers/StaticPages'

const router = Router();

router.get('/', staticPages.home);
router.get('/messages', staticPages.messages);

export default router;
