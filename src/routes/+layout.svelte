<script>
	import '../app.css'
  import Navbar from '$lib/Navbar.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
</script>
  <main>

    <!--
      - #SIDEBAR
    -->
  <Sidebar />

    <!--
      - #main-content
    -->

    <div class="main-content">

      <!--
        - #NAVBAR
      -->
    <Navbar />

      <slot></slot>

    </div>

  </main>
