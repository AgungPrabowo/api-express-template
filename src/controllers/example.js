const response = require('../utils/response')

exports.routerExample = async (req, res) => {
  res.send(response('Example Response', true))
}
