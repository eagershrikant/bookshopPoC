const cds = require('@sap/cds')
module.exports = async function (){

  const db = await cds.connect.to('db') // connect to database service
  const { Books } = db.entities         // get reflected definitions

  
  this.on('getUser', async (req) => {
    console.log("User: " + req.user.id);
    return 'User : '+req.user.id;
})
}
