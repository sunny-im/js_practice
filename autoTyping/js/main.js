const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde architecto quos iusto ratione mollitia repudiandae nobis rerum tenetur dolorum provident. Fugiat nostrum, porro inventore nulla cum quasi quis illo natus?"
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").append(text[i]);
        i++;
    }
}

setInterval(typing,100);