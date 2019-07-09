document.body.style.border = "5px solid red";
var form = document.createElement("iframe");
form.src = "https://docs.google.com/forms/d/e/1FAIpQLSe_sxPrX-CuV2oatWT2ZR6xCC7Wt0Zjj3c34UmziXKNbfs0UQ/viewform?usp=pp_url";
form.width = "100%";

document.body.insertBefore(form, document.body.childNodes[0]);