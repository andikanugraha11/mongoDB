// My Documentation of MongoDB

// Step 1 - Install
// Step 2 - Setting Path
// Step 3 - Running mongod & mongo

//Schema of SQL
//Database -> Table -> record

//Schema of mongoDB
// Database -> Collection -> Document

 // Show all DB
 show dbs

// Create database & use
 use namaDB

//cek db
db

 // Drop database
 // must use db firts
 db.dropDatabase()

//show all collection
show collections

//Create collection
db.createCollection('namaCollection')
//or by insert document
db.namaCollection.insert({'a':'b'})

//drop collection
db.namaCollection.drop()

//insert data
db.namaCollection.insert(
							{
								'nama':'andika',
								'umur':21
							}
						)

//insert multiple data
db.namaCollection.insert([
							{
								'nama':'muhammad',
								'umur':50
							},
							{
								'nama':'nugraha',
								'umur':17
							}
						])

//Show data
db.namaCollection.find()

//show data (clean)
db.namaCollection.find().pretty()

//show first data
db.namaCollection.findOne()

//show with condition (ex : select * from namaCollection where nama='andika')
db.namaCollection.find({'nama':'andika'})

//with and
db.namaCollection.find({'nama':'andika','umur':21})

//with > condition (note gt:> lt:< gte:>= lte:<= ne:ne)
db.namaCollection.find({'umur':{$gt:30}})

//with multiple condition
db.namaCollection.find({'nama':'muhammad','umur':{$gt:30}})

//or condition
db.namaCollection.find({ 
							$or : 
								[
									{'nama':'andika'},
									{'umur':{$gt:30}}
								]
						})

// and or condition
db.namaCollection.find({ 'nama':'andika',
							$or : 
								[
									{'umur':0},
									{'umur':21}
								]
						})