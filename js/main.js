let count = 1;
const formData = document.getElementById("biodataForm");

const getDataForm = (e) => {
    e.preventDefault();

    const nama_siswa = formData[0].value;
    const nis_siswa = formData[1].value;
    const kelas_siswa = formData[2].value;
    const jenis_kelamin = formData[3].value;
    const alamat_siswa = formData[4].value;

    if (!nama_siswa || !nis_siswa || !kelas_siswa || !jenis_kelamin || !alamat_siswa) {
        alert("data tidak boleh kosong");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${count++}</td>
        <td>${nama_siswa}</td>
        <td>${nis_siswa}</td>
        <td>${kelas_siswa}</td>
        <td>${jenis_kelamin}</td>
        <td>${alamat_siswa}</td>
    `;
    document.getElementById("table_body").appendChild(row);
    formData.reset();
}

formData.addEventListener("submit", getDataForm);