"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Pranay , you are the best",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
