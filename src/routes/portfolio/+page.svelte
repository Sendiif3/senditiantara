<script>
  import { data } from "$lib/data.js";
  import iconQuote from "$lib/assets/images/icon-quote.svg";

  let categories = Object.values(
    data.pages.portfolio.contents.reduce((acc, { category }) => {
      acc[category] = acc[category] || { category };
      return acc;
    }, {})
  );

  categories = [{ category: "All" }, ...categories];

  $: navActive = [0, "All"];
  $: active = [false, 0];
</script>

<article class="portfolio" data-page="portfolio">
  <header>
    <h2 class="h2 article-title">{data.pages.portfolio.heading}</h2>
  </header>

  <section class="projects">
    <ul class="filter-list">
      {#each categories as item, index}
        <li class="filter-item">
          <button
            data-filter-btn
            class:active={index == navActive[0]}
            on:click={() => {
              navActive[0] = index;
              navActive[1] = item.category;
            }}
          >
            {item.category}
          </button>
        </li>
      {/each}
    </ul>

    <div class="filter-select-box">
      <button class="filter-select" data-select>
        <div class="select-value" data-selecct-value>Select category</div>

        <div class="select-icon">
          <ion-icon name="chevron-down" />
        </div>
      </button>
      <ul class="select-list">
        <li class="select-item">
          <button data-select-item>All</button>
        </li>
        {#each categories as item}
          <li class="select-item">
            <button data-select-item>{item.category}</button>
          </li>
        {/each}
      </ul>
    </div>

    <ul class="project-list">
      {#each data.pages.portfolio.contents as item,index}
        <li
          class="project-item"
          class:active={navActive[1] == "All" ? true : item.category == navActive[1]}
          data-filter-item
          data-category={item.category}
        >
          <a href={item.link} on:click={() => {
                item.category !== 'Video' ? active = [true, index] : active[0] = false;
              }}
              target={item.category == 'Video' ? "_blank" : "_self"}
              >
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>

              <img src={item.img} alt={item.title} loading="lazy" />
            </figure>

            <h3 class="project-title">{item.title}</h3>

            <p class="project-category">{item.category}</p>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <!--
          - Portfolio modal
        -->
  <div class="modal-container" class:active={active[0]} data-modal-container>
    <a
      href={"#"}
      class="overlay"
      class:active={active[0]}
      data-overlay
      on:click={() => (active[0] = false)}
    >.</a>

    {#each data.pages.portfolio.contents as item, index}
      {#if index == active[1]}
        <section class="testimonials-modal" style="height: 700px; width: fit-content">
          <button
            class="modal-close-btn"
            data-modal-close-btn
            on:click={() => (active[0] = false)}
          >
            <ion-icon name="close-outline" />
          </button>
          <img src={item.img} alt={item.title} style="object-fit: contain;" width="500">
        </section>
      {/if}
    {/each}
  </div>
</article>
