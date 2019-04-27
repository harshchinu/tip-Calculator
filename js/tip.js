//function
function calculateTip(){
    
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    //validation
    if(billAmount === "" || serviceQuality === 0){
        window.alert("Please entry a value");
        return;
    }
    if(totalPeople === "" || totalPeople <= 1){
        totalPeople = 1;
        document.getElementById("each").style.display="none";
    }else{
        document.getElementById("each").style.display = "block";
    }
    
    var total= (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    //didplay
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//bottton event
document.getElementById("calculate").onclick=function(){calculateTip();}

