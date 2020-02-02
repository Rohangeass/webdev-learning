const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';
MongoClient.connect(url,(err,client)=>{//MongoClient.connect(url,callback function)

assert.equal(err,null);
console.log('connected to server');
const db=client.db(dbname);//connect to db
const collection=db.collection('dishes');//access dishes collection

    collection.insertOne({"name":"pasta","description":"test"},(err,result)=>{//insertOne(obj,callbackfunction)

    assert.equal(err,null);
//nested cllback functions
    console.log('after we insert:\n');
    console.log(result.ops);//ops property how many operations been crried out successfully
    collection.find({}).toArray((err,docs)=>{
        assert.equal(err,null);
        console.log('found:\n');
        console.log(docs);
        db.dropCollection('dishes',(err,result)=>{//remove collection from db
        assert.equal(err,null);
        client.close();//close connection
        });
     });
    });
});