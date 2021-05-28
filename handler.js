'use strict';

const AWS = require('aws-sdk');
const axios = require('axios');
const xml2js = require('xml2js');

const S3 = new AWS.S3()

//Get Bucket Name from the ENV Variables
const BUCKET_NAME = process.env.BUCKET_NAME || "";

module.exports.converter = async (event, context) => {

  const { outputRoute, outputToken, inputS3Url } = event.getObjectContext || {};

  const { data: xml } = await axios.get(inputS3Url, { responseType: 'application/xml' })

  // convert XML to JSON
  xml2js.parseString(xml, (err, result) => {
    if (err) {
      throw err;
    }
    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

  });

  await S3.writeGetObjectResponse({
    RequestRoute: outputRoute,
    RequestToken: outputToken,
    Body: json
  }).promise()

  return {
    statusCode: 200
  }
};

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
