<template>
    <div class="centerColumn content textblock mobile">
        <TopNavigation></TopNavigation>
        <Content />
        <div id="bottom">
            <router-link to="/">[home]</router-link>
        </div>
    </div>
</template>

<script>
import TopNavigation from "../components/TopNavigation.vue";
export default {
    components: { TopNavigation },
};
</script>

<style>
.date {
    text-align: right;
    font-size: 20px;
    text-justify: auto;
    font-family: "Radley", arial;
    color: rgba(41, 41, 41, 1);
}
img {
    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
    height: auto;
    vertical-align: middle;
}

p {
    font-size: 19px;
    /* text-align: justify; */
    text-justify: auto;
    font-family: "Iosevka", arial;
    color: rgba(41, 41, 41, 1);
}

#bottom {
    padding-top: 4em;
    padding-bottom: 3em;
    margin-left: auto;
    margin-right: auto;
    width: 10vw;
    color: #0bff9c;
    text-decoration: none;
    font-family: "Iosevka", arial;
}

.textblock p a {
    text-decoration: underline;
    color: #ff4f37;
}

.indent {
    list-style: none;
}

ol li {
    padding-bottom: 1em;
}

.textblock ul {
    text-decoration: none;
    list-style-type: "+ ";
}

.textblock li {
    margin-top: 1em;
}
</style>
