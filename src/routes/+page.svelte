<script>
  import { data } from "$lib/data.js";
  import iconQuote from "$lib/assets/images/icon-quote.svg";

  $: active = [false, 0];
</script>

<article class="about" data-page="about">
  <header>
    <h2 class="h2 article-title">{data.pages.about[0].heading}</h2>
  </header>

  <section class="about-text">
    {#each data.pages.about[0].contents as item}
    <p>{item}</p>
    {/each}
  </section>

  <!--
          - service
        -->

  <section class="service">
    <h3 class="h3 service-title">{data.pages.about[1].heading}</h3>

    <ul class="service-list">
      {#each data.pages.about[1].contents as item}
        <li class="service-item">
          <div class="service-icon-box">
            <img src={item.icon} alt="design icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{item.title}</h4>

            <p class="service-item-text">{item.content}</p>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <!--
          - testimonials
        -->

  <section class="testimonials">
    <h3 class="h3 testimonials-title">{data.pages.about[2].heading}</h3>

    {#if data.pages.about[2].contents.length !== 0}
      <ul class="testimonials-list has-scrollbar">
        {#each data.pages.about[2].contents as item, index}
          <li class="testimonials-item">
            <a
              href={"#"}
              on:click={() => {
                active = [!active[0], index];
              }}
            >
              <div class="content-card" data-testimonials-item>
                <figure class="testimonials-avatar-box">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4 class="h4 testimonials-item-title" data-testimonials-title>
                  {item.name}
                </h4>

                <div class="testimonials-text" data-testimonials-text>
                  <p>{item.testimoni}</p>
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <div style="display: flex; width: 100%; justify-content: center;">
        <p style="color: white">
          There is no {data.pages.about[2].heading} yet
        </p>
      </div>
    {/if}
  </section>

  <!--
          - testimonials modal
        -->

  <div class="modal-container" class:active={active[0]} data-modal-container>
    <a
      href={"#"}
      class="overlay"
      class:active={active[0]}
      data-overlay
      on:click={() => (active[0] = false)}
    >.</a>

    {#each data.pages.about[2].contents as item, index}
      {#if index == active[1]}
        <section class="testimonials-modal">
          <button
            class="modal-close-btn"
            data-modal-close-btn
            on:click={() => (active[0] = false)}
          >
            <ion-icon name="close-outline" />
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img
                src={item.avatar}
                alt={item.name}
                width="80"
                data-modal-img
              />
            </figure>

            <img src={iconQuote} alt="quote icon" />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>{item.name}</h4>

            <time datetime="2021-06-14">{item.date}</time>

            <div data-modal-text>
              <p>{item.testimoni}</p>
            </div>
          </div>
        </section>
      {/if}
    {/each}
  </div>

  <!--
          - clients
        -->

  <section class="clients">
    <h3 class="h3 clients-title">{data.pages.about[3].heading}</h3>

    {#if data.pages.about[3].contents.length !== 0}
      <ul class="clients-list has-scrollbar">
        {#each data.pages.about[3].contents as item}
          <li class="clients-item">
            <a href={"#"}>
              <img src={item.logo} alt="client logo" />
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <div style="display: flex; width: 100%; justify-content: center;">
        <p style="color: white">
          There is no {data.pages.about[3].heading} yet
        </p>
      </div>
    {/if}
  </section>
</article>
