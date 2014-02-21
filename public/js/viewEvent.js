$(document).ready(function(){
  var myContent=new Array(
     "#event-content"
    ,"#who-content"
    ,"#what-content"
    ,"#when-content"
    ,"#where-content"
    ,"#how-content"
    ,"#attending-content"
  );
  
  for(var i=0;i<myContent.length;i++) {
    $(myContent[i]).hide();
  }
  
  $("#notification-reject").hide();
  $("#notification-accept").hide();
  
  function change(toSlideDown) {
    for(var i=0;i<myContent.length;i++) {
      if(myContent[i] == toSlideDown)
        $(myContent[i]).slideDown();
      else
        $(myContent[i]).slideUp();
    }
  }
  

  
  $("#event").click(function(){
    if($('#event-content').is(':visible'))
      $("#event-content").slideUp();
    else
      change("#event-content");
  });
  
  $("#who").click(function(){
    if($('#who-content').is(':visible'))
      $("#who-content").slideUp();
    else
      change("#who-content");
  });
  
  $("#what").click(function(){
    if($('#what-content').is(':visible'))
      $("#what-content").slideUp();
    else
      change("#what-content");
  });
  
  $("#when").click(function(){
    if($('#when-content').is(':visible'))
      $("#when-content").slideUp();
    else
      change("#when-content");
  });
  
  $("#where").click(function(){
    if($('#where-content').is(':visible'))
      $("#where-content").slideUp();
    else
      change("#where-content");
  });
  
  $("#how").click(function(){
    if($('#how-content').is(':visible'))
      $("#how-content").slideUp();
    else
      change("#how-content");
  });
  
  
    $("#attending").click(function(){
    if($('#attending-content').is(':visible'))
      $("#attending-content").slideUp();
    else
      change("#attending-content");
  });
});