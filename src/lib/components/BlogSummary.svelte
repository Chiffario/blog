<script lang="ts">
    let { title, url, date, children } = $props();
</script>

<article class="post">
    <h2 class="post-title"><a href="{url}">{title}</a></h2>
    <div class="post-meta">
        {#if date}<time class="post-date">{date}</time>{/if}
    </div>
    <div class="post-content">
        <p>{@render children()}</p>
    </div>
    <div>
        <a class="read-more" href="{url}">[Read more]</a>
    </div>
</article>
