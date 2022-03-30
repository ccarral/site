<template>
    <div class="centerColumn content">
        <h1>Cosmic Cube</h1>
        <p id="description">
            <Content />
        </p>
        <img id="landing-img" src="setup3.jpg" class="home" />
    </div>
</template>

<style>
#description {
    padding-top: 3vh;
}

.home {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.content ul {
    list-style-type: "  ";
    font-family: "Iosevka", arial;
}

.content li {
    color: #202020;
    text-decoration: none;
    padding-top: 1vh;
    padding-bottom: 1vh;
    font-family: "Iosevka", arial;
}

.content li:hover {
    text-decoration: none;
    font-family: "Iosevka", arial;
}

#landing-img {
    border-radius: 10px;
}
</style>
