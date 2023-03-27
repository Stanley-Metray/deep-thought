
// Operations for sidebar left

const btnLeftSidebar = document.getElementById("btn-left-sidebar-toggle");
let btnLeftSidebarToggle = false;
const sidebarTitle = document.getElementsByClassName("sidebar-title")[0];
const sidebarLeftInfo = document.getElementById("sidebar-left-info");
const squareBox = document.getElementById("square");

btnLeftSidebar.addEventListener("click", () => {
    if (btnLeftSidebarToggle) {
        btnLeftSidebar.style = "transform : rotate(0deg)";
        sidebarTitle.style.display = "none";
        sidebarLeftInfo.style.display = "none";
        squareBox.style.display = "flex";
        btnLeftSidebarToggle = false;
    }
    else {
        btnLeftSidebar.style = "transform : rotate(180deg)";
        sidebarTitle.style.display = "block";
        sidebarLeftInfo.style.display = "block";
        squareBox.style.display = "none";
        btnLeftSidebarToggle = true;
    }
});


// Operations for sidebar right


const btnRightSidebar = document.getElementById("btn-right-sidebar-toggle");
let btnRightSidebarToggle = true;

btnRightSidebar.addEventListener("click", () => {

    const noticeBoard = document.getElementById("notice-board");

    if (btnRightSidebarToggle) {
        btnRightSidebar.classList.remove("fa-times");
        btnRightSidebar.classList.add("fa-plus");
        noticeBoard.style.display = "none";
        btnRightSidebarToggle = false;
    }
    else {
        btnRightSidebar.classList.remove("fa-plus");
        btnRightSidebar.classList.add("fa-times");
        noticeBoard.style.display = "block";
        btnRightSidebarToggle = true;
    }
});
