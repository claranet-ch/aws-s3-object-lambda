`serverless deploy`
`aws s3 cp test/user.xml s3://aws-s3-object-lambda-spike-bucket/`
`python3 test/test-object-lambda-script.py`

## To Cleanup 
`aws s3 rm s3://aws-s3-object-lambda-spike-bucket/user.xml` (avoiding error on deleting non empty S3 buckets)
`serverless remove`
