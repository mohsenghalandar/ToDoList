function add()
{
    // get data
    const title_data = document.getElementById("title").value;
    const ex1_data = document.getElementById("ex1").value;
    const ex2_data = document.getElementById("ex2").value;
    // make element
    const note = document.createElement("div");
    note.className = "note" ;

    let title = document.createElement("span");
    title.innerHTML = title_data ;
    title.className = "note_title" ;
    let ex1 = document.createElement("span");
    ex1.innerHTML = ex1_data;
    ex1.className ="note_ex1";
    let x = document.createElement("span");
    x.className = "close";
    x.innerHTML = "&times;";
    note.appendChild(title);
    note.appendChild(ex1);
    note.appendChild(x);
    document.getElementById("note-book").appendChild(note);

}