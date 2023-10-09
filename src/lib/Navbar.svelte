<script>
  import {page} from '$app/stores';
  $: activeUrl = $page.url.pathname
  const pages = {
  'About' : '/',
  'Resume' : '/resume',
  'Portfolio': '/portfolio',
  'Blog': '/blog',
  'Contact': '/contact'
  }
</script>

<nav class="navbar">
  <ul class="navbar-list">
    {#each Object.entries(pages) as [page, href]}
    <li class="navbar-item">
      <a {href} class="navbar-link" class:active="{activeUrl == href}">{page}</a>
    </li>
    {/each}
  </ul>
</nav>