'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
  	uri: 'mongodb://localhost/uspapp-dev'
  	//'mongodb://admin:admin1234@ds043972.mongolab.com:43972/CloudFoundry_4kv98ohs_j9b35lah'
  	//uri: 'mongodb://CloudFoundry_dur7pfs8_1loi3jl2_mop0ddds:AQan6hYgjkx6giClj_DtfsKMOZ-yJGzo@ds033679.mongolab.com:33679/CloudFoundry_dur7pfs8_1loi3jl2'
    //uri: 'mongodb://localhost/uspapp-dev'
  },

  seedDB: true
};
