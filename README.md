# REAMDE

Examples of code to test new AWS S3 Object Lambda functionalities (see https://aws.amazon.com/s3/features/object-lambda/)

## Requirements:
serverless framework
node
Python (to test)

## To Deploy


`serverless deploy`
`aws s3 cp test/user.xml s3://aws-s3-object-lambda-spike-bucket/`
`python3 test/test-object-lambda-script.py`

## To Cleanup 
`aws s3 rm s3://aws-s3-object-lambda-spike-bucket/user.xml` (avoiding error on deleting non empty S3 buckets)
`serverless remove`
