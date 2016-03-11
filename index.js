module.exports = function Light (data) {
  if (!(this instanceof Light)) return new Light(data)
  if (!data.position) throw Error ("Must provide a position")
  if (data.position.length < 3) throw Error ("Position must have 3 or 4 elements")
  if (data.position.length === 3) data.position = data.position.concat([1])
  var self = this

  self.position = function (value) {
    self.attributes.position[0] = value[0]
    self.attributes.position[1] = value[1]
    self.attributes.position[2] = value[2]
    if (value[3]) self.attributes.position[3] = value[3]
  }

  self.attributes = {
    position: data.position
  }
}