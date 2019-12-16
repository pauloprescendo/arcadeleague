const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User');

const secret = process.env.SECRET;

const passport = (pp) => {
  pp.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  }, (payload, done) => {
    if (payload) {
      const user = User.findById(payload.id);
      if (user) {
        done(null, {
          id: user.id,
          name: user.name,
          email: user.email,
          nickname: user.nickname,
        });
        return done;
      }
    }
    return false;
  }));
};

module.exports = passport;
