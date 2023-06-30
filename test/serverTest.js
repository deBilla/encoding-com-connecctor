const EncodingConnector = require('../index'); 

const connector = new EncodingConnector(
  "742568",
  "ccf4d7d36a422f285843fc21ca9d7458"
);

connector
  .getMediaInfo()
  .then((mediaInfo) => {
    console.log("Media information:", mediaInfo);
  })
  .catch((error) => {
    console.error("Error getting media information:", error);
  });
