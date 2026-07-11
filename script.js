const expiryDate = new Date("December 30, 2026");
const today = new Date();

const status = document.getElementById("status");


if (today <= expiryDate) {

    status.innerHTML = "ACTIVE / VALID";

    status.style.backgroundColor = "#eeeeee";
    status.style.color = "#111111";

} 

else {

    status.innerHTML = "EXPIRED";

    status.style.backgroundColor = "#222222";
    status.style.color = "#ffffff";

}