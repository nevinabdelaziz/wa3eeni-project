 function change_Image(e) {
     if(e.target.id=="image1"){
     document.getElementById("base").src="images/1xhdpi.png";   
     }
     if(e.target.id=="image2"){
     document.getElementById("base").src="images/2xhdpi.png";
     }
     if(e.target.id=="image3"){
     document.getElementById("base").src="images/3xhdpi.png";}
     if(e.target.id=="image4"){
     document.getElementById("base").src="images/4xhdpi.png";}
     
     if(e.target.id=="image5"){
     document.getElementById("base2").src="images/1xhdpi%20(2).png";}
     if(e.target.id=="image6"){
     document.getElementById("base2").src="images/2_1xhdpi.png";}
     if(e.target.id=="image7"){
     document.getElementById("base2").src="images/3_1xhdpi.png";}
 } 
function change_Right(){
    document.getElementById("content1").style.display="none";
    document.getElementById("content3").style.display="none";
    document.getElementById("content2").style.display="block";
}
function change_Left(){
    document.getElementById("content2").style.display="none";
    document.getElementById("content3").style.display="none";
    document.getElementById("content1").style.display="block";
}
function intro(){
    
         window.location="landing page.html";

    /*document.getElementById("content2").style.display="none";
    document.getElementById("content3").style.display="block";
    document.getElementById("content1").style.display="none";*/
}


function goto_virus_c(){
    window.location="virus_c.html";
}
