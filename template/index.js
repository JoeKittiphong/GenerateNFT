//ตัวแปรสร้างเพื่อเอาไว้ใช้ตอน save ชื่อไฟล์
var emotion;
var face;
var shirt;
var head;
var saveas;

//array เอาไว้เก็บชื่อไฟล์ที่ถูกกด save ไว้แล้ว
let nft = ["0"];

//function สำหรับ Generata and random
function generate(){
    //จำนวนไฟล์ที่เราจะเอมาใช้
    var body = 4;
    var emotion = 3;
    var face = 3;
    var head = 4;
    var shirt = 4;
    var background = 4;

//กำหนดที่อยู่ไฟล์
//เอาแค่ก่อนถึงตัวเลข เช่นไฟล์ชื่อ body(1).png เอาใส่แค่ body(
    var part_body = "./body/b (";
    var part_emotion = "./emotion/e (";
    var part_face = "./face/f (";
    var part_head = "./head/h (";
    var part_shirt = "./shirt/c (";
//------------------------------------------------------------------------------------------//

    //body
    var rookie = new Image();
    var rookienum = Math.floor(Math.random()*body)+1;
    var rookiename = part_body+rookienum+").png";
    rookie.src = rookiename;    

    //emotion
    var rookieemotion = new Image();
    var rookieemotionnum = Math.floor(Math.random()*emotion)+1;
    var rookieemotionname = part_emotion+rookieemotionnum+").png";
    rookieemotion.src = rookieemotionname;

    //face
    var rookieface = new Image();
    var rookiefacenum = Math.floor(Math.random()*face)+1;
    var rookiefacename = part_face+rookiefacenum+").png";
    rookieface.src = rookiefacename;

    //head
    var rookiehead = new Image();
    var rookieheadnum = Math.floor(Math.random()*head)+1;
    var rookieheadname = part_head+rookieheadnum+").png";
    rookiehead.src = rookieheadname;

    //shirt
    var rookieshirt = new Image();
    var rookieshirtnum = Math.floor(Math.random()*shirt)+1;
    var rookieshirtname = part_shirt+rookieshirtnum+").png";
    rookieshirt.src = rookieshirtname;

    //background
    var rookiebackground = new Image();
    var rookiebackgroundnum = Math.floor(Math.random()*background)+1;
    var rookiebackgroundname = "./avatar/bg/bg ("+rookiebackgroundnum+").png";
    rookiebackground.src = rookiebackgroundname;

    emotion = rookieemotionnum;
    face = rookiefacenum;
    shirt = rookieshirtnum;
    head = rookieheadnum;
    saveas = "emotion("+emotion+")face("+face+")shirt("+shirt+")head("+head+")";
    console.log(saveas);
    // console.log(nft);
//------------------------------------------------------------------------------------------//

    //BODY LOAD
    rookie.onload = function(){
        rookiebuild();
    }

    //emotion LOAD
    rookieemotion.onload = function(){
        rookiebuild();
    }

    //face LOAD
    rookieface.onload = function(){
        rookiebuild();
    }

    //head LOAD
    rookiehead.onload = function(){
        rookiebuild();
    }

    //shirt LOAD
    rookieshirt.onload = function(){
        rookiebuild();
    }

    //background
    rookiebackground.onload = function(){
        rookiebuild();
    }

//------------------------------------------------------------------------------------------//

    function rookiebuild(){
        var position = 0;
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        var width = 600;
        var height = 600;
        canvas.width = width;
        canvas.height = height;

        //DRAW background
        ctx.drawImage(rookiebackground, ((width-rookiebackground.width)),position);

        //DRAW BODY
        ctx.drawImage(rookie, ((width-rookie.width)),position);

        //DRAW shirt
        ctx.drawImage(rookieshirt, ((width-rookieshirt.width)),position);

        //DRAW emotion
        ctx.drawImage(rookieemotion, ((width-rookieemotion.width)),position);     
        
        //DRAW face
        ctx.drawImage(rookieface, ((width-rookieface.width)),position);

        //DRAW head
        ctx.drawImage(rookiehead, ((width-rookiehead.width)),position);

        
    }
    check();
}
//-----------------------------------------------------------//

function saveImg(){
    check();
    window.open(canvas.toDataURL(document.querySelector("canvas")));
    var gh = canvas.toDataURL('jpg');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = saveas+".jpg";

    a.click()
    nft.push(saveas);
}

function check(){
    for(let i=0; i < nft.length; i++){
        if(nft[i] == saveas){
            alert("ซ้ำกัน");
        }
    }
}
