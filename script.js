function assahraApp() {
  return {
    selectedProgram: null,
    selectedCourse: null,
    showAllCourses: false,
    activeCategory: "Semua",

    courses: [
      {
        title: "Kelas Al-Fajr",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin1.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Senin & Rabu",
        time: "08.00–09.30 WIB",
        teacher: "Ustadzah Sekar",
        note: "Kelas pagi untuk membantu anak belajar membaca Al-Qur’an dengan lebih tartil dan membangun kebiasaan tilawah sejak dini.",
        suitableFor: [
          "Anak usia dini sampai remaja",
          "Anak yang ingin memperbaiki bacaan Al-Qur’an",
          "Orang tua yang mencari jadwal pagi"
        ]
      },
      {
        title: "Kelas Ad-Duha",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin1.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Senin & Rabu",
        time: "09.30–11.00 WIB",
        teacher: "Ustadzah Sekar",
        note: "Kelas tahsin dan tahfizh di waktu dhuha untuk membantu anak belajar Al-Qur’an dengan suasana yang tenang dan menyenangkan.",
        suitableFor: [
          "Anak yang cocok belajar di pagi menjelang siang",
          "Anak yang membutuhkan pembiasaan membaca Al-Qur’an",
          "Orang tua yang mencari jadwal weekday pagi"
        ]
      },
      {
        title: "Kelas Al-‘Ashr",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin2.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Senin & Rabu",
        time: "16.30–18.00 WIB",
        teacher: "Ustadzah Sekar",
        note: "Kelas sore untuk membantu anak belajar Al-Qur’an setelah aktivitas sekolah dengan pendampingan yang terarah.",
        suitableFor: [
          "Anak sekolah yang membutuhkan jadwal sore",
          "Anak yang ingin memperbaiki tahsin secara rutin",
          "Orang tua yang mencari kelas setelah jam sekolah"
        ]
      },
      {
        title: "Kelas Al-Mulk",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin2.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Senin & Kamis",
        time: "16.30–18.00 WIB",
        teacher: "Ustadzah Rina",
        note: "Kelas tahsin dan tahfizh sore untuk membangun rutinitas belajar Al-Qur’an dengan bimbingan pengajar berpengalaman.",
        suitableFor: [
          "Anak yang membutuhkan jadwal Senin dan Kamis",
          "Anak yang ingin belajar membaca dan menghafal Al-Qur’an",
          "Orang tua yang mencari kelas sore terjadwal"
        ]
      },
      {
        title: "Kelas Al-‘Alaq",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin2.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Selasa & Kamis",
        time: "16.00–17.30 WIB",
        teacher: "Ustadzah Masruroh",
        note: "Kelas sore untuk membantu anak mengenal dan memperbaiki bacaan Al-Qur’an secara bertahap sesuai kemampuan.",
        suitableFor: [
          "Anak yang baru memulai belajar Al-Qur’an",
          "Anak yang membutuhkan pendampingan sabar dan bertahap",
          "Orang tua yang mencari jadwal Selasa dan Kamis"
        ]
      },
      {
        title: "Kelas At-Tin",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin2.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Rabu & Jumat",
        time: "16.00–17.30 WIB",
        teacher: "Ustadzah Masruroh",
        note: "Kelas tahsin dan tahfizh sore dengan pembelajaran yang bertahap, cocok untuk membangun kebiasaan membaca Al-Qur’an.",
        suitableFor: [
          "Anak yang cocok belajar di Rabu dan Jumat",
          "Anak yang butuh bimbingan membaca Al-Qur’an",
          "Orang tua yang mencari kelas sore"
        ]
      },
      {
        title: "Kelas Al-Qalam",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin1.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Sabtu",
        time: "07.30–08.50 WIB",
        teacher: "Ustadz Ridho",
        note: "Kelas weekend pagi untuk membantu anak tetap belajar Al-Qur’an tanpa mengganggu jadwal sekolah di hari biasa.",
        suitableFor: [
          "Anak yang hanya tersedia di akhir pekan",
          "Anak yang ingin belajar Al-Qur’an di Sabtu pagi",
          "Orang tua yang mencari jadwal weekend"
        ]
      },
      {
        title: "Kelas Asy-Syams",
        category: "Tahsin & Tahfizh Al-Qur’an",
        image: "assets/images/kelastahsin1.png",
        label: "Free Trial",
        age: "2–15 tahun",
        registration: "Rp250.000",
        fee: "Rp220.000 / bulan",
        schedule: "Sabtu",
        time: "09.00–10.30 WIB",
        teacher: "Ustadz Ridho",
        note: "Kelas weekend di Sabtu pagi untuk pembelajaran tahsin dan tahfizh yang terarah dan konsisten.",
        suitableFor: [
          "Anak yang cocok belajar di akhir pekan",
          "Anak yang membutuhkan jadwal Sabtu",
          "Orang tua yang ingin kelas pagi menjelang siang"
        ]
      },
      {
        title: "English Club for Kids 1",
        category: "English Club",
        image: "assets/images/englishclub.png",
        label: "Free Trial",
        age: "4–15 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Selasa & Kamis",
        time: "16.00–17.00 WIB",
        teacher: "Miss Mareta",
        // short: "Kelas Bahasa Inggris anak bersama Miss Mareta.",
        note: "Kelas ini membantu anak mengenal dan menggunakan bahasa Inggris melalui kosakata, percakapan sederhana, dan aktivitas belajar yang menyenangkan.",
        suitableFor: [
          "Anak yang baru mulai belajar bahasa Inggris",
          "Anak yang ingin lebih percaya diri berbicara",
          "Orang tua yang mencari kelas English weekday"
        ]
      },
      {
        title: "English Club for Teen",
        category: "English Club",
        image: "assets/images/englishclub.png",
        label: "Free Trial",
        age: "4–15 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Rabu & Jumat",
        time: "17.00–18.00 WIB",
        teacher: "Miss Fika",
        // short: "Kelas English Club untuk anak dan remaja bersama Miss Fika.",
        note: "Kelas ini membantu siswa memperkuat kosakata, percakapan, dan keberanian menggunakan bahasa Inggris dalam kegiatan belajar yang interaktif.",
        suitableFor: [
          "Anak dan remaja yang ingin meningkatkan bahasa Inggris",
          "Siswa yang ingin lebih percaya diri speaking",
          "Orang tua yang mencari kelas sore weekday"
        ]
      },
      {
        title: "English Club for Kids 2",
        category: "English Club",
        image: "assets/images/englishclub.png",
        label: "Free Trial",
        age: "4–15 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Rabu & Jumat",
        time: "16.00–17.00 WIB",
        teacher: "Miss Fika",
        // short: "Kelas English Kids bersama Miss Fika.",
        note: "Kelas ini dirancang untuk membantu anak belajar bahasa Inggris dengan cara ringan, menyenangkan, dan sesuai usia.",
        suitableFor: [
          "Anak yang membutuhkan pengenalan bahasa Inggris",
          "Anak yang senang belajar lewat aktivitas",
          "Orang tua yang mencari kelas sore untuk anak"
        ]
      },
      {
        title: "Calistung",
        category: "Calistung",
        image: "assets/images/kelascalistung.png",
        label: "Free Trial",
        age: "4–8 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Senin–Sabtu",
        time: "09.00–12.00 WIB",
        teacher: "Miss Ifa",
        short: "Bebas pilih hari dan waktu sesuai kebutuhan.",
        note: "Kelas Calistung membantu anak membangun kemampuan dasar membaca, menulis, dan berhitung dengan pendampingan yang sabar dan bertahap.",
        suitableFor: [
          "Anak PAUD, TK, dan awal SD",
          "Anak yang sedang mempersiapkan masuk SD",
          "Orang tua yang mencari jadwal fleksibel"
        ]
      },
      {
        title: "Matematika",
        category: "Matematika",
        image: "assets/images/kelasmatematika.png",
        label: "Free Trial",
        age: "8–13 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Selasa & Kamis",
        time: "17.00–18.00 WIB",
        teacher: "Ustadzah Syifa",
        // short: "Kelas Matematika untuk pelajar usia 8–13 tahun.",
        note: "Kelas Matematika membantu siswa memahami konsep, berlatih soal, dan membangun rasa percaya diri dalam pelajaran matematika.",
        suitableFor: [
          "Siswa yang ingin memperkuat konsep matematika",
          "Siswa yang butuh pendampingan latihan soal",
          "Orang tua yang mencari kelas matematika rutin"
        ]
      },
      {
        title: "Bahasa Arab",
        category: "Bahasa Arab",
        image: "assets/images/kelasarabic.png",
        label: "Free Trial",
        age: "7–12 tahun",
        registration: "Rp250.000",
        fee: "Rp250.000 / bulan",
        schedule: "Sabtu / Selasa",
        time: "Sabtu 08.30–09.30 WIB atau Selasa 15.30–16.30 WIB",
        teacher: "Ustadz Shodiq",
        // short: "Tersedia kelas Selasa dan Sabtu bersama Ustadz Shodiq.",
        note: "Kelas Bahasa Arab membantu anak mengenal kosakata, ungkapan dasar, dan pembelajaran bahasa Arab secara bertahap dan menyenangkan.",
        suitableFor: [
          "Anak yang ingin mulai belajar bahasa Arab",
          "Anak yang membutuhkan dasar kosakata Arab",
          "Orang tua yang mencari kelas bahasa tambahan"
        ]
      },
      {
        title: "Taekwondo",
        category: "Taekwondo",
        image: "assets/images/kelastaekwondo.png",
        label: "Free Trial",
        age: "4–15 tahun",
        registration: "Hubungi admin",
        fee: "Hubungi admin",
        schedule: "Sabtu & Minggu",
        time: "16.00–18.00 WIB",
        teacher: "Sabeum Nugie",
        // short: "Kelas bela diri untuk melatih disiplin, percaya diri, dan sportivitas.",
        note: "Kelas Taekwondo membantu anak melatih fisik, kedisiplinan, keberanian, dan sportivitas melalui latihan bela diri yang terarah.",
        suitableFor: [
          "Anak yang ingin belajar bela diri",
          "Anak yang perlu melatih disiplin dan percaya diri",
          "Orang tua yang mencari aktivitas fisik positif"
        ]
      },
      {
        title: "Persiapan Masuk Pesantren",
        category: "Persiapan Masuk Pesantren",
        image: "assets/images/persiapanpesantren.png",
        label: "Free Trial",
        age: "10–12 tahun",
        registration: "Rp250.000",
        fee: "Rp500.000 / bulan",
        schedule: "Setiap hari",
        time: "Sesuai kesepakatan",
        teacher: "Tim Pengajar Assahra",
        short: "Program intensif dengan jadwal fleksibel sesuai kesepakatan.",
        note: "Program ini membantu anak mempersiapkan kemampuan dasar, kedisiplinan, dan kesiapan belajar untuk masuk pesantren.",
        suitableFor: [
          "Calon santri usia 10–12 tahun",
          "Anak yang perlu persiapan akademik dan kebiasaan belajar",
          "Orang tua yang mencari pendampingan intensif"
        ]
      }
    ],

    get filteredCourses() {
      if (this.activeCategory === "Semua") {
        return this.courses;
      }

      return this.courses.filter((course) => course.category === this.activeCategory);
    },

    get visibleCourses() {
      return this.showAllCourses ? this.filteredCourses : this.filteredCourses.slice(0, 6);
    },

    showCategory(category) {
      this.activeCategory = category;
      this.showAllCourses = false;
      this.selectedProgram = null;

      setTimeout(() => {
        const kelasSection = document.getElementById("kelas");
        if (kelasSection) {
          kelasSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    },

    openCourse(course) {
      this.selectedCourse = course;
    },

    whatsappLink(course) {
      const message = `Assalamu'alaikum, saya ingin bertanya tentang ${course.title} - ${course.category} di Assahra.`;
      return `https://wa.me/6287786974880?text=${encodeURIComponent(message)}`;
    }
  };
}

function testimonialApp() {
  const testimonials = [
    {
      name: "Ayu Rizky Afriyani",
      photo: "assets/images/ulasan4.png",
      text: "Sangat puas dengan tempat latihan taekwondo di Assahra Global Academy. Suasananya nyaman dan mendukung banget buat anak-anak. Cara ngajarnya seru dan kreatif, jadi latihan nggak pernah terasa membosankan. Kakak-kakak senior ramah dan suportif. Anak jadi lebih disiplin, tanggung jawab, dan percaya diri. Terima kasih banyak untuk semua tim Assahra."
    },
    {
      name: "タスニマコ",
      photo: "assets/images/ulasan2.png",
      text: "Disini anak-anak dibimbing oleh guru-guru yang berpengalaman dan berdedikasi. Cara mengajarnya juga kreatif dan sabar. Bisa dilihat perkembangannya setelah mengikuti As Sahra Global Academy, anak-anak tidak hanya belajar materi tapi juga karakter karena disini lingkungannya sangat islami. Selain itu fasilitasnya nyaman, bersih setiap hari, dan sudah memiliki AC sehingga anak betah belajar disini. Semoga semakin banyak anak-anak yang merasakan pengalaman belajar yang seru dan menyenangkan disini."
    },
    {
      name: "Husnul Istiqomah",
      photo: "assets/images/ulasan1.png",
      text: "Anak saya betah kalo udah di Assahra ga mau pulang, nyaman dan menyenangkan, bikin betah."
    },
    {
      name: "Shelly intia",
      photo: "assets/images/defaultuser.png",
      text: "Kelasnya nyaman, gurunya ramah. Kakak jadi tambah rajin ngaji, next mau kakak coba belajar taekwondo."
    },
    {
      name: "Antonio Rayyan",
      photo: "assets/images/ulasan3.png",
      text: "Tempat nya bagus, metode ny keren banget, anak saya jadi cepet bisa ngaji... pokonya recommended banget."
    },
    {
      name: "attahya zahra",
      photo: "assets/images/defaultuser.png",
      text: "Kelas weekend nya ngebantu banget, soalnya senin sampai jumatnya sibuk kerja, jadi ga ada waktu buat anterin nya. Gurunya juga profesional banget, bikin anak ku betah belajar nya."
    },
    {
      name: "Annisa RahmaH Dini",
      photo: "assets/images/defaultuser.png",
      text: "Seru bgtttt bocilku 2 ini bisa ngabisin energi secara positif dan menyenangkan di kelas taekwondo ini, daripada main gadget terus."
    }
  ];

  return {
    testimonials,
    hoveredTestimonial: null,

    get rowOneTestimonials() {
      return [...this.testimonials, ...this.testimonials];
    },

    get rowTwoTestimonials() {
      return [...this.testimonials].reverse().concat([...this.testimonials].reverse());
    },

    shortText(text, limit = 170) {
      if (!text) return "";
      return text.length > limit ? text.slice(0, limit).trim() + "…" : text;
    },
    showTooltip(testimonial) {
      this.hoveredTestimonial = testimonial;
    },

    hideTooltip() {
      this.hoveredTestimonial = null;
    }
  };
}
