//Current Date
var currentDay = dayjs().format('dddd, MMMM, D, hh:mm A');
$('#currentDay').text(currentDay); 
//Current Hour
var currentHour = dayjs().hour();
$('#currentHour').text(currentHour); 


$(document).ready(function () {
  // when saveBtn is click
  $(".saveBtn").click(function(){
    
    var key = $(this).parent().attr("id").split("-")[1];
    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key,value);
    var parentP = document.getElementById("dataSaved");
    var childP = document.createElement("p");
    childP.innerHTML = "Data saved to local storage! ✔️";
    parentP.appendChild(childP);
  });

 
$(".time-block").each(function(){
  var blockHour = $(this).attr("id").split("-")[1];
  var textEntry = localStorage.getItem(blockHour);
  var textArea = $(this).find(".description");
  textArea.val (textEntry);
  if (blockHour < currentHour){
      $(this).find(".description").addClass("past");
      console.log("past");
  }else if(blockHour == currentHour){
      $(this).find(".description").addClass("present");
      console.log("present");
  }else{
      $(this).find(".description").addClass("future");
      console.log("future");
   }
});
});