<script lang="ts">
    export let segment: string;
</script>

<style lang="postcss">
    nav {
        @apply border-b border-red-200 font-light px-4;
    }

    ul {
        @apply p-0 m-0;
    }

    /* clearfix */
    ul::after {
        content: "";
        @apply block clear-both;
    }

    li {
        @apply block float-left;
    }

    [aria-current] {
        @apply relative inline-block;
    }

    [aria-current]::after {
        @apply absolute block bg-red-700 w-11/12 h-px;
        content: "";
        bottom: -1px;
    }

    a {
        @apply block no-underline py-4 px-2;
    }
</style>

<nav>
    <ul>
        <li><a aria-current={segment === undefined ? 'page' : undefined} href=".">home</a></li>
        <li><a aria-current={segment === 'about' ? 'page' : undefined} href="about">about</a></li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
        <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
    </ul>
</nav>
