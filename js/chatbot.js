function chatBot() {
    const container = document.querySelector(".chat-bot-container")
    if (container.style.opacity == "1") {
        container.style.opacity = "0"
        container.style.right = "-30em"
    }
    else {

        container.style.opacity = "1"
        container.style.right = "1em"
    }
}

function Q1(txt) {

    const Q1_Response = "Mesob Platforms is a technology company that merely focuses on manufacturing, support, research and development of telecommunication and consumer based electronics-based digital systems, networks and web based programs."

    const chat = document.querySelector(".chat-bot-chat-section")
    const msg = document.createElement("div")
    msg.className = "sent-message"
    msg.textContent = txt
    chat.append(msg)

    //reply
    setTimeout(() => {
        const reply = document.createElement("div")
        reply.className = "bot-message"
        reply.textContent = Q1_Response
        reply.classList.add("long")
        chat.append(reply)
    }, 800);


}
function Q2(txt) {



}
function Q3(txt) {

}
function Q4(txt) {

}
function Q5(txt) {

}
function Q6(txt) {

}
function Q7(txt) {

}


function chatAI(text) {
    var state = "Activated"

    var Response = "Activating AI"
    const txt = text.split("<")
    const chat = document.querySelector(".chat-bot-chat-section")
    const msg = document.createElement("div")
    msg.className = "sent-message"
    msg.textContent = txt[0]
    chat.append(msg)

    //reply
    setTimeout(() => {
        const reply = document.createElement("div")
        reply.className = "bot-message"
        reply.textContent = Response
        chat.append(reply)
    }, 800);

    setTimeout(() => {
        var Response = "You are now chatting with AI"
        const reply2 = document.createElement("div")
        reply2.className = "bot-message"
        reply2.textContent = Response
        chat.append(reply2)
    }, 1500);


    //setting up the typing area
    const faqBar = document.querySelector(".chat-bot-faq")
    const inputBar = document.createElement("input")
    inputBar.className = "AI-chat-input"


}