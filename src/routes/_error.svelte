<script lang="ts">
    export let status: number;
    export let error: Error;

    const dev = process.env.NODE_ENV === "development";
</script>

<style lang="postcss">
    h1,
    p {
        @apply m-auto text-center;
    }

    h1 {
        @apply text-4xl font-bold mb-2;
        @screen sm {
            @apply text-6xl;
        }
    }

    p {
        @apply my-4;
    }
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}
