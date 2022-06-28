
let str="";
let obj=document.getElementsByClassName("rollno_1");
console.log("jai shree ram");
for(let i=0;i<obj.length;i++){
    obj[i].addEventListener('click',()=>{
        if(obj[i].innerHTML=='='){
        let ans=eval(str);
        console.log(ans);

        document.querySelector("input").value=ans;
        str="";
        }
        else{
        str=str+ obj[i].innerHTML;
       console.log(str);
         
        document.querySelector(".input").value=str;
        }
    })
}
