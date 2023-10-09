<script>
  import {data} from '$lib/data.js'
  let active = false
</script>
    <aside class="sidebar" class:active={active} data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src={data.person.myAvatar} alt="Richard hanrick" width="80">
        </figure>
        <div class="info-content">
          <h1 class="name" title="{data.person.name}">{data.person.name}</h1>
          <p class="title">{data.person.profession}</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn on:click={()=> active = !active}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div class="sidebar-info_more">

        <div class="separator"></div>

        <ul class="contacts-list">

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to={data.person.email}&su=SUBJECT&body=BODY&bcc={data.person.email}" target="_blank" class="contact-link">{data.person.email}</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+62{data.person.phone}" class="contact-link">+62 {data.person.phone}</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime={data.person.birthday}>{data.person.birthday}</time>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>{data.person.location}</address>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

      {#each data.socialMedia as item}
          <li class="social-item">
            <a href="https://{item.link}" class="social-link" target="_blank">
              <ion-icon name={item.logo}></ion-icon>
            </a>
          </li>
      {/each}
        </ul>
      </div>
    </aside>
