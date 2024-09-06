import 'dotenv/config';
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { generateAuthUrl, validateCode, getFullNameFromGoogleTokenPayload } from './googleAuth.js'; // Import your Google OAuth functions

const PORT = Number(process.env.PORT || '3000');

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  // Logger
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Define your routes here
  app.get('/auth/google', (req, res) => {
    const url = generateAuthUrl();
    res.redirect(url);
  });

  app.get('/auth/google/callback', async (req, res) => {
    const { code } = req.query;

    try {
      const ticket = await validateCode(code);
      const payload = ticket.getPayload();
      const fullName = getFullNameFromGoogleTokenPayload(payload);

      // Set user session or send token to the client
      // For example, you might set a cookie or send a JWT
      res.json({ success: true, name: fullName, payload });
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  });

  // Existing routes and middleware
  app.use(router);
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());
  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
