import "dotenv/config";

export default {
  jwt: {
    secret: process.env.JWT_TOKEN_SECRET,
    expiresIn: "1d",
  },
};
