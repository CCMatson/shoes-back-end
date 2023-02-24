const { Shoe } = require('../models')

async function create(req, res) {
  try {
		req.body.profileId = req.user.profile.id
    const shoe = await Shoe.create(req.body)
    res.status(200).json(shoe)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

const index = async (req, res) => {
  try {
    const shoes = await Shoe.findAll()
    res.status(200).json(shoes)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
}
