let count = 1;
const formData = document.getElementById("biodataForm");
const submitBtn = document.getElementById("submitBtn");

const addDataToTable = (e) => {
    e.preventDefault();

    console.log(e.target);
    
}

submitBtn.addEventListener("click", addDataToTable);