import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

export const sendEmail = async (email, subject, destination, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: process.env.PORT_MAIL,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    await transporter
      .sendMail({
        from: process.env.NAME_MAIL + `<${process.env.USER_MAIL}>`, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // text: "Untuk verifikasi alamat email anda, masukkan link berikut ke browser anda : " + message, // plain text body
        html: `<p>Untuk ${destination} Anda klik <a href="http://${message}" target="_blank">disini</a>, atau masukkan link ini ke browser anda : <br> <span style="color:blue">http://${message}</span> </p>`, // html body
      })
      .then((info) => {
        console.log({ info });
      });
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

export const sendEmailInterviewer = async (email, subject, password) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: 587,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    await transporter
      .sendMail({
        from: process.env.NAME_MAIL + `<${process.env.USER_MAIL}>`,
        to: email, // list of receivers
        subject: subject,
        html: `<p>Akun anda berhasil dibuat, berikut merupakan akun user anda. <br> <span style="font-weight: bold"> email : ${email} <br> Password : ${password} </span> </p>`, // html body
      })
      .then((info) => {
        console.log({ info });
      });
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

export const sendEmailApplication = async (
  email,
  subject,
  name,
  no_test,
  position,
  time_selection,
  time,
  place
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: 587,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    await transporter
      .sendMail({
        from: process.env.NAME_MAIL + `<${process.env.USER_MAIL}>`,
        to: email, // list of receivers
        subject: subject,
        html: `<p>Kepada : <span style="font-weight:bold">${name}</span> <br />
      No test : <span style="font-weight:bold">${no_test}</span> </p>
      
      <p>Terima kasih atas aplikasi lamaran anda sebagai calon karyawan PT Sumitomo Wiring Systems Batam Indonesia. </p>
      <p>Sehubungan dengan kebutuhan <span style="font-weight:bold">${position}</span> di Perusahaan kami, maka dengan ini kami mengundang Saudara untuk mengikuti proses seleksi tahap-1 yang akan dilaksanakan pada : </p>
      
      <p>Hari/ Tanggal	: <span style="font-weight:bold">${time_selection}</span> </p>
      <p>Waktu	: <span style="font-weight:bold">${time}</span></p>
      <p>Tempat	: <span style="font-weight:bold">${place}</span> </p>
      <p>Pakaian	: Baju Kemeja Putih (lengan panjang), Celana bahan kain berwarna hitam, menggunakan sepatu, dan wajib memakai masker (diutamakan menggunakan masker medis) </p>
      <p>Peralatan	: KTP asli, Handphone/ laptop lengkap dengan internet/ data seluler untuk tes, Pena, Kertas maks 1 lembar (jika diperlukan)</p>
      
      <p>Hal-hal yang perlu diperhatikan: </p>
      
      <ol>
      <li>Proses Rekrutmen ini dilakukan dengan melaksanakan protokol kesehatan pencegahan Covid-19 (menjaga jarak/ physical distancing, selalu menggunakan masker dengan menutup hidung, mulut, hingga dagu)</li>
      <li>Demi keamanan bersama, maka seluruh kandidat diwajibkan untuk mematuhi protokol Covid-19 serta hadir sesuai jadwal yang telah diaturkan (wajib hadir 15 menit sebelum jadwal tes, tidak boleh terlalu awal atau terlambat, guna meminimalisir kerumunan)</li>
      <li>Kandidat wajib menghapal nomor tes dan wajib menggunakan badge No Tes yang terbuat dari kertas yg memuat No Tes kandidat (di print, dipakai/ ditempel di dada sebelah kiri)</li>
      <li>Kandidat yang menggunakan hp android diwajibkan mendownload aplikasi atau membuka situs internet yg dapat scan barcode terlebih dahulu</li>
      <li>Tidak ada dispensasi karena keterlambatan atau gangguan teknis akibat kelalaian dalam mempesiapkan item di atas</li>
      <li>Mohon konfirmasi kehadiran anda pada website recruitment.sbi.co.id menu announcement</li>
      </ol>
      
      <p>Demikian kami informasikan, terima kasih atas perhatian dan kerjasamanya. </p>
      <p>Hormat kami, </p>
      <p>Tim Rekrutmen </p>
      <p>PT Sumitomo Wiring Systems Batam Indonesia
      </p>`, // html body
      })
      .then((info) => {
        console.log({ info });
      });
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

export const sendEmailAnnoncement = async (
  email,
  subject,
  name,
  no_test,
  position,
  time_selection,
  next_selection,
  time,
  place
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: 587,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    await transporter
      .sendMail({
        from: process.env.NAME_MAIL + `<${process.env.USER_MAIL}>`,
        to: email, // list of receivers
        subject: subject,
        html: `<p>Kepada : <span style="font-weight:bold">${name}</span> <br />
      No test : <span style="font-weight:bold">${no_test}</span> </p>
      
      <p>Terima kasih atas aplikasi lamaran anda sebagai calon karyawan PT Sumitomo Wiring Systems Batam Indonesia. </p>
      <p>Sehubungan dengan kebutuhan <span style="font-weight:bold">${position}</span> di Perusahaan kami, maka dengan ini kami mengundang Saudara untuk mengikuti proses seleksi <span style="font-weight:bold">${next_selection}</span> yang akan dilaksanakan pada : </p>
      
      <p>Hari/ Tanggal	: <span style="font-weight:bold">${time_selection}</span> </p>
      <p>Waktu	: <span style="font-weight:bold">${time}</span></p>
      <p>Tempat	: <span style="font-weight:bold">${place}</span> </p>
      <p>Pakaian	: Baju Kemeja Putih (lengan panjang), Celana bahan kain berwarna hitam, menggunakan sepatu, dan wajib memakai masker (diutamakan menggunakan masker medis) </p>
      
      <p>Silahkan mengisi konfirmasi kehadiran pada Website recruitment.sbi.co.id pada menu Application kemudian check status</p>
      
      <p>Demikian kami informasikan, terima kasih atas perhatian dan kerjasamanya. </p>
      <p>Hormat kami, </p>
      <p>Tim Rekrutmen </p>
      <p>PT Sumitomo Wiring Systems Batam Indonesia
      </p>`, // html body
      })
      .then((info) => {
        console.log({ info });
      });
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};

export const sendInductionEmail = async (
  email,
  subject,
  name,
  no_test,
  position,
  time_selection,
  next_selection,
  time,
  place
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_MAIL,
      port: 587,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    await transporter
      .sendMail({
        from: process.env.NAME_MAIL + `<${process.env.USER_MAIL}>`,
        to: email, // list of receivers
        subject: subject,
        html: `<p>Kepada : <span style="font-weight:bold">${name}</span> <br />
      No test : <span style="font-weight:bold">${no_test}</span> </p>
      
      <p>Terima kasih atas aplikasi lamaran anda sebagai calon karyawan PT Sumitomo Wiring Systems Batam Indonesia. </p>
      <p>Selamat Bergabung di PT Sumitomo Wiring System Batam Indonesia. </p>
      <p>Sehubungan dengan kebutuhan <span style="font-weight:bold">${position}</span> di Perusahaan kami, maka dengan ini kami mengundang Saudara untuk mengikuti proses selanjutnya yaitu <span style="font-weight:bold">${next_selection}</span> yang akan dilaksanakan pada : </p>
      
      <p>Hari/ Tanggal	: <span style="font-weight:bold">${time_selection}</span> </p>
      <p>Waktu	: <span style="font-weight:bold">${time}</span></p>
      <p>Tempat	: <span style="font-weight:bold">${place}</span> </p>
      <p>Pakaian	: Baju Kemeja Putih (lengan panjang), Celana bahan kain berwarna hitam, menggunakan sepatu, dan wajib memakai masker (diutamakan menggunakan masker medis) </p>
      
      <p>Demikian kami informasikan, terima kasih atas perhatian dan kerjasamanya. </p>
      <p>Hormat kami, </p>
      <p>Tim Rekrutmen </p>
      <p>PT Sumitomo Wiring Systems Batam Indonesia
      </p>`, // html body
      })
      .then((info) => {
        console.log({ info });
      });
  } catch (error) {
    console.log("Email not send");
    console.log(error);
  }
};
