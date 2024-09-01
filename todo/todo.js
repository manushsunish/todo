let arr=[];
function addtodo(){
    const data=document.querySelector(".js-todoinput");
    const data1=data.value;
    data.value='';
    arr.push(data1);
    render();
}
function deletetodo(i){
    arr.splice(i,1);
    render();
}
function edittodo(i){
    let dat=document.querySelector(".todocontent");
    let data=dat.querySelector(".js-edittodo");
    data.innerHTML="Save";
    data.removeAttribute("onclick");
    data.setAttribute("onclick",`submitedit(${i})`);
    data.setAttribute("class","save-button");
    let dat1=dat.querySelector("p");
    let dat2=dat.querySelector("p").innerText;
    let inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("class","submit-input");
    inp.value=dat2;
    dat1.parentNode.replaceChild(inp,dat1);
}

function submitedit(i){
    const dat=document.querySelector(".todocontent");
    const dat1=dat.querySelector("input").value;
    arr.splice(i,1,dat1);
    render();
}


function render(){
    const dat=document.querySelector(".js-listtodo");
    dat.innerHTML="";
    let i=0;
    arr.forEach(item=>{
        let divelement=document.createElement("div");
        let divelement1=document.createElement("div");
        let pelement=document.createElement("p");
        let editelement=document.createElement("button");
        let deleteelement=document.createElement("button");
        divelement.setAttribute("class","todocontent");
        divelement1.setAttribute("class","todobuttons");
        editelement.innerHTML="Edit";
        deleteelement.innerHTML="Delete";
        editelement.setAttribute("onclick",`edittodo(${i})`);
        deleteelement.setAttribute("onclick",`deletetodo(${i})`);
        editelement.setAttribute("class","js-edittodo edittodo");
        deleteelement.setAttribute("class","deleteelement");
        pelement.innerText=`${item}`;
        divelement1.appendChild(editelement);
        divelement1.appendChild(deleteelement);
        divelement.appendChild(pelement);
        divelement.appendChild(divelement1);
        dat.appendChild(divelement);
        i+=1;
    });
}