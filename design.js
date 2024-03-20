var p1_score = 0;
var p2_score=0;
var p1_arr = [];
var p2_arr=[];
var count=0;
var c1=0;
function updatecskscore()
{
    if(count!=6)
    {
        var p1_n = Math.ceil(Math.random()*6);
        console.log(p1_n)
        p1_arr.push(p1_n);
        p1_score+=p1_n;
        console.log(p1_score)
        console.log(p1_arr)
        updatecsk();
        count++

    }
    else if(count==6 && c1==6)
    {

        if(p1_score>p2_score)
        document.getElementById("hh").textContent="Super Over Won By CSK By "+parseInt(p1_score-p2_score)+" Run";
        else if(p1_score<p2_score)
        document.getElementById("hh").textContent="Super Over Won By MI By "+parseInt(p2_score-p1_score)+" Run";
    } 
    
}
function updatecsk()
{
    var p1_c=document.getElementById("p1").children;
    for(let i=0;i<p1_arr.length;i++)
    {
        p1_c[i].textContent=p1_arr[i];
    }
    document.getElementById("s11").textContent=parseInt(p1_score);
}
function updatemiscore()
{
    if(c1!=6)
    {
        var p2_n = Math.ceil(Math.random()*6);
        console.log(p2_n)
        p2_arr.push(p2_n);
        p2_score+=p2_n;
        console.log(p2_score)
        console.log(p2_arr)
        updatemi();
        c1++

    }
    else if(count==6 && c1==6)
    {

        if(p1_score>p2_score)
        document.getElementById("hh").textContent="Super Over Won By CSK By "+parseInt(p1_score-p2_score)+" Run";
        else if(p1_score<p2_score)
        document.getElementById("hh").textContent="Super Over Won By MI By "+parseInt(p2_score-p1_score)+" Run";
    } 
}
function updatemi()
{
    var p2_c=document.getElementById("p2").children;
    for(let i=0;i<p2_arr.length;i++)
    {
        p2_c[i].textContent=p2_arr[i];
    }
    document.getElementById("s12").textContent=parseInt(p2_score);
}

