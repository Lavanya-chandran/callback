let main_div = document.createElement("div")
main_div.classList.add("container", "mt-5", "text-center")
main_div.style.backgroundColor = "red"


let row = document.createElement("div")
row.classList.add("row")

let counter = document.createElement("div")
counter.style.color = "greenyellow"
counter.style.backgroundcolor = "red"

let message = document.createElement("h1")
message.classList.add("heading")
message.innerHTML = "10"
message.style.fontSize = "10rem"
let audio;

setTimeout(() => {
    message.innerHTML = "10"
    setTimeout(() => {
        message.innerHTML = "9"
        setTimeout(() => {
            message.innerHTML = "8"
            setTimeout(() => {
                message.innerHTML = "7"
                setTimeout(() => {
                    message.innerHTML = "6"
                    setTimeout(() => {
                        message.innerHTML = "5"
                        setTimeout(() => {
                            message.innerHTML = "4"
                            setTimeout(() => {
                                message.innerHTML = "3"
                                setTimeout(() => {
                                    message.innerHTML = "2"
                                    setTimeout(() => {
                                        message.innerHTML = "1"
                                        setTimeout(() => {
                                            message.innerHTML = "0"
                                            setTimeout(() => {
                                                message.innerHTML = "Happy Independence Day"
                                                message.style.fontSize = "5rem"
                                                counter.classList.add("col-md-12")
                                                counter.classList.remove("offset-md-4")
                                                 message.audio.play()
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


counter.appendChild(message)
row.appendChild(counter)
main_div.appendChild(row)



document.body.append(main_div)