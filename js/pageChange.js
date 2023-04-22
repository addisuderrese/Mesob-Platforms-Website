function callPage2() {
    var div = document.getElementById("registration-container");
    var body = document.getElementById("registration-element-container");
    var page1 = document.getElementById("regestration-element-page1");
    var page2 = document.getElementById("regestration-element-page2");
    var page4 = document.getElementById("regestration-element-page4");
    var head = document.getElementById("registration-header-container");


    body.style.overflow = "hidden";
    page1.style.position = "absolute";
    page1.style.left = "-100%";
    page4.style.position = "absolute";
    page4.style.right = "100%";
    page4.style.left = "unset";

    page2.style.position = "relative";
    page2.style.left = "0";

    div.style.height = "89%";
    head.style.height = "12%";
}
function callPage3() {
    var div = document.getElementById("registration-container");
    var body = document.getElementById("registration-element-container");
    var page2 = document.getElementById("regestration-element-page2");
    var page3 = document.getElementById("regestration-element-page3");
    var page4 = document.getElementById("regestration-element-page4");
    var head = document.getElementById("registration-header-container");

    body.style.overflow = "hidden";
    page2.style.position = "absolute";
    page2.style.left = "-100%";
    page4.style.position = "absolute";
    page4.style.right = "100%";

    page3.style.position = "relative";
    page3.style.left = "0";

    div.style.height = "89%";
    head.style.height = "12%";
}
function callPage4() {
    var div = document.getElementById("registration-container");
    var body = document.getElementById("registration-element-container");
    var page3 = document.getElementById("regestration-element-page3");
    var page4 = document.getElementById("regestration-element-page4");
    var head = document.getElementById("registration-header-container");


    div.style.height = "55%";
    body.style.overflow = "hidden";

    page3.style.position = "absolute";
    page3.style.left = "-100%";

    page4.style.position = "relative";
    page4.style.left = "0";

    head.style.height = "20%";
}