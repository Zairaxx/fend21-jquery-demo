let showHide = () => {
    let boxes = document.querySelectorAll(".box");
    console.log(boxes);

    boxes.forEach(box => {
        if(box.style.display !== "none"){
        box.style.display = "none";
        } else {
            box.style.display = "block";
        }})
}

// let toggleBtn = document.querySelector("#toggleBoxes");
// toggleBtn.addEventListener("click", showHide);

$("#toggleBoxes").click(() => {
    console.log("You clicked me!");
    $(".box").toggle(1000);
})

// let changeColorBtn = document.querySelector("#changeColor");
// changeColorBtn.addEventListener("click", () => {
//     let boxes = document.querySelectorAll(".box");
//     boxes.forEach(box => {
//         if(box.classList.contains("blue")){
//             box.classList.remove("blue")
//         } else {
//             box.classList.add("blue");
//         }
//     })
// })

$("#changeColor").on("click",() => {
    console.log($(".box"));
    $(".box").toggleClass("blue");
    $(".box").css("border","5px solid black");
})


// Vi kan EJ kombinera jQuery-syntax med t.ex addEventListener för att sätta events.
// $("#changeColor").addEventListener("click",() => {
//     console.log("Hej");
// })

//Todo list funktionalitet

let handleDelete = (e) => {
    e.parentNode.remove();
}

let toggleDone = (e) => {
    e.parent().toggleClass("done");
    console.log(e.closest(".test"));
    // console.log(e.parentNode.classList);
    // if(e.parentNode.classList.contains("done")){
    //     e.parentNode.classList.remove("done");
    // } else {
    //     e.parentNode.classList.add("done");
        
    // }
}

$("#addTodo").on("click", () => {
    console.log($(this));
    let todo = $("#todo").val();
    $("#todoList").append(`<li>${todo}
    <button onClick="handleDelete(this)">Delete</button>
    <input type="checkbox" onchange="toggleDone($(this))">
    </li>`);
})