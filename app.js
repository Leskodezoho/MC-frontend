import home from "./controllers/login.js";
var UniqueID="";
//////////////////----------home
const token = localStorage.getItem("token");
async function homefun(params) {
  let resp = await home(params);
    console.log(resp);
  if (resp.Token) {
if(resp.UniqueID){
   UniqueID+=resp.UniqueID;
    document.getElementById("Dashboard").src = "https://creatorapp.zohopublic.in/handworkstech/medical-certificate-issuance-system/page-embed/Dasboardv2/OUKFjGUVmYVQUgANxj88OCf4RJQvrqZs5NY5Nm9Xu72zZBEC6UxyBtyD67JXKBJHOukWmV8p7sq4MR74WHVHk0HOU4SMaKmSQjJE?key=" + UniqueID;
    
    showContent('content-1');
  }
else{
  alert ("Your profile is inactive. Please contact the administrator.");
  window.location.href = "./sign_in.html";
  localStorage.removeItem("token");
}
  } else {
    window.location.href = "./sign_in.html";
    localStorage.removeItem("token");
  }
}

if (token) {
  homefun(token);
} else {
  window.location.href = "./sign_in.html";
}
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "./sign_in.html";
});

/////////////////////------------tab
document.getElementById('radio-1').addEventListener('change', function() {
  showContent('content-1');
});
document.getElementById('radio-2').addEventListener('change', function() {
  document.getElementById("Cases").src = "";
  document.getElementById("Cases").src = "https://creatorapp.zohopublic.in/handworkstech/medical-certificate-issuance-system/page-embed/Cases/MFO0vNZSa31BWg6h2rV4XMUDHZKdGKSPkgDEjEQwVjDhap5J73PwOKH9BWjhbfNXTrSwEEdzruhAbzJOkd8J9tm1w1ymHhkAQkrg?key=" + UniqueID;
  
  showContent('content-2');
});
document.getElementById('radio-3').addEventListener('change', function() {
  showContent('content-3');
});
document.getElementById('radio-4').addEventListener('change', function() {
  showContent('content-4');
});
document.getElementById('radio-5').addEventListener('change', function() {
  showContent('content-5');
});
document.getElementById('radio-6').addEventListener('change', function() {
  document.getElementById("Profile").src = "";
  document.getElementById("Profile").src = "https://creatorapp.zohopublic.in/handworkstech/medical-certificate-issuance-system/page-embed/Profile/gKbksahEUxFWyZJZ1HAADtAaX4VzCSVg22nx8RF2X10MhhH9x1GUTNNkjQurKw7wnVBQjJ7y3JuAPp8E94YpbfrqfAbwXp60UMyp?key=" + UniqueID;
  
  showContent('content-6');
});
function showContent(activeId) {
  const contentDivs = document.querySelectorAll('.content-div');
  contentDivs.forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(activeId).style.display = 'block';
}

