// setting up variables
let inputbutton=document.querySelector(".tasks-add input"),
    addbutton=document.querySelector(".tasks-add .plus"),
    taskscontainer=document.querySelector(".tasks-content"),
    count=document.querySelector(".task-count span"),
    complete=document.querySelector(".task-complete span");

    //input-focus
    window.onload=function(){
      inputbutton.focus();
    }
    //Add-tasks
    addbutton.onclick=function(){
      //if-empty
      if(inputbutton.value ===""){

        console.log("empty");
      }else{
        
        removemessage=document.querySelector(".tasks-content .tasks-show");
        if(document.body.contains(document.querySelector(".tasks-content .tasks-show"))){
        removemessage.remove();
      };
        // creat-mainspan
        let mainspan=document.createElement("span");
        // creat-delete
        let Deleteelement =document.createElement("span");
        //creat-text
        let text=document.createTextNode(inputbutton.value);
        //creat-delete-text
        let Deletetext=document.createTextNode("Delete");
      
         //put-class-mainspan
         mainspan.appendChild(text);
         mainspan.className ="tasks-content";
        Deleteelement.appendChild(Deletetext);
        mainspan.appendChild(Deleteelement);
         //put-class-Delete
          Deleteelement.className="delete";
            Deleteelement.style.float="right";
            Deleteelement.style.backgroundColor="#00afff";
            Deleteelement.style.color="#ffffff";
          Deleteelement.style.fontsize="15px";
          Deleteelement.style.width="60px";
            Deleteelement.style.height="30px";
            Deleteelement.style.padding="5px";
          Deleteelement.style.textalign="center";
            Deleteelement.style.border="none";
          Deleteelement.style.borderradius="5px";
          Deleteelement.style.cursor="pointer";
          Deleteelement.style.fontweight="bold";
        taskscontainer.appendChild(mainspan);
        inputbutton.value="";
        inputbutton.focus();
        calculattasks();
      }
    }
    // delete-finish
    document.addEventListener("click",function(e){
      if(e.target.className=="delete"){
        e.target.parentNode.remove();
        calculattasks();
        if(taskscontainer.childElementCount == 0){
          createmsg();
        }
      }
      if(e.target.classList.contains("tasks-content")){
        e.target.classList.toggle("finish");
        calculattasks();
      }
    });
    // creat-msg-message
    function createmsg(){
      let msgmessage=document.createElement("span");
      let msgtext=document.createTextNode("No message to show");
      msgmessage.appendChild(msgtext);
      msgmessage.className="No message to show";
      taskscontainer.appendChild(msgmessage);
    }

    // calculat tasks
    function calculattasks(){
      count.innerHTML=document.querySelectorAll(".tasks-content .tasks-content").length;
      complete.innerHTML=document.querySelectorAll(".tasks-content .finish").length;
    };
    // nicescroll
    $(function() {  
    $("body").niceScroll({
       cursorcolor: "#333"
   });
   });