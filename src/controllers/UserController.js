const User = require('../models/User');

module.exports = {

  async show(req, res) {
    const { user_id } = req.headers;

    if (!user_id) {
      return res.status(400).json({ error: 'id has not sent' });
    }

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: 'user does not exist' });
    }
    return res.json(user);
  },

  async store(req, res) {
    const {
      name,
      email,
      country,
      birthday,
      password,
    } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ error: 'this email aready exist' });
    }

    const user = await User.create({
      name,
      email,
      country,
      birthday,
      password,
    });
    return res.json(user);
  },
};
