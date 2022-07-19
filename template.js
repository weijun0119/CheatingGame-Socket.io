let background;
let teacher;
let stu_b;
let stu_p;
let stu_o;
let stu_pr;
let isBlueCheat = false;
let isPurpleCheat = false;
let isPinkCheat = false;
let isOrangeCheat = false;
let isTeacherTurn = false;
let isBlueLose = false;
let isPinkLose = false;
let isOrangeLose = false;
let isPurpleLose = false;
let isTeacherKill = false;
let timesUP = false;
let problemShow = false;
let isAns1 = false;
let isAns2 = false;
let isAns3 = false;
let isAns4 = false;



let time;
let time_text;
let screen=[0,0,0];
let user1=[0,0,0,0];
let user2=[0,0,0,0];;
let user3=[0,0,0,0];
let user4=[0,0,0,0];
let id=[screen,user1,user2,user3,user4];
let temp=[];

function preload() 
{
    background = loadImage ('public/assets/background/背景.jpg');

    teacher = createSprite(1000,420);
    teacher.addImage('back',loadImage('public/assets/teacher/老師背面.png'))
    teacher.addImage('front',loadImage('public/assets/teacher/老師正面.png'))
    teacher.addImage('kill',loadImage('public/assets/teacher/老師雷射光.png '))
    

    stu_b = createSprite(1610,900);
    stu_b.addImage('normal',loadImage ('public/assets/stu-blue/學生藍沒作弊.png'));
    stu_b.addImage('cheat',loadImage ('public/assets/stu-blue/學生藍作弊.png'));
    stu_b.addImage('lose',loadImage ('public/assets/stu-blue/學生藍被抓.png'));

    stu_p = createSprite(1190,900);
    stu_p.addImage('normal', loadImage('public/assets/stu-pink/學生粉沒作弊.png'));
    stu_p.addImage('cheat', loadImage('public/assets/stu-pink/學生粉作弊.png'));
    stu_p.addImage('lose', loadImage('public/assets/stu-pink/學生粉被抓.png'));

    stu_o = createSprite(680,900);;
    stu_o.addImage('normal', loadImage('public/assets/stu-orange/學生橘沒作弊.png'));
    stu_o.addImage('cheat', loadImage('public/assets/stu-orange/學生橘作弊.png'));
    stu_o.addImage('lose', loadImage('public/assets/stu-orange/學生橘被抓.png'));

    stu_pr = createSprite(200,900);
    stu_pr.addImage('normal', loadImage('public/assets/stu-purple/學生紫沒作弊.png'));
    stu_pr.addImage('cheat', loadImage('public/assets/stu-purple/學生紫作弊.png'));
    stu_pr.addImage('lose', loadImage('public/assets/stu-purple/學生紫被抓.png'));



}




io().on('Screen1',function(user1data)
{
    id[1]=user1data;
    
    if (user1data[2]==1){
        purple1();
        
    }
    else if (user1data[2]==0){
        purple0();
    }
    else{}
     id[1][1]=counterVal1;
}
)
io().on('Screen2',function(user2data)
{
    id[2]=user2data;
    if (user2data[2]==1){
        orange1();
    }
    else if (user2data[2]==0){
        orange0();
    }
    else{}
     id[2][1]=counterVal2;
})
io().on('Screen3',function(user3data)
{
    id[3]=user3data;
    if (user3data[2]==1){
        pink1();
    }
    else if (user3data[2]==0){
        pink0();
    }
    else{}
     id[3][1]=counterVal3;
})
io().on('Screen4',function(user4data)
{
    id[4]=user4data;
    if (user4data[2]==1){
        blue1();
    }
    else if (user4data[2]==0){
        blue0();
    }
    else{}
     id[4][1]=counterVal4;
})
io().on('user1screen',function()
{
    console.log(7);
    isAns1 = true;
})
io().on('user2screen',function()
{

    console.log(7);
    isAns2 = true;
})
io().on('user3screen',function()
{

    console.log(7);
    isAns3 = true;
})
io().on('user4screen',function()
{

    console.log(7);
    isAns4 = true;
})
function setup() {
    createCanvas(1920,1080);


}
function draw() {


    teacher.scale = 0.5;
    image(background,0,0,background.width,background.height);
    if(isPurpleCheat && isTeacherTurn){
        stu_pr.changeImage('lose');
        isPurpleLose = true;
        isTeacherKill = true;

    }
    else if(isPurpleCheat){
        stu_pr.changeImage('cheat')
        isPurpleLose = false;
        isTeacherKill = false;
    }
    else{
        stu_pr.changeImage('normal');
    }

    if(isOrangeCheat && isTeacherTurn){
        stu_o.changeImage('lose');
        isOrangeLose = true;
        isTeacherKill = true;
    }
    else if(isOrangeCheat){
        stu_o.changeImage('cheat')
        isOrangeLose = false;
        isTeacherKill = false;
    }
    else{
        stu_o.changeImage('normal');
    }

    if(isPinkCheat  && isTeacherTurn){
        stu_p.changeImage('lose');
        isPinkLose = true;
        isTeacherKill = true;
    }
    else if(isPinkCheat ){
        stu_p.changeImage('cheat');
        isPinkLose = false;
        isTeacherKill = false;
    }
    else{
        stu_p.changeImage('normal');
    }

    if(isBlueCheat && isTeacherTurn){
        stu_b.changeImage('lose');
        isBlueLose = true;
        isTeacherKill = true;
    }
    
    else if(isBlueCheat){
        stu_b.changeImage('cheat')
        isBlueLose = false;
        isTeacherKill = false;
    }
    else{
        stu_b.changeImage('normal');
        
    }


    if(isTeacherTurn && isTeacherKill){
        teacher.changeImage('kill');
    }
    else if(isTeacherTurn){
        teacher.changeImage('front');
    }
    else{
        teacher.changeImage('back');
    }

    drawSprites();
    
}

function getTimeNow() {
    var now = new Date();
    return now.getTime();
}

var counterVal1 = 0;
var counterVal2 = 0;
var counterVal3 = 0;
var counterVal4 = 0;


function purple1() {
    if(counterVal1 < 100){
        if(isPurpleLose){
            counterVal1 = counterVal1 -5;
            updateDisplay1(counterVal1);
        }
        else{
            updateDisplay1((++counterVal1));
        }
        isPurpleCheat = true;
    }
}

function purple0(){
    isPurpleCheat = false;
}


function orange1(){
    if(counterVal2 < 100){
        if(isOrangeLose){
            counterVal2 = counterVal2 - 5;
            updateDisplay2(counterVal2);
        }
        else{
            updateDisplay2((++counterVal2));
        }
        isOrangeCheat = true;
    }
}

function orange0(){
    isOrangeCheat = false;
}
function pink1(){
    if(counterVal3 < 100){
        if(isPinkLose){
            counterVal3 = counterVal3 - 5;
            updateDisplay3(counterVal3);
        }
        else{
            updateDisplay3((++counterVal3));
        }
        isPinkCheat = true;
    }
}

function pink0(){
    isPinkCheat = false;
}
function blue1(){
    if (counterVal4 < 100){
        if(isBlueLose){
            counterVal4 = counterVal4 - 5;
            updateDisplay4(counterVal4);
        }
        else{
            updateDisplay4((++counterVal4));
        }
        isBlueCheat = true;
    }
    
}
function sortscore(){
    let score=[counterVal1,counterVal2,counterVal3,counterVal4];
    for (let i=0;i<3;i++){
        
        if (score[i]<score[i+1]){
            temp=score[i];
            score[i]=score[i+1];
            score[i+1]=temp;
            i=0;
        }
        
          
    }
    console.log(score)
    for (let i=0;i<4;i++){
        if (score[i]==counterVal1){

        }
        else if (score[i]==counterVal2){

        }
        else if(score[i]==counterVal3){

        }
        else if (score[i]==counterVal4){

        }

    }
    
    
}
function blue0(){
    isBlueCheat = false;
}

function updateDisplay1(val) {
    document.getElementById("counter-label1").innerHTML = val;
}
function updateDisplay2(val) {
    document.getElementById("counter-label2").innerHTML = val;
}
function updateDisplay3(val) {
    document.getElementById("counter-label3").innerHTML = val;
}
function updateDisplay4(val) {
    document.getElementById("counter-label4").innerHTML = val;
}

function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;
    

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if(secondsRemaining%2 ==0){
            let state = random([1,2]);
            if (state == 2){
                console.log(state);
                isTeacherTurn = true;
            }
            else{
                console.log(state);
                isTeacherTurn = false;
            }
        }
        if(secondsRemaining == 75 ){
            problemShow = true;
            // counterVal1 = 100;
            // updateDisplay1(counterVal1);
        }
        if (secondsRemaining == 70 && counterVal1 == 0 && isAns1){
            counterVal1 = 100;
            updateDisplay1(counterVal1);
            console.log('user1100');
        }

        if(secondsRemaining == 70 && counterVal2 == 0 && isAns2){
            //problemShow = true;
            counterVal2 = 100;
            updateDisplay2(counterVal2);
            console.log('user2100');
        }

        if(secondsRemaining == 70 && counterVal3 == 0 && isAns3){
            // problemShow = true;
            counterVal3 = 100;
            updateDisplay3(counterVal3);
            console.log('user3100');
        }

        if(secondsRemaining == 70 && counterVal4 == 0 && isAns4){
            //problemShow = true;
            counterVal4 = 100;
            updateDisplay4(counterVal4);
            console.log('user4100');
        }
        if (secondsRemaining < 0) { clearInterval(countInterval);
            
        };

        if (secondsRemaining==0){
            console.log(6);
            sortscore();
            timesUP = true;
            document.getElementById('defaultCanvas0').style.visibility = "hidden";
            //document.getElementById('UI').style.visibility = "hidden";
            window.location.href='template_end.html';
        }
        if(problemShow){
            document.getElementById('myDiv').style.visibility = "visible";
        }

    }, 1000);
}

