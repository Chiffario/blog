<script lang="ts">
    let { title, url, children } = $props();
</script>

<li>
    <div class="blog-summary-block">
        <h2 class="blog-title"><a href="{url}">{title}</a></h2>
        <p>{@render children()}</p>
        <a href="{url}">[Read more]</a>
    </div>
</li>

<style>
    li {
        list-style-type: none;
    }
    a {
        color: var(--accent);
    }
    .blog-summary-block {
        padding: 1rem;
        width: 80%;
    }
    .blog-title {
        border-bottom: 3px dotted var(--accent);
        position: relative;
        margin-bottom: 15px;
        padding-bottom: 15px;

        & a {
            text-decoration: none;

        }

        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            bottom: 2px;
            border-bottom: 3px dotted var(--accent);
        }

    }
</style>
