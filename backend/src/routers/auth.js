import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

import { registerUserSchema, loginUserSchema, loginWithGoogleOAuthSchema, } from '../validation/auth.js';

import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshUserSessionController,

  requestResetEmailController,
  resetPasswordController,

  getGoogleOAuthUrlController,
  loginWithGoogleController,

} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));


router.post(
  '/request-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

router.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),

router.get('/get-oauth-url', ctrlWrapper(getGoogleOAuthUrlController));

router.post(
  '/confirm-oauth',
  jsonParser,
  validateBody(loginWithGoogleOAuthSchema),
  ctrlWrapper(loginWithGoogleController),

);

export default router;
