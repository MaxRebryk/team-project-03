import { OAuth2Client } from 'google-auth-library';
import { env } from '../utils/env.js';
import { createHttpError } from 'http-errors';

const oauthClient = new OAuth2Client({
  clientId: env('GOOGLE_AUTH_CLIENT_ID'),
  clientSecret: env('GOOGLE_AUTH_CLIENT_SECRET'),
  redirectUri: env('GOOGLE_AUTH_REDIRECT_URI'),
});

export const loginWithGoogleController = async (req, res) => {
  const { code } = req.body;

  try {
    const { tokens } = await oauthClient.getToken(code);
    const ticket = await oauthClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: env('GOOGLE_AUTH_CLIENT_ID'),
    });
    const payload = ticket.getPayload();

    // Perform your login or signup logic here
    // For example:
    // const user = await findOrCreateUser(payload);

    res.status(200).json({
      message: 'Successfully logged in via Google OAuth!',
      data: {
        // user data or tokens
      },
    });
  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
