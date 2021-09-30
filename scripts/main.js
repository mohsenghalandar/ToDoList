function add()
{
    // get data
    const title_data = document.getElementById("title").value;
    const ex1_data = document.getElementById("ex1").value;
    const ex2_data = document.getElementById("ex2").value;
    // make element
    const note = document.createElement("div");
    note.className = "note" ;
//
    let title = document.createElement("div");
    title.innerHTML = title_data ;
    title.className = "note_title" ;
    title.addEventListener("click",function (){read_note(title)});
    //
    let ex1 = document.createElement("div");
    ex1.innerHTML = ex1_data;
    ex1.className ="note_ex1";
    
    // close btn
    let x = document.createElement("div");
    x.className = "close";
    let xx = document.createElement("p");
    xx.innerHTML = "&times;";
    x.appendChild(xx);
    x.addEventListener("click",function (){del_note(x)});
    //add the more explaintion
    let ex2 = document.createElement("div");
    ex2.innerHTML =ex2_data ;
    ex2.className = "note_ex2" ;
    ex2.id = "ex2";
    ex1.addEventListener("mouseover",function () { show_more(ex1)});
    //make one note.
    note.appendChild(title);
    note.appendChild(ex1);
    note.appendChild(x);
    note.appendChild(ex2);
    document.getElementById("note-book").appendChild(note);
}
//delete our note 
function del_note(x)
{
    x.parentElement.remove();
}
// mark read note
function read_note(title)
{
    $(document).ready (function (){
        $(title).toggleClass("read");
        $(title).next().toggleClass("read");
    });
}
function show_more(ex1)
{
    $(document).ready (function (){
        $(ex1).siblings("#ex2").fadeToggle();
    });
   
}