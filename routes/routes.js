import express from "express";

const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jenis/:agama/:alamat/:tlpon/:email/:hobi/:cita', (req, res) => {
    var Nama = req.params.nama;
    var Tempat_lahir = req.params.tempat;
    var Tanggal_lahir = req.params.tanggal;
    var Jenis_kelamin = req.params.jenis;
    var Agama = req.params.agama;
    var Alamat = req.params.alamat;
    var Telepon = req.params.tlpon;
    var Email = req.params.email;
    var Hobi = req.params.hobi;
    var Cita_cita = req.params.cita;

    res.send(
        'Nama : ' + Nama + '<br>' +
        'Tempat lahir : ' + Tempat_lahir + '<br>' +
        'Tanggal lahir : ' + Tanggal_lahir + '<br>' +
        'Jenis kelamin : ' + Jenis_kelamin + '<br>' +
        'Agama : ' + Agama + '<br>' +
        'Alamat : ' + Alamat + '<br>' +
        'Telepon : ' + Telepon + '<br>' +
        'Email : ' + Email + '<br>' +
        'Hobi : ' + Hobi + '<br>' +
        'Cita-cita : ' + Cita_cita)
});
    router.get ('/aritmatika', (req,res) =>{
        var bilangan1 = 10;
        var bilangan2 = 5;
        var tambah = bilangan1 + bilangan2;

        var pengurangan1 = 10;
        var pengurangan2 = 5;
        var kurang = pengurangan1 - pengurangan2;

        var pembagian1 = 10;
        var pembagian2 = 5;
        var bagi = pembagian1 / pembagian2;

        var perkalian1 = 10;
        var perkalian2 = 5;
        var kali = perkalian1 * perkalian2;

        res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr></hr>' +

        '<h3>Pengurangan</h3>' +
        'Pengurangan ke 1 : ' + pengurangan1 + '<br>' +
        'Pengurangan ke 2 : ' + pengurangan2 + '<br>' +
        'Hasil : ' + kurang + '<hr></hr>' +

        '<h3>Pembagian</h3>' +
        'Pembagian ke 1 : ' + pembagian1 + '<br>' +
        'Pembagian ke 2 : ' + pembagian2 + '<br>' +
        'Hasil : ' + bagi + '<hr></hr>' +

        '<h3>Perkalian</h3>' +
        'Pembagian ke 1 : ' + perkalian1 + '<br>' +
        'Pembagian ke 2 : ' + perkalian2 + '<br>' +
        'Hasil : ' + kali + '<hr></hr>')
    });

    router.get('/bangun_datar', (req, res) => {
        var sisipersegi = 10
        var luaspersegi = sisipersegi * sisipersegi

        var panjangpersegipanjang = 10
        var lebarpersegipanjang = 5
        var luaspersegipanjang = panjangpersegipanjang * lebarpersegipanjang

        var alassegitiga = 10
        var tinggisegitiga = 12
        var luassegitiga = alassegitiga * tinggisegitiga / 2

        var konstantapilingkaran = 3.14
        var jarijarilingkaran = 15
        var luaslingkaran = jarijarilingkaran * jarijarilingkaran * 3.14

        res.send(
        '<h3>Persegi</h3>' +
        'sisi persegi : ' + sisipersegi + '<br>' +
        'Hasil : ' + luaspersegi + '<hr></hr>' +

        '<h3>Persegi panjang</h3>' +
        'Panjang persegi panjang : ' + panjangpersegipanjang + '<br>' +
        'Tinggi persegi panjang : ' + lebarpersegipanjang + '<br>' +
        'Hasil : ' + luaspersegipanjang + '<hr></hr>' +

        '<h3>Segitiga</h3>' +
        'Alas segitiga : ' + alassegitiga + '<br>' +
        'Tinggi segitiga : ' + tinggisegitiga + '<br>' +
        'Hasil : ' + luassegitiga + '<hr></hr>' +

        '<h3>Lingkaran</h3>' +
        'Konstata pi lingkaran : ' + konstantapilingkaran + '<br>' +
        'Jari-jari lingkaran : ' + jarijarilingkaran + '<br>' +
        'Hasil : ' + luaslingkaran + '<hr></hr>')
    })

    router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
        var nama = req.params.nama;
        var kelas = req.params.kelas;
        var pts = parseInt(req.params.pts);
        var pas = parseInt(req.params.pas);
        var rapot = (pts + pas) / 2;

        if (rapot >= 90 && rapot <= 100) {
            var grade = "Grade A";
        } else if (rapot >= 80) {
            var grade = "Grade B";
        } else if (rapot >= 70) {
            var grade = "Grade C";
        }else if (rapot >= 60) {
            var grade = "Grade D";
        }else if (rapot >= 50) {
            var grade = "Grade E";
        }else if (rapot >= 0) {
            var grade = "Belajar lagi";
        } else {
            var grade = "Tidak ada nilai"
        }

        res.send(
            'Nama : ' + nama + '<br>' +
            'Kelas : ' + kelas + '<br>' +
            'Nilai pts : ' + pts + '<br>' +
            'Nilai pas : ' + pas + '<br>' +
            'Nilai rapot : ' + rapot + '<br>' +
            'Keterangan : ' + grade + '<br>'
        )
    })

    router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => { 

        var nama = req.params.nama;
        var jurusan = req.params.jurusan;
        var kelas = req.params.kelas;

        if (jurusan == 'RPL') {
            var ket = 'Anda jurusan RPL';

              if (kelas == '10') {
                var ket = 'Anda kelas 10 RPL';
            } else if (kelas == '11') {
                var ket = 'Anda kelas 11 RPL';
            } else if (kelas == '12') {
                var ket = 'Anda kelas 12 RPL';
            } else {
                var ket = 'kelas tidak ada';
            }

        } else if (jurusan == 'TBSM') {
            var ket = 'Anda jurusan TBSM';

              if (kelas == '10') {
                var ket = 'Anda kelas 10 TBSM';
            } else if (kelas == '11') {
                var ket = 'Anda kelas 11 TBSM';
            } else if (kelas == '12') {
                var ket = 'Anda kelas 12 TBSM';
            } else{
                var ket = 'kelas tidak ada';
            }

        } else if (jurusan == 'TKRO') {
            var ket = 'Anda jurusan TKRO';

              if (kelas == '10') {
                var ket = 'Anda kelas 10 TKRO';
            } else if (kelas == '11') {
                var ket = 'Anda kelas 11 TKRO';
            } else if (kelas == '12') {
                var ket = 'Anda kelas 12 TKRO';
            } else{
                var ket = 'kelas tidak ada';
            }

    

        } else {
            var ket = 'Anda tidak memiliki jurusan'
        }

    res.send(
            'Nama : ' + nama + '<br>' +
            'Jurusan : ' + ket + '<br>' +
            'Kelas : ' + ket
    )
    })

    router.get('/shop/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => { 
        
        var nama = req.params.nama;
        var tanggal = req.params.tanggal;
        var jenis = req.params.jenis;
        var pesanan = req.params.pesanan;
        var jumlah = req.params.jumlah;
    
    if (jenis == 'makanan') {
          if (pesanan == 'nasi goreng') {
            var ket = 20000;
        } else if (pesanan == 'mie goreng') {
            var ket = 30000;
        } else if (pesanan == 'ayam goreng') {
            var ket = 40000;
        } else {
            var ket = 'anda tidak memesan makanan';
        }

    } else if (jenis == 'minuman') {
          if (pesanan == 'air mineral') {
            var ket = 10000;
        } else if (pesanan == 'jus') {
            var ket = 20000;
        } else if (pesanan == 'kopi') {
            var ket = 30000;
        } else {
            var ket = 'anda tidak memesan minuman';
        }
    }

    var total = jumlah * ket;
    var diskon;
    
    if (total > 100000) {
        diskon = total - (total * 0.5);
    } else {
        diskon = 0
    }

    var total_pembayaran = total - diskon;

    res.send(
        '<center>Starbucks lokal</center>' + '<br>' +
        'Nama pembeli : ' + nama + '<br>' +
        'Tanggal : ' + tanggal + '<br>' +
        'Jenis : ' + jenis + '<br>' +
        'Pesanan : ' + pesanan + '<br>' +
        'harga : ' + ket + '<br>' +
        'Jumlah : ' + jumlah + '<br>' +
        '--------------------------------------' + '<br>' +
        'Total : ' + total + '<br>' +
        'Diskon 50% : ' + diskon + '<br>' +
        'Total pembayaran : ' + total_pembayaran + '<br>' +
        '--------------------------------------' + '<br>' +
        '>>>>>>Terima kasih<<<<<<'
    )
    })

    router.get('/sample', (req, res) => {

        res.send(
            '<h3>Selamat datang</h3>'
        );
    });

    export default router;