class ReferencesService {
  getCounterCopyingReferences(object) {
    const newObject = object
    return newObject;
  }

  getCounterWithoutCopyingReferences(object) {
    // Options:
    // const newObject = Object.create(object)
    // const newObject = Object.assign({},object)
    const newObject = {...object}
    return newObject;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    // NodeJS 17+
    // const newObject = structuredClone(object)
    const newObject = JSON.parse(JSON.stringify(object))
    return newObject;
  }
}

module.exports = ReferencesService;
