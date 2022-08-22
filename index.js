const selectorEl = document.getElementsByClassName("selector-el");
const likesEl = document.getElementsByClassName("like-el");
const heartEl = document.getElementsByClassName("heart");

//  section

const cloneEl = document.getElementById("post-0");

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];
function render() {
    let j = 0;
    for (let i = 0; i < posts.length; i++) {
        selectorEl[j].src = posts[i].avatar;
        j += 1;
        selectorEl[j].textContent = posts[i].name;
        j += 1;
        selectorEl[j].textContent = posts[i].location;
        j += 1;
        selectorEl[j].src = posts[i].post;
        j += 1;
        selectorEl[j].textContent = posts[i].likes;
        j += 1;
        selectorEl[j].textContent = posts[i].username;
        j += 1;
        selectorEl[j].textContent = posts[i].comment;
        j += 1;
    }
}

render();

for (let i = 0; i < likesEl.length; i++) {
    likesEl[i].addEventListener("dblclick", function () {
        posts[i].likes += 1;

        render();
    });
}
for (let i = 0; i < heartEl.length; i++) {
    heartEl[i].addEventListener("click", function () {
        posts[i].likes += 1;
        render();
    });
}
