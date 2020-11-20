menu_list_array = ["Chesse pizza",
"Pepperoni pizza",
"Meat pizza",
"Margherita pizza",
"BBQ chicken pizza"];

function getmenu(){
    var htmldata;
    htmldata ="<ol class= 'menulist'>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i ++){
   htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'



}
htmldata=htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;

}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").Value;
    menu_list_array.push(item);
    menu_list_array.sort();
  htmldata="<section class='cards'>"
  for(var i=0; i<menu_list_array.length;i++){
      htmldata=htmldata +"<div class='card'>" + '<img src="https://lh3.googleusercontent.com/proxy/xRIvZpSo0WEgGEoEn9d6XRHwcxXd0wRi9niJI4xxZnD4bWMERyMBRDhO4MPMeGXWfLPweReiS32NmOL-2q0cSHlIZloVc0EYihV4t0gyh1LzS5YhDtsWktL6uzm5PJ_FpRmb2jq63bQiYEE"/>' +menu_list_array[i] +'</div>'

  }
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}