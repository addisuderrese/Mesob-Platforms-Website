function downloadVersion() {

    const pwindow = document.getElementById("download-page")

    if (pwindow.style.opacity == 1) {
        pwindow.style.opacity = "0"
        pwindow.style.zIndex = "-1"
    }
    else {
        pwindow.style.opacity = "1"
        pwindow.style.zIndex = "3"
    }
}