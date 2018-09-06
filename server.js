const express = require ('express');
const mysql = require ('mysql');
const bodyParser = require ('body-parser');

const app = express();
app.use(express.static(__dirname+'/angular'));

app.use(bodyParser.json());
const mysqlConnection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'mahasiswa'
});

mysqlConnection.connect((err)=> {
  if(!err){
    console.log('database connect');
  } else {
    console.log('database not connect');
  }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`running on port ${port}`));

app.get('/mahasiswa', (req, res) => {
  mysqlConnection.query('SELECT * FROM mahasiswa', (err, mahasiswa) => {
    if (!err){
      res.send(mahasiswa);
    }else {
      res.send('data mahasiswa tidak dapat ditampilkan');
    }
  });
});

app.get('/mahasiswa/detail/:id', (req,res) => {
  mysqlConnection.query('SELECT * FROM mahasiswa where npm = ?', [req.params.id], (err, mahasiswa) => {
    if(!err)
    res.send(mahasiswa);
    else {
      res.send('data mahasiswa tidak di temunakan');
    }
  });
});

app.post('/mahasiswa/add', (req,res) => {
  const post = {
    npm : req.body.npm,
    nama : req.body.nama,
    no_hp : req.body.no_hp,
    alamat : req.body.alamat
  }
  mysqlConnection.query('INSERT INTO mahasiswa SET ?', post, (err, mahasiswa) => {
    if(!err)
    res.send('data mahasiswa berhasil ditambahkan');
    else {
      res.send('data mahasiswa tidak dapat ditambahkan');
    }
  });
});

app.put('/mahasiswa/edit/:id', (req,res) => {
  mysqlConnection.query('UPDATE mahasiswa SET nama = ?, no_hp = ?, alamat = ? WHERE npm = ?', [req.body.data[0].nama, req.body.data[0].no_hp, req.body.data[0].alamat, req.params.id], (err, mahasiswa) => {
    if(!err)
    res.send('data mahasiswa berhasil diubah');
    else {
      res.send('data mahasiswa tidak diubah');
    }
  });
});

app.delete('/mahasiswa/delete/:id', (req,res) => {
  mysqlConnection.query('DELETE FROM mahasiswa WHERE npm = ?', [req.params.id], (err, mahasiswa) => {
    if(!err)
    res.send('data mahasiswa berhasil dihapus');
    else {
      res.send('data mahasiswa tidak dihapus');
    }
  });
});
