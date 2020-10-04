<style lang="postcss">
    h1,
    figure,
    p {
        @apply m-auto text-center;
    }

    h1 {
        @apply text-5xl uppercase font-bold mb-2;
        @screen sm {
            @apply text-6xl;
        }
    }

    figure {
        @apply mb-4;
    }

    img {
        @apply w-full max-w-md mx-auto;
    }

    p {
        @apply my-4;
    }
</style>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
    <img alt="Success Kid" src="successkid.jpg" />
    <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
