//promises support

const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./opperation1');

const url='mongodb://localhost:27017/';
const dbname='conFusion';
MongoClient.connect(url).then((client)=>{//MongoClient.connect(url,callback function)

console.log('connected to server');
const db=client.db(dbname);//connect to db

dboper.insertDocument(db,{name:'Donought',description:'Test'},'dishes')
.then((result)=>{

    console.log('insert doccument:\n',result.ops);

   return dboper.findDocument(db,'dishes')
})
.then((docs)=>{
        console.log('found doccuments:\n',docs);
        return dboper.updateDocument(db,{name:'Donought'},{description:'updated test'},'dishes')
        })
        .then((result)=>{
            console.log('updated doccument:\n',result.result);
            return dboper.findDocument(db,'dishes')
            })
            .then((docs)=>{
                console.log('found doccuments:\n',docs);
                return db.dropCollection('dishes')
                }) 
                .then((result)=>{
                    console.log('dropped collection',result);
                    client.close();
                    })
                    .catch((err)=>console.log(err));;
})
.catch((err)=>console.log(err));