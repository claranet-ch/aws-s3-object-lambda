import boto3

s3 = boto3.client('s3')

print('Original object from the S3 bucket:')
original = s3.get_object(
    Bucket='aws-s3-object-lambda-spike-bucket',
    Key='user.xml')
print(original['Body'].read().decode('utf-8'))

print('Object processed by S3 Object Lambda:')
transformed = s3.get_object(
    Bucket='arn:aws:s3-object-lambda:AWSREGION:ACCOUNTID:accesspoint/aws-s3-object-lambda-dev-lambda-ap',
    Key='user.xml')
print(transformed['Body'].read().decode('utf-8'))
