var img="";
var status_img="";
var objects=[];

function preload(){
    img=loadImage("kitchen.webp");
    
    }

    function setup(){
        canvas=createCanvas(480,380);
        canvas.center();
        object_detector=ml5.objectDetector("cocossd",modelLoaded);
        document.getElementById("status_object").innerHTML="Status: Detecting Objects";
        }

        function draw(){
            image(img,0,0,480,380);
            if(status_img!=""){
                r=random(255);
                g=random(255);
                b=random(255);
                for(var i=0;i<objects.length;i++){
                   document.getElementById("status").innerHTML="Status: Objects Detected";
                   fill("red");
                   percentage=floor(objects[i].confidence *100);
                   text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
                   noFill();
                   stroke(r,g,b);
                   rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                }
               }
           
            }
            function back(){
                window.location="home_index.html";
            }
            
            function modelLoaded(){
            console.log("modelLoaded");
            status_img=true;
            object_detector.detect(img,gotresult);
            }
            
            function gotResult(error,results){
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    objects=results;
                }
            }