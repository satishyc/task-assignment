import pymongo 
  
  
client = pymongo.MongoClient("mongodb://localhost:27017/") 
  
# Database Name 
db = client["Test"] 
  
# Collection Name 
col = db["C100"] 
  
x = col.find_one() 
  
print(x)