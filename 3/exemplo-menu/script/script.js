const close = document.querySelector(".sidebar-menu__button");
const open = document.querySelector(".sidebar-menu__button");

close.addEventListener("click", function(event){
    event.preventDefault();

    if (sidebar.style.left === "-430px");
        sidebar.style.left = "0px";

}

})
