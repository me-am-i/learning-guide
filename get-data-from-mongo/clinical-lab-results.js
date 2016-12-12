function getData() {
  db.getCollection('users').find({}).forEach(function(users) {
    const patientId = users._id.valueOf()
    var data = users.nickname
    db.getCollection('clinicalLabResults').find({ patientId }).forEach(function({glycatedHemoglobin, testDate}) {
      if (glycatedHemoglobin) {
        const year = testDate.getFullYear()
        const month = testDate.getMonth() + 1
        const date = testDate.getDate()
        data = data + "," + year + "." + month + "."+  date+ "," + glycatedHemoglobin
      }
    })
    print("\n", data)
  })
}

getData()
