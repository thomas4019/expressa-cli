#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var lib = function(){

  this.error = function(msg,exit,usage){
    if( usage ) this.usage()
    console.error("ERROR: " + msg)
    if( exit ) process.exit(0)
  }

  this.usage = function(){
    console.log("Usage: ")
    console.log("  expressa json2collection <collectionname> <exampleJsonFile> <storagetype> <hasOwner?>")
    console.log("    <- converts json payload into data/collection/collectionname.json")
    console.log("    <- e.g. expressa json2collection blog ./blog.json postgres true")
    console.log("  expressa createsuperuser <email> <password>                   <- create a new super user")
    console.log("  expressa migratedb <collectionname> <newdbtype>               <- migrate collection to the new database type")
    console.log("  expressa getusertoken <email>                                 <- get an auth token for a user account")
    console.log("")
  }

  return this

}.apply({})
if(argv['_'].length)
  require('./cmd/'+argv['_'][0])(lib,argv)
else lib.usage()
