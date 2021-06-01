# REAMDE

Examples of code to test new AWS S3 Object Lambda functionalities (see https://aws.amazon.com/s3/features/object-lambda/). In this case we will convert an xml file already stored on S3 to the JSON format, using S3 Object Lambda

## Requirements:
Serverless Framework

Node

Python (to test)

## To Deploy


`serverless deploy`

`aws s3 cp test/user.xml s3://aws-s3-object-lambda-spike-bucket/`

`python3 test/test-object-lambda-script.py`

## To Cleanup 
`aws s3 rm s3://aws-s3-object-lambda-spike-bucket/user.xml` (avoiding error on deleting non empty S3 buckets)

`serverless remove`
