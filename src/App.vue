<template>
    <div id="app">
        <h1>Hello Electron App</h1>
        <div class="content-box">
            <nav class="side-menu">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </nav>
            <div class="main-box">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>

<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 100%;

    h1 {
        background: #76a0ec;
        padding: 20px 30px;
        color: #fff;
        margin: 0;
    }

    .content-box {
        flex-grow: 1;
        display: flex;
        flex-direction: row;

        .side-menu {
            width: 200px;
            display: flex;
            flex-direction: column;
            flex-grow: 0;

            a {
                display: block;
                padding: 10px 20px;
                text-align: center;
                border: 1px solid #ccc;
                margin: 10px;
                text-decoration: none;
                color: black;
            }
        }

        .main-box {
            flex-grow: 1;
        }
    }
}
</style>
