const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./opperation');

const url='mongodb://localhost:27017/';
const dbname='conFusion';
MongoClient.connect(url,(err,client)=>{//MongoClient.connect(url,callback function)

assert.equal(err,null);
console.log('connected to server');
const db=client.db(dbname);//connect to db

dboper.insertDocument(db,{name:'Donought',description:'Test'},'dishes',(result)=>{

    console.log('insert doccument:\n',result.ops);

    dboper.findDocument(db,'dishes',(docs)=>{
        console.log('found doccuments:\n',docs);
        dboper.updateDocument(db,{name:'Donought'},{description:'updated test'},'dishes',(result)=>{
            console.log('updated doccument:\n',result.result);
            dboper.findDocument(db,'dishes',(docs)=>{
                console.log('found doccuments:\n',docs);
                db.dropCollection('dishes',(result)=>{
                    console.log('dropped collection',result);
                    client.close();
                });

            });
        });
    });
});
});