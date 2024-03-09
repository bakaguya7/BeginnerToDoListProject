$(document).ready(function() {
    var kegiatan = [];

    function tambahKegiatan(nama) {
        kegiatan.push(nama);
        tampilkanDaftarKegiatan();
    }

    function tampilkanDaftarKegiatan() {
        var daftarKegiatan = $("#daftarKegiatan");
        daftarKegiatan.empty();

        $.each(kegiatan, function(index, nama) {
            $("<li>").text(nama).appendTo(daftarKegiatan);
        });
    }

    $("#formKegiatan").submit(function(event) {
        event.preventDefault();

        var namaKegiatanInput = $("#namaKegiatan");
        var namaKegiatan = namaKegiatanInput.val().trim(); 

        if (namaKegiatan !== "") {
            tambahKegiatan(namaKegiatan);
            namaKegiatanInput.val("");
        }
    });

    $("#resetKegiatan").click(function() {
        kegiatan = [];
        tampilkanDaftarKegiatan();
    });
});
