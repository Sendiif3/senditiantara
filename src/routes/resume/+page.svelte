<script>
  import {data} from "$lib/data"
</script>
      <article class="resume" data-page="resume">

        <header>
          <h2 class="h2 article-title">{data.pages.resume[0].heading}</h2>
        </header>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">{data.pages.resume[0].contents[0].title}</h3>
          </div>

          <ol class="timeline-list">

            {#each data.pages.resume[0].contents[0].content as item}
            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">{item.school}</h4>

              <span>{item.year}</span>

              <p class="timeline-text">{item.text}</p>

            </li>
            {/each}
          </ol>

        </section>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">{data.pages.resume[0].contents[1].title}</h3>
          </div>

          <ol class="timeline-list">

      {#each data.pages.resume[0].contents[1].content as item}
            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">{item.experience}</h4>

              <span>{item.year}</span>

              <p class="timeline-text">{item.text}</p>

            </li>
      {/each}
          </ol>

        </section>

        <section class="skill">

          <h3 class="h3 skills-title">{data.pages.resume[1].heading}</h3>

          <ul class="skills-list content-card">

      {#each data.pages.resume[1].contents as item}
        
            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">{item.title}</h5>
                <data value="{item.percentage}">{item.percentage}%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: {item.percentage}%;"></div>
              </div>

            </li>
      {/each}
          </ul>

        </section>

      </article>


