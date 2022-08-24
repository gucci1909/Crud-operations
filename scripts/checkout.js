let id;
let id2;
let id3;
let id4;
let main1=()=>
{
    alert("Your order is being Packed");

}
let main2=()=>
{
    alert("Your order is in transit");
}
let main3=()=>{
    alert("Your order is out for delivery");
}
let main4=()=>{
    alert("Order delivered");
    main5()
}
function main5()
{
    window.location.href="./index.html"
}
function button1(main1,main2,main3,main4,delay1,delay2,delay3,delay4)
{
    if(id)
    {
        clearTimeout(id)

    }
    if(id2){
        clearTimeout(id2);

    }
    if(id3)
    {
        clearTimeout(id3);

    }
    if(id4)
    {
        clearTimeout(id4);
        

    }
    id = setTimeout(function(){
        main1()
    },delay1)
    id2 = setTimeout(function(){
        main2()
    },delay2)
    id3 = setTimeout(function(){
        main3()
    },delay3)
    id4 = setTimeout(function(){
        main4()
    },delay4)
}