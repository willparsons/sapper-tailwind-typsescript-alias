<script lang="ts">
    import Nav from "@/components/Nav.svelte";

    export let segment: string;
</script>

<style lang="postcss">
    main {
        @apply relative max-w-4xl bg-white p-8 m-auto box-border;
    }
</style>

<Nav {segment} />

<main>
    <slot />
</main>
