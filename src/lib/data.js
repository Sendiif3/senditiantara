import myAvatar from "$lib/assets/images/my-avatar.jpg"
import iconDesign from "$lib/assets/images/icon-design.svg"
import iconVideo from "$lib/assets/images/icon-video.svg"
import iconAnimation from "$lib/assets/images/icon-animation.svg"
import avatar1 from "$lib/assets/images/avatar-1.png"
import avatar2 from "$lib/assets/images/avatar-2.png"
import avatar3 from "$lib/assets/images/avatar-3.png"
import avatar4 from "$lib/assets/images/avatar-4.png"
import clientLogo1 from "$lib/assets/images/logo-1-color.png"
import clientLogo2 from "$lib/assets/images/logo-2-color.png"
import clientLogo3 from "$lib/assets/images/logo-3-color.png"
import clientLogo4 from "$lib/assets/images/logo-4-color.png"
import clientLogo5 from "$lib/assets/images/logo-5-color.png"
import clientLogo6 from "$lib/assets/images/logo-6-color.png"
import project1 from "$lib/assets/images/portfolio/project-1.png"
import project2 from "$lib/assets/images/portfolio/project-2.jpg"
import project3 from "$lib/assets/images/portfolio/project-3.jpg"
import project4 from "$lib/assets/images/portfolio/project-4.png"
import project5 from "$lib/assets/images/portfolio/project-5.jpg"
import project6 from "$lib/assets/images/portfolio/project-6.jpg"
import project7 from "$lib/assets/images/portfolio/project-7.jpg"


export const data = {
  person: {
    name: "Sendi Tiantara",
    email: "senditiantara41@students.amikom.ac.id",
    phone: "87869856043",
    birthday: "13 Maret, 2002",
    location: "Condongcatur, Yogyakarta, Indonesia",
    profession: "Graphic Designer",
    myAvatar: myAvatar
  },
  socialMedia: [
    { title: "instagram", link: "www.instagram.com/senditiantara_", logo: "logo-instagram" },
    { title: "facebook", link: "www.facebook.com/sendi.tiantara.5", logo: "logo-facebook" },
  ],
  pages: {
    about: [
      {
        heading: "About Me",
        contents: [
          "Saya adalah Sendi Tiantara, seorang Graphic Designer yang penuh semangat dan berpengalaman. Melalui perjalanan profesional saya, saya telah mengembangkan portofolio yang mencerminkan hasrat saya dalam seni visual dan desain grafis. Portofolio ini mencakup beragam proyek, dari desain identitas merek hingga materi pemasaran, yang semuanya dirancang untuk memberikan nilai tambah dan dampak visual yang kuat.",
          "Dalam setiap proyek, saya menekankan kreativitas dan keunikan sebagai elemen kunci. Saya percaya bahwa desain yang efektif harus menggabungkan estetika yang menarik dengan pemahaman mendalam tentang pesan yang ingin disampaikan. Oleh karena itu, setiap elemen dalam portofolio saya, seperti pemilihan warna, tipografi, dan tata letak, telah dipertimbangkan dengan cermat untuk menciptakan desain yang kuat dan berkesan.",
          "Desain grafis bukan hanya pekerjaan bagi saya, tetapi juga panggilan. Saya percaya bahwa desain yang efektif adalah hasil dari pemahaman mendalam terhadap audiens dan pesan yang ingin disampaikan. Dalam setiap elemen desain, saya berusaha untuk menghadirkan kreativitas, ketelitian, dan inovasi. Portofolio saya mencerminkan perjalanan panjang saya dalam mengasah keterampilan teknis dan penciptaan konsep yang kuat.",
          "Saya senang bekerja dengan berbagai klien dan tantangan yang berbeda. Portofolio saya mencerminkan fleksibilitas dalam gaya desain, yang telah saya adaptasi sesuai dengan kebutuhan individu dan perusahaan yang saya layani. Dengan dedikasi saya terhadap seni desain, saya selalu berupaya untuk terus berkembang dan berinovasi. Saya sangat antusias untuk menjalin kerja sama baru dan menjelajahi peluang-peluang kolaborasi kreatif. Terima kasih telah mengunjungi portofolio saya, saya berharap dapat bekerja sama dengan Anda dalam menjalankan proyek-proyek yang menarik dan berpengaruh."
        ]
      },
      {
        heading: "What I'm Doing",
        contents: [
          { title: "Animation", content: "Animasi 2D dan 3D berkualitas tinggi dibuat pada tingkat profesional.", icon: iconAnimation },
          { title: "Design Graphic", content: "Desain paling modern dan berkualitas tinggi dibuat pada tingkat profesional.", icon: iconDesign },
          { title: "Video Editing", content: "Video dengan visual efek yang keren dan berkualitas tinggi dibuat pada tingkat profesional.", icon: iconVideo },
        ]

      },
      {
        heading: "Testimonials",
        contents: [
          // { name: "Daniel Lewis", date: "14 Juni, 2021", avatar: avatar1, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia." },
          // { name: "Jessica Miler", date: "12 Juni, 2020", avatar: avatar2, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
          // { name: "Mario Carlos", date: "12 Juni, 2020", avatar: avatar3, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
          // { name: "Sendi Tiantara", date: "12 Juni, 2020", avatar: avatar4, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
        ]
      },
      {
        heading: "Clients",
        contents: [
          // { logo: clientLogo1 },
          // { logo: clientLogo2 },
          // { logo: clientLogo3 },
          // { logo: clientLogo4 },
          // { logo: clientLogo5 },
          // { logo: clientLogo6 }
        ]
      }
    ],
    resume: [
      {
        heading: "Resume",
        contents: [
          {
            title: "Education",
            content: [
              {
                school: "SMA PGRI Tanjung Pandan",
                year: "20017 - 2020",
                text: ""
              },
              {
                school: "Universitas Amikom Yogyakarta",
                year: "2020 - Present",
                text: ""
              },
            ]
          },
          {
            title: "Experience",
            content: [
              { experience: "Final Project UAS FILM KARTUN 3D", year: "2022 - 2023", text: "Saya mengerjakan final project animasi 3D pada semester 6" },
              { experience: "Final Project Perancangan Film Kartun", year: "2022 - 2023", text: "Saya mengerjakan final project animasi 3D pada semester 5" },
            ]
          }
        ]
      },
      {
        heading: "My Skills",
        contents: [
          { title: "Photoshop", percentage: 50 },
          { title: "Coreldraw", percentage: 60 },
          { title: "Premiere Pro", percentage: 40 },
          { title: "After Effect", percentage: 40 },
        ]
      }
    ],
    portfolio:
    {
      heading: "Portfolio",
      contents: [
        { title: "Time to explore", img: project1, category: "Poster", link: "#" },
        { title: "Marsha Mobile Legends", img: project2, category: "ID Card", link: "#" },
        { title: "Ronaldo Al Nassr FC", img: project3, category: "Poster", link: "#" },
        { title: "Kroonos Studio", img: project4, category: "Logo", link: "#" },
        { title: "Hockey", img: project5, category: "Brosur", link: "#" },
        { title: "3D menendang bola", img: project6, category: "Video", link: "https://youtu.be/DtbO36fpPnQ" },
        { title: "Journey of life", img: project7, category: "Video", link: "https://youtu.be/UokPM7_FOag" },
      ]
    },
    blog: []
  }
}

