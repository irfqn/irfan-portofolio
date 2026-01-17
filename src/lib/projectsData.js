import bankSampah from "../assets/projects/Bank-Sampah.jpeg";
import animeDashboard from "../assets/projects/Anime-Dashboard.jpeg";

const projects = [
    {
        id: 1,
        slug: "anime-dashboard",
        title: "Anime Dashboard",
        shortDesc: "Dashboard web untuk katalog anime",
        description:
            "Anime Dashboard adalah aplikasi web untuk mengelola dan menampilkan katalog anime. Aplikasi ini menyediakan visualisasi data, statistik genre, serta fitur filtering untuk memudahkan pengguna.",
        image: animeDashboard,
        tech: ["React", "Tailwind CSS", "Ampchart.js"],
        demoUrl: "https://animeprojectdashboard.vercel.app/",
        githubUrl: "https://github.com/irfqn/animeprojectdashboard.git",
    },
    {
        id: 2,
        slug: "bank-sampah-bersinar",
        title: "Bank Sampah Bersinar",
        shortDesc: "Website manajemen bank sampah berbasis MERN Stack",
        description:
            "Website Bank Sampah Bersinar digunakan untuk mengelola data nasabah, transaksi sampah, serta monitoring kontribusi lingkungan. Sistem ini dibangun menggunakan MERN Stack dan di-deploy ke cloud.",
        image: bankSampah,
        tech: ["MongoDB", "Express", "React", "Node.js", "GCP"],
        demoUrl: "https://bank-sampah-bersinar-11oj.vercel.app/",
        githubUrl: "https://github.com/irfqn/Bank-Sampah-Bersinar.git",
    },
];

export default projects;
