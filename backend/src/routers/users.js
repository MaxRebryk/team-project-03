import { Router } from 'express';
import {
  getUserInfoByIdController,
  patchUserController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateUserSchema } from '../validation/users.js';
import { isValidId } from '../middlewares/isValidId.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello, im routing',
  });
});

router.get('/:userId', isValidId, ctrlWrapper(getUserInfoByIdController));

router.patch(
  '/:userId',
  isValidId,
  upload.single('photo'),
  validateBody(updateUserSchema),
  ctrlWrapper(patchUserController),
);

export default router;
