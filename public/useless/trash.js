    //獲取滑鼠按下時的時間
    timeStart = getTimeNow();

     //setInterval會每100毫秒執行一次，也就是每100毫秒獲取一次時間
    time = setInterval(function () {
        timeEnd = getTimeNow();
    
        //如果此時檢測到的時間與第一次獲取的時間差有1000毫秒
        if (timeEnd - timeStart > 100) {
            //便不再繼續重復此函數 （clearInterval取消周期性執行）
            clearInterval(time);
            
        }
    }, 10);

//<img src="/assets/asteroid0.png">

//image(stu_b,1480,780,stu_b.width*4/5,stu_b.height*4/5);
// image(stu_o,1050,780,stu_o.width*4/5,stu_o.height*4/5);// image(stu_pr,500,780,stu_pr.width*4/5,stu_pr.height*4/5);
// image(stu_p,80,780,stu_p.width*4/5,stu_p.height*4/5);
//.load('./public/assets/test1.txt')