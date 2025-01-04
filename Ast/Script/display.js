const botName = "DCFinity"
const botDesc = "DCFinity adalah bot seru berbahasa Indonesia yang dimana bisa membuat kamu bahagia dan tertawa tanpa batas (infinity). Bot ini memiliki perintah seperti fun & minigames."
const thisYear = "2025"
const botProfil = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEZXuIUuF8pySnOnPCQP6MQY9fy-QUYTm-5nJnun6QFYxRMFR_pzKbqzR7sAHZGHVmw9fhNKea11PAZCBKS9W94iYOhxOEb0OocY2QnHTizrHcSOgili8p46OKAvTudbmQaObLNNmyPjNTrRW9OjBIWX_98X7wgtH0JTxfTgtvqJfC9BoHiqlMcLxJDA/s3264/1000085530.png"

document.getElementById("botprofilimg").src = botProfil;
document.getElementById("botprofilimg").alt = botName;
document.getElementById("ttlthebot").innerHTML =  botName.toUpperCase();
document.getElementById("descthebot").innerHTML = botDesc;
document.getElementById("exgteam").innerHTML =  `&copy; Exagons Team ${thisYear}`;