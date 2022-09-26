import botometer
import tweepy

rapidapi_key = "fc024a7e12msh0ea9c2c0fc4a171p1ec4fcjsn61be9f5af7bd"
twitter_app_auth = {
    'consumer_key': 'hPVZ5SW5KZGSyX9FccscpRaNv',
    'consumer_secret': '5CWZlIvK5oe8PMF75ZgUmXsayZObkDEANO084vTbXkWEPJyw5k',
    'access_token': '1569544277113589760-aPdtA94MOhRXmi8iv6uei85p67twME',
    'access_token_secret': 'uGDtEmi33EGwrB3gIcsRfjNgXBN9Fw0Tnsekj1KMrx2Se',
  }
bom = botometer.Botometer(wait_on_ratelimit=True,
                          rapidapi_key=rapidapi_key,
                          **twitter_app_auth)


result = bom.check_account('@clayadavis')

#Result failed to work as elevated access is required for the API
