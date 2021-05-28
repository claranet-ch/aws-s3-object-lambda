import boto3

s3 = boto3.client('s3')

print('Original object from the S3 bucket:')
original = s3.get_object(
    Bucket='BUCKET',
    Key='user.xml')
print(original['Body'].read().decode('utf-8'))

print('Object processed by S3 Object Lambda:')
transformed = s3.get_object(
    Bucket='arn:aws:s3-object-lambda:eu-west-1:123412341234:accesspoint/myolap',
    Key='user.xml')
print(transformed['Body'].read().decode('utf-8'))
