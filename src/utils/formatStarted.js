export default function formatStarted(timestamp) {
    // Buat objek Date dari nilai timestamp (dalam detik)
    var date = new Date(timestamp * 1000);

    // Format tanggal, bulan, dan tahun
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);

    // Format jam, menit, dan detik
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);

    // Gabungkan semua bagian untuk membuat string format tanggal lengkap
    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    return formattedDate;
}
