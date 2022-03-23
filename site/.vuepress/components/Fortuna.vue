<template>
    <div>
        <button v-if="!$frontmatter.es" class="button-fortuna">Quiero saberlo</button>
        <section>{{ fortuna }}</section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fortuna: "Todavía no..."
        };
    },
    created() { },

    mounted() {
        fetch("/files/fortuna.txt")
            .then(res => {
                if (!res.ok) {
                    console.log("Error...");
                }

                return res.text();
            })
            .then(data => {
                const rust = import("../lib/fortuna_sym/pkg");

                rust.then(m => {
                    let params = {
                        nombre: "Carlos",
                        contenido: data
                    };

                    this.fortuna = m.leer_fortuna(params);
                });
            });
    }
};
</script>
<style>
.button-fortuna {
    display: inline;
}
</style>
