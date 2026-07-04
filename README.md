# Jobify ATS

## Deskripsi Project

**Jobify ATS** adalah backend aplikasi **Job Portal & Applicant Tracking System** yang digunakan untuk mengelola proses rekrutmen secara digital. Project ini dirancang agar pencari kerja dapat menemukan lowongan dan mengirim lamaran, sementara recruiter atau perusahaan dapat membuat lowongan, melihat daftar pelamar, dan mengelola status lamaran.

Project ini berfokus pada pengembangan backend API yang aman, terstruktur, dan mudah diuji melalui tools seperti Postman, Thunder Client, atau Swagger. Sistem ini tidak wajib memiliki tampilan frontend karena fokus utamanya adalah logika backend, autentikasi, manajemen data, dan pengujian API.

## Latar Belakang

Dalam proses rekrutmen, perusahaan sering membutuhkan sistem yang dapat membantu mengelola lowongan kerja dan lamaran secara lebih rapi. Tanpa sistem yang terstruktur, data pelamar dapat tersebar, sulit dilacak, dan proses seleksi menjadi kurang efisien.

Jobify ATS dibuat sebagai solusi sederhana untuk membantu proses tersebut. Dengan sistem ini, recruiter dapat mengatur lowongan kerja dan memantau pelamar, sedangkan job seeker dapat mencari lowongan serta melihat perkembangan status lamarannya.

## Tujuan Project

Tujuan utama dari project ini adalah membangun backend sistem rekrutmen yang memiliki fitur autentikasi, pembagian hak akses, pengelolaan lowongan, pengiriman lamaran, upload CV, serta pelacakan status lamaran.

Project ini juga bertujuan untuk menerapkan konsep backend development seperti JWT authentication, role-based access control, validasi request, error handling, dokumentasi API, dan struktur kode yang modular.

## Nama Project

**Jobify ATS**

Makna nama:

- **Jobify** menggambarkan platform yang berhubungan dengan pekerjaan dan pencarian kerja.
- **ATS** adalah singkatan dari **Applicant Tracking System**, yaitu sistem untuk melacak dan mengelola proses lamaran kerja.

## Target Pengguna

Project ini memiliki tiga jenis pengguna utama.

### 1. Admin

Admin bertugas mengawasi sistem secara keseluruhan. Admin dapat melihat data pengguna, lowongan kerja, dan lamaran yang ada di dalam sistem.

### 2. Recruiter / Perusahaan

Recruiter adalah pengguna yang mewakili perusahaan. Recruiter dapat membuat lowongan kerja, mengedit informasi lowongan, menutup lowongan, melihat daftar pelamar, dan mengubah status lamaran.

### 3. Job Seeker / Pelamar

Job seeker adalah pengguna yang mencari pekerjaan. Job seeker dapat mendaftar akun, login, melihat daftar lowongan, mengirim lamaran, mengunggah CV, dan memantau status lamaran yang sudah dikirim.

## Fitur Utama

### Autentikasi Pengguna

Sistem menyediakan fitur register dan login untuk pengguna. Setiap pengguna memiliki role yang berbeda, seperti admin, recruiter, dan job seeker. Role tersebut digunakan untuk membatasi akses ke fitur tertentu.

Autentikasi menggunakan token agar setiap request ke endpoint privat dapat diverifikasi terlebih dahulu. Password pengguna disimpan dalam bentuk hash agar lebih aman dan tidak disimpan sebagai plain text.

### Role-Based Access Control

Jobify ATS menerapkan pembagian hak akses berdasarkan role pengguna. Admin, recruiter, dan job seeker memiliki akses yang berbeda sesuai kebutuhan masing-masing.

Contohnya, job seeker hanya dapat melamar pekerjaan dan melihat status lamarannya sendiri. Recruiter hanya dapat mengelola lowongan dan pelamar dari lowongan yang dibuatnya. Admin dapat mengawasi data secara lebih luas.

### Manajemen Lowongan Kerja

Recruiter dapat membuat dan mengelola lowongan kerja. Informasi lowongan dapat berisi judul pekerjaan, nama perusahaan, lokasi, tipe pekerjaan, kisaran gaji, deskripsi pekerjaan, persyaratan, batas waktu pendaftaran, dan status lowongan.

Lowongan dapat memiliki status seperti draft, open, atau closed. Dengan fitur ini, recruiter dapat mengatur apakah lowongan masih terbuka atau sudah ditutup.

### Pencarian dan Filter Lowongan

Job seeker dapat melihat daftar lowongan yang tersedia. Sistem dapat menyediakan fitur pencarian dan filter agar pengguna lebih mudah menemukan pekerjaan yang sesuai.

Filter dapat dibuat berdasarkan keyword, lokasi, tipe pekerjaan, range gaji, atau status lowongan.

### Pengiriman Lamaran

Job seeker dapat mengirim lamaran pada lowongan yang tersedia. Saat melamar, pengguna dapat mengisi cover letter dan mengunggah CV sebagai dokumen pendukung.

Sistem menyimpan informasi lamaran agar recruiter dapat meninjau data pelamar dengan lebih mudah.

### Upload CV

Fitur upload CV digunakan agar job seeker dapat mengirimkan dokumen lamaran dalam bentuk file. File yang diunggah dapat divalidasi berdasarkan tipe file dan ukuran maksimal.

Contoh validasi yang dapat diterapkan adalah hanya menerima file PDF dengan ukuran maksimal tertentu.

### Manajemen Status Lamaran

Recruiter dapat mengubah status lamaran berdasarkan proses seleksi. Status lamaran dapat digunakan untuk menunjukkan tahapan proses rekrutmen, seperti submitted, reviewed, interview, accepted, atau rejected.

Job seeker dapat melihat status lamarannya sendiri sehingga proses rekrutmen menjadi lebih transparan.

### Dashboard Statistik

Sistem dapat menyediakan dashboard sederhana berupa data statistik. Recruiter dapat melihat jumlah lowongan, jumlah pelamar, dan jumlah lamaran berdasarkan status tertentu.

Job seeker juga dapat melihat ringkasan jumlah lamaran yang sudah dikirim serta status dari masing-masing lamaran.

### Dokumentasi API

Project ini dapat dilengkapi dengan dokumentasi API menggunakan Swagger/OpenAPI atau Postman Collection. Dokumentasi API membantu proses pengujian, demo, dan pemahaman endpoint yang tersedia.

Dokumentasi sebaiknya mencakup method, endpoint, parameter, request body, response success, response error, dan kebutuhan authorization.

## Ruang Lingkup Project

Ruang lingkup utama project ini adalah membangun backend API untuk sistem job portal dan applicant tracking system. Project ini tidak harus memiliki frontend, tetapi seluruh fitur backend harus dapat diuji melalui Postman, Thunder Client, atau Swagger.

Fokus utama project meliputi:

- Autentikasi dan authorization
- Pembagian role pengguna
- Pengelolaan lowongan kerja
- Pengiriman lamaran kerja
- Upload CV
- Pengelolaan status lamaran
- Validasi request
- Error handling
- Dokumentasi API
- Pengujian alur sistem melalui API

## Nilai Tambah Project

Beberapa fitur tambahan yang dapat meningkatkan kualitas project:

- Pagination pada daftar lowongan dan daftar lamaran
- Search dan filtering lowongan
- Rate limiting pada endpoint login
- Upload file dengan validasi
- Dashboard statistik
- Dokumentasi API yang lengkap
- Error response yang konsisten

## Teknologi yang Dapat Digunakan

Project ini dapat dibuat menggunakan teknologi backend modern seperti:

- Node.js
- Express.js
- TypeScript atau JavaScript
- Prisma ORM
- PostgreSQL atau MySQL
- JWT untuk autentikasi
- bcrypt atau Argon2 untuk hashing password
- Zod, Joi, atau express-validator untuk validasi request
- Multer untuk upload file
- Swagger atau Postman Collection untuk dokumentasi API

Teknologi tersebut dapat disesuaikan dengan kebutuhan kelompok dan arahan dari mentor atau dosen.

## Kelebihan Project

Jobify ATS cocok dijadikan tugas besar backend karena memiliki fitur yang jelas dan mudah dikembangkan. Project ini juga mencakup banyak aspek penting dalam backend development, seperti autentikasi, role access, upload file, validasi, error handling, dan dokumentasi API.

Selain itu, alur sistemnya mudah dipahami saat demo karena prosesnya menyerupai sistem rekrutmen nyata, mulai dari pembuatan lowongan, pengiriman lamaran, hingga perubahan status seleksi.

## Kesimpulan

Jobify ATS adalah backend sistem job portal dan applicant tracking system yang membantu proses rekrutmen antara recruiter dan job seeker. Sistem ini memungkinkan lowongan kerja dikelola secara digital, lamaran dikirim secara terstruktur, dan status seleksi dapat dipantau dengan jelas.

Dengan fitur autentikasi, pembagian role, manajemen lowongan, upload CV, dan pelacakan status lamaran, project ini sudah cukup kuat untuk memenuhi kebutuhan tugas besar backend sekaligus memberikan ruang untuk penambahan fitur bonus.
