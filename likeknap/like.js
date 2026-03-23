
/* FØRSTE LIKE ØVELSE */
/* let likes = 0;

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const span = document.querySelector("span");
    button.addEventListener("click", function () {
        likes++;
        span.innerHTML = ' ' +likes;
        if (likes > 1) {
            button.innerHTML = '🔥 Likes ' +likes;
        }
    })
}) */


/* ANDEN LIKE KNAP ØVELSE */

/* const likeButton = () => {
    let likes = 0;

    const button = document.body.appendChild(document.createElement("button"));
    button.innerHTML = '🔥 Like';
    
    button.addEventListener("click", function () {
        likes++;
         button.innerHTML = '🔥 Like ' +likes;
        if (likes > 1) {
            button.innerHTML = '🔥 Likes ' +likes;
        }

})
}

likeButton();
likeButton(); */


/* TREDJE LIKE KNAP ØVELSE */

const likeButton = () => {
    let likes = 0;

    const button = document.body.appendChild(document.createElement("button"));
    button.innerHTML = '🔥 Like';
    
    button.addEventListener("click", function () {
        likes++;
         button.innerHTML = '🔥 Like ' +likes;
        if (likes > 1) {
            button.innerHTML = '🔥 Likes ' +likes;
        }

})
}

likeButton();
likeButton();