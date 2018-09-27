import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/*
  Generated class for the LocalSqliteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalSqliteProvider {

  constructor(public http: HttpClient, public sqlite: SQLite) {
    console.log('Hello LocalSqliteProvider Provider');
  }

  createDB() {
    this.sqlite.create({
      name: 'lurkmoar.db',
      location: 'default'
    })
    /*
    .then((db: SQLiteObject) => {
      db.executeSql('create table danceMoves(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    */
    .catch(e => console.log(e));
  }

  // Cordova is ready
  onDeviceReady() {
    var db = this.sqlite.create({name: 'lurkmoar.db', location: 'default'})

    .then((dbObject: SQLiteObject) => {
      dbObject.transaction(function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS test_table');
        tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');
  
        tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
          console.log("insertId: " + res.insertId + " -- probably 1");
          console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
  
          tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
            console.log("res.rows.length: " + res.rows.length + " -- should be 1");
            console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
          });
  
        }, function(tx, e) {
          this.sqlite.close(); //?
          console.log("ERROR: " + e.message);
        });
      });
    });
    
    
  }

  //add to DB
  addToSubredditStars() {
    var db = this.sqlite.create({name: 'lurkmoar.db', location: 'default'})

    .then((dbObject: SQLiteObject) => {
      dbObject.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS subreddit_stars (id integer primary key, data text, date_created datetime default now)');
        tx.executeSql('INSERT INTO subreddit_stars (data) VALUES (?)', [], function (resultSet) {
          console.log('resultSet.insertId: ' + resultSet.insertId);
          console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
        }, function(error) {
          console.log('SELECT error: ' + error.message);
        });
      });
    });
  }

}
