import home from "./controllers/login.js";
//////////////////----------home
const token = localStorage.getItem("token");
async function homefun(params) {
  let resp = await home(params);
    console.log(resp);
  if (resp.Token) {
if(resp.UniqueID){
    document.getElementById("zframe").src = "https://creatorapp.zohopublic.in/handworkstech/medical-certificate-issuance-system/page-embed/Dasboardv2/OUKFjGUVmYVQUgANxj88OCf4RJQvrqZs5NY5Nm9Xu72zZBEC6UxyBtyD67JXKBJHOukWmV8p7sq4MR74WHVHk0HOU4SMaKmSQjJE?key=" + resp.UniqueID;
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
