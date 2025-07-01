"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, User, ChevronLeft } from "lucide-react"
import { useMemo } from "react"

interface NewsArticleProps {
  id: string
}

export function NewsArticle({ id }: NewsArticleProps) {
  const { language } = useLanguage()

  // Articles data
  const articles = useMemo(() => {
    return {
      "1": {
        title:
          language === "ar"
            ? "حفل تنصيب رئيس الجالية وتكريم القيادة السابقة"
            : "Upacara Pelantikan Ketua Komunitas dan Penghargaan Kepemimpinan Sebelumnya",
        content:
          language === "ar"
            ? `
            <p>في يوم تاريخي من أيام الجالية، شهدت القاعة الكبرى بتاريخ 8 مارس 2025 فعالية مميزة جمعت أبناء الجالية من مختلف الفئات والأعمار لحضور حفل تكريم وتنصيب رئيس الجالية الجديد، في أجواء مفعمة بالفخر والانتماء.</p>
            
            <p>بدأ الحفل بتلاوة عطرة من القرآن الكريم، تلتها كلمات ترحيبية من اللجنة المنظمة التي عبرت عن امتنانها العميق للحضور الكريم. ثم ألقيت كلمة مؤثرة من الرئيس السابق للجالية، الذي استعرض أبرز الإنجازات التي تحققت خلال فترة رئاسته، وتقدم بالشكر لكل من ساند ودعم مسيرة العمل المجتمعي، مؤكدًا أن خدمة أبناء الجالية شرف عظيم ومسؤولية لا حدود لها.</p>
            
            <p>عقب ذلك، تم تنصيب الرئيس الجديد للجالية وسط تصفيق حار من الحضور، حيث ألقى كلمة عبّر فيها عن امتنانه للثقة الكبيرة التي منحته إياها الجالية، وأكد التزامه بخدمة الجميع دون استثناء، والعمل على تعزيز الروابط والتواصل، وتمثيل الجالية بكل ما تستحقه من قوة وكرامة أمام الجهات الرسمية والمحلية.</p>
            
            <p>تخلل الحفل فقرات تكريمية للقيادات السابقة، وشهادات شكر وتقدير للمساهمين في مسيرة الجالية، واختُتمت الفعالية بدعوات صادقة بالتوفيق والسداد للمجلس الجديد، مع أمنيات باستمرار العطاء، وتكاتف الجهود لخدمة الصالح العام.</p>
            `
            : `
            <p>Dalam hari bersejarah komunitas, Aula Besar pada tanggal 8 Maret 2025 menyaksikan acara istimewa yang mengumpulkan anggota komunitas dari berbagai kategori dan usia untuk menghadiri upacara penghargaan dan pelantikan ketua komunitas baru, dalam suasana yang penuh kebanggaan dan rasa memiliki.</p>
            
            <p>Acara dimulai dengan pembacaan Al-Qur'an yang merdu, diikuti dengan kata-kata sambutan dari panitia penyelenggara yang mengungkapkan rasa terima kasih mendalam kepada para hadirin yang terhormat. Kemudian disampaikan pidato yang menyentuh dari ketua komunitas sebelumnya, yang mengulas pencapaian-pencapaian utama yang diraih selama masa kepemimpinannya, dan menyampaikan terima kasih kepada semua yang mendukung perjalanan kerja komunitas, menegaskan bahwa melayani anggota komunitas adalah kehormatan besar dan tanggung jawab tanpa batas.</p>
            
            <p>Setelah itu, dilakukan pelantikan ketua komunitas baru di tengah tepuk tangan meriah dari para hadirin, di mana beliau menyampaikan pidato yang mengungkapkan rasa terima kasihnya atas kepercayaan besar yang diberikan komunitas kepadanya, dan menegaskan komitmennya untuk melayani semua tanpa kecuali, bekerja untuk memperkuat ikatan dan komunikasi, serta mewakili komunitas dengan segenap kekuatan dan martabat yang layak di hadapan instansi resmi dan lokal.</p>
            
            <p>Acara diselingi dengan sesi penghargaan untuk kepemimpinan sebelumnya, sertifikat terima kasih dan apresiasi untuk para kontributor dalam perjalanan komunitas, dan ditutup dengan doa-doa tulus untuk kesuksesan dan bimbingan bagi dewan baru, dengan harapan untuk terus memberikan kontribusi dan bersatu dalam melayani kepentingan umum.</p>
            `,
        date: language === "ar" ? "٨ مارس ٢٠٢٥" : "8 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-1.png",
      },
      "2": {
        title:
          language === "ar"
            ? "الاجتماع الأول لمجلس أمناء الجالية اليمنية مع الرئيس الجديد"
            : "Pertemuan Pertama Dewan Pengurus Komunitas Yaman dengan Ketua Baru",
        content:
          language === "ar"
            ? `
            <p>في مساء يوم الخميس الموافق 13 مارس 2025، عُقد في العاصمة الإندونيسية جاكرتا الاجتماع الأول لمجلس أمناء الجالية اليمنية في إندونيسيا برئاسة الشيخ مبخوت المرادي، وبحضور رئيس الجالية المنتخب للدورة الثالثة الدكتور محمد الجمري، في لقاء يُعد منطلقًا عمليًا للدورة الجديدة التي تتطلع فيها الجالية إلى المزيد من الإنجاز والتطور.</p>
            
            <p>خلال الاجتماع، ناقش الأعضاء عددًا من القضايا المهمة التي تتعلق بمستقبل عمل الجالية، كان من أبرزها قائمة المرشحين للهيئة الإدارية للدورة الحالية، بالإضافة إلى تقديم العديد من المقترحات النوعية التي تهدف إلى تطوير الخدمات المقدمة لأبناء الجالية وتعزيز التواصل الفعّال داخلها وخارجها.</p>
            
            <p>أكد الحاضرون على ضرورة العمل بروح الفريق الواحد، والتعاون البناء بين كافة مكونات الجالية، بما يسهم في تحقيق الأهداف المشتركة، وترسيخ مبدأ التكافل، والانتماء، والمسؤولية المجتمعية.</p>
            
            <p>وقد شهد اللقاء حضور عدد من الشخصيات البارزة في الجالية، منهم: الأستاذ يوسف الجحدري، الأستاذ علي السعدي، الأستاذ أيمن السالمي، كما شارك في الاجتماع رجل الأعمال محمد الحامد، إضافة إلى حضور افتراضي لكل من: الأستاذ نادر بن طالب، الشيخ عبدالرحمن محفل.</p>
            
            <p>هذا الاجتماع يشكّل خطوة أساسية نحو رسم معالم المرحلة القادمة، ووضع خطط استراتيجية تنموية تسهم في رفع مستوى الأداء المؤسسي للجالية، وتعكس تطلعات أبنائها نحو بيئة مجتمعية متماسكة، مزدهرة، وفاعلة في محيطها الإندونيسي والعربي.</p>
            `
            : `
            <p>Pada malam Kamis, 13 Maret 2025, diadakan di ibu kota Indonesia Jakarta pertemuan pertama Dewan Pengurus Komunitas Yaman di Indonesia yang dipimpin oleh Syekh Mabkhout Al-Muradi, dengan kehadiran ketua komunitas terpilih periode ketiga Dr. Mohammed Al-Jamri, dalam pertemuan yang menjadi titik awal praktis untuk periode baru di mana komunitas mengharapkan lebih banyak pencapaian dan perkembangan.</p>
            
            <p>Selama pertemuan, para anggota membahas sejumlah isu penting yang berkaitan dengan masa depan kerja komunitas, yang paling menonjol adalah daftar kandidat untuk badan administratif periode saat ini, selain menyajikan banyak proposal kualitatif yang bertujuan untuk mengembangkan layanan yang diberikan kepada anggota komunitas dan meningkatkan komunikasi yang efektif di dalam dan luar komunitas.</p>
            
            <p>Para hadirin menegaskan perlunya bekerja dengan semangat satu tim, dan kerjasama konstruktif antara semua komponen komunitas, yang berkontribusi pada pencapaian tujuan bersama, dan memperkuat prinsip solidaritas, rasa memiliki, dan tanggung jawab sosial.</p>
            
            <p>Pertemuan ini dihadiri oleh sejumlah tokoh terkemuka dalam komunitas, termasuk: Profesor Yusuf Al-Jahdari, Profesor Ali Al-Saadi, Profesor Ayman Al-Salimi, juga berpartisipasi dalam pertemuan pengusaha Mohammed Al-Hamed, selain kehadiran virtual dari: Profesor Nader bin Talib, Syekh Abdurrahman Mahfal.</p>
            
            <p>Pertemuan ini merupakan langkah mendasar menuju menggambar fitur-fitur tahap selanjutnya, dan menyusun rencana strategis pembangunan yang berkontribusi pada peningkatan tingkat kinerja institusional komunitas, dan mencerminkan aspirasi anggotanya menuju lingkungan masyarakat yang kohesif, makmur, dan efektif dalam lingkungan Indonesia dan Arab.</p>
            `,
        date: language === "ar" ? "١٣ مارس ٢٠٢٥" : "13 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-2.png",
      },
      "3": {
        title:
          language === "ar"
            ? "تعيين محمد العيني نائبًا لرئيس الجالية اليمنية في إندونيسيا"
            : "Penunjukan Mohammed Al-Aini sebagai Wakil Ketua Komunitas Yaman di Indonesia",
        content:
          language === "ar"
            ? `
            <p>في خطوة تنظيمية مهمة تعكس روح المسؤولية والعمل الجماعي، أصدر رئيس الجالية اليمنية في إندونيسيا الدكتور محمد الجمري قرارًا بتعيين الأستاذ محمد العيني نائبًا له، وذلك في إطار استكمال الهيكل الإداري للجالية للدورة الثالثة.</p>
            
            <p>يأتي هذا التعيين في ظل توجه القيادة الجديدة نحو تعزيز الكفاءة الإدارية وتوزيع المهام بفاعلية، بما يضمن استمرار الجهود في خدمة أبناء الجالية وتحقيق أهدافها الاجتماعية والثقافية والتنموية في الأراضي الإندونيسية.</p>
            
            <p>ويُعد الأستاذ محمد العيني من الكفاءات النشطة في أوساط الجالية، وله حضور فاعل في العديد من المبادرات المجتمعية والأنشطة الثقافية والتنظيمية، كما يتمتع بخبرة طويلة في العمل الجماهيري والإداري، ما يؤهله للقيام بدوره الجديد بكل اقتدار.</p>
            
            <p>وقد عبّر الدكتور الجمري عن ثقته في قدرة العيني على الإسهام الفاعل في دعم مسيرة الجالية، والعمل بروح الفريق الواحد، مؤكدًا أن المرحلة القادمة ستشهد مزيدًا من التنسيق والتفاعل بين مختلف اللجان والإدارات، مع التركيز على فتح آفاق جديدة للتعاون مع الجهات الرسمية والمجتمعية في إندونيسيا.</p>
            
            <p>وتأتي هذه الخطوة ضمن سلسلة من الإجراءات التطويرية التي تسعى الجالية من خلالها إلى بناء منظومة متكاملة ذات رؤية واضحة وأهداف ملموسة تخدم مصالح الجالية وأفرادها على كافة المستويات.</p>
            `
            : `
            <p>Dalam langkah organisasi penting yang mencerminkan semangat tanggung jawab dan kerja tim, Ketua Komunitas Yaman di Indonesia Dr. Mohammed Al-Jamri mengeluarkan keputusan untuk menunjuk Profesor Mohammed Al-Aini sebagai wakilnya, dalam rangka melengkapi struktur administratif komunitas untuk periode ketiga.</p>
            
            <p>Penunjukan ini datang dalam konteks orientasi kepemimpinan baru menuju peningkatan efisiensi administratif dan distribusi tugas yang efektif, yang menjamin kelangsungan upaya dalam melayani anggota komunitas dan mencapai tujuan sosial, budaya, dan pembangunan di tanah Indonesia.</p>
            
            <p>Profesor Mohammed Al-Aini adalah salah satu kompetensi aktif di kalangan komunitas, dan memiliki kehadiran efektif dalam banyak inisiatif masyarakat dan kegiatan budaya dan organisasi, serta memiliki pengalaman panjang dalam kerja massa dan administratif, yang membuatnya memenuhi syarat untuk menjalankan peran barunya dengan kemampuan penuh.</p>
            
            <p>Dr. Al-Jamri mengungkapkan kepercayaannya pada kemampuan Al-Aini untuk berkontribusi efektif dalam mendukung perjalanan komunitas, dan bekerja dengan semangat satu tim, menegaskan bahwa tahap selanjutnya akan menyaksikan lebih banyak koordinasi dan interaksi antara berbagai komite dan departemen, dengan fokus pada membuka cakrawala baru untuk kerjasama dengan instansi resmi dan masyarakat di Indonesia.</p>
            
            <p>Langkah ini datang dalam serangkaian tindakan pengembangan yang melaluinya komunitas berusaha membangun sistem terintegrasi dengan visi yang jelas dan tujuan nyata yang melayani kepentingan komunitas dan anggotanya di semua tingkatan.</p>
            `,
        date: language === "ar" ? "١٥ مارس ٢٠٢٥" : "15 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-3.png",
      },
      "4": {
        title:
          language === "ar"
            ? "اعتماد أعضاء مجلس الأمناء للدورة الثالثة لجالية اليمن في إندونيسيا"
            : "Pengesahan Anggota Dewan Pengurus Periode Ketiga Komunitas Yaman di Indonesia",
        content:
          language === "ar"
            ? `
            <p>في إطار استكمال الهيكل الإداري والتنظيمي للجالية اليمنية في إندونيسيا، تم رسميًا اعتماد أعضاء مجلس الأمناء للدورة الثالثة، وذلك كخطوة استراتيجية تهدف إلى تعزيز أداء الجالية وتحقيق أهدافها لخدمة أبنائها في مختلف المدن الإندونيسية.</p>
            
            <p>وقد شمل قرار الاعتماد الشخصيات التالية:</p>
            <ul>
            <li>الشيخ مبخوت المرادي</li>
            <li>الأستاذ محمد الحامد</li>
            <li>الشيخ عبد الرحمن محفل</li>
            <li>الأستاذ علي السعدي</li>
            <li>الأستاذ أيمن السالمي</li>
            <li>الأستاذ نادر بن طالب</li>
            <li>الأستاذ يوسف الجحدري</li>
            </ul>
            
            <p>ويحمل هذا الاعتماد أهمية كبيرة كونه يمثل انطلاقة حقيقية لمرحلة عمل جديدة، تقوم على التكامل والتخطيط والتعاون بين كافة مكونات الجالية، وذلك في سبيل تعزيز حضورها المؤسسي وتوسيع خدماتها التعليمية والاجتماعية والثقافية.</p>
            
            <p>وتتطلع قيادة الجالية إلى أن يسهم أعضاء مجلس الأمناء بدور محوري في صياغة التوجهات المستقبلية، والإشراف على حسن سير الأداء، وضمان الشفافية والفاعلية في كافة أعمال الجالية، بما يتماشى مع تطلعات أبناء اليمن في إندونيسيا ويعزز روابطهم الوطنية والإنسانية.</p>
            
            <p>نسأل الله التوفيق للجميع، وأن تكون هذه الدورة نموذجًا يحتذى به في خدمة الجالية وتعزيز وحدتها.</p>
            `
            : `
            <p>Dalam rangka melengkapi struktur administratif dan organisasi Komunitas Yaman di Indonesia, secara resmi disahkan anggota Dewan Pengurus periode ketiga, sebagai langkah strategis yang bertujuan untuk meningkatkan kinerja komunitas dan mencapai tujuannya untuk melayani anggotanya di berbagai kota Indonesia.</p>
            
            <p>Keputusan pengesahan mencakup tokoh-tokoh berikut:</p>
            <ul>
            <li>Syekh Mabkhout Al-Muradi</li>
            <li>Profesor Mohammed Al-Hamed</li>
            <li>Syekh Abdurrahman Mahfal</li>
            <li>Profesor Ali Al-Saadi</li>
            <li>Profesor Ayman Al-Salimi</li>
            <li>Profesor Nader bin Talib</li>
            <li>Profesor Yusuf Al-Jahdari</li>
            </ul>
            
            <p>Pengesahan ini memiliki kepentingan besar karena mewakili peluncuran nyata untuk tahap kerja baru, yang didasarkan pada integrasi, perencanaan, dan kerjasama antara semua komponen komunitas, dalam rangka memperkuat kehadiran institusionalnya dan memperluas layanan pendidikan, sosial, dan budayanya.</p>
            
            <p>Kepemimpinan komunitas berharap bahwa anggota Dewan Pengurus akan berkontribusi dengan peran sentral dalam merumuskan orientasi masa depan, mengawasi jalannya kinerja yang baik, dan memastikan transparansi dan efektivitas dalam semua pekerjaan komunitas, sesuai dengan aspirasi orang-orang Yaman di Indonesia dan memperkuat ikatan nasional dan kemanusiaan mereka.</p>
            
            <p>Kami memohon kepada Allah untuk memberikan kesuksesan kepada semua, dan semoga periode ini menjadi model yang patut dicontoh dalam melayani komunitas dan memperkuat persatuannya.</p>
            `,
        date: language === "ar" ? "١٨ مارس ٢٠٢٥" : "18 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-4.png",
      },
      "5": {
        title:
          language === "ar"
            ? "تكليف عبدالرحمن قايد بالسكرتارية العامة للجالية اليمنية في إندونيسيا"
            : "Penugasan Abdurrahman Qaid sebagai Sekretaris Jenderal Komunitas Yaman di Indonesia",
        content:
          language === "ar"
            ? `
            <p>أصدر رئيس الجالية اليمنية في إندونيسيا القرار الإداري رقم (001/2025) القاضي بتكليف الأستاذ عبدالرحمن محمد قايد للقيام بأعمال السكرتارية العامة للجالية اليمنية، وذلك استنادًا إلى قرارات وزارة العدل وحقوق الإنسان الإندونيسية بشأن الجمعيات الخيرية، ونظام الجالية المعتمد رسميًا.</p>
            
            <p>وجاء هذا التكليف بناءً على:</p>
            <ul>
            <li>قرار وزارة العدل وحقوق الإنسان الإندونيسية رقم AHU-0000041.AH.01.04 لسنة 2024 بشأن الجمعيات الخيرية</li>
            <li>قرار وزارة العدل وحقوق الإنسان رقم AHU-0000041.AH.01.12 لسنة 2024</li>
            <li>نظام الجالية الأساسي المسجل لدى الحكومة الإندونيسية</li>
            </ul>
            
            <p>مواد القرار:</p>
            <ol>
            <li>يكلف الأستاذ عبدالرحمن قايد بأعمال السكرتارية العامة.</li>
            <li>يتم إبلاغ الجهات المعنية للعمل بموجبه.</li>
            <li>يتم نشر القرار في مجموعة الجالية ومواقع التواصل الاجتماعي الخاصة بها.</li>
            </ol>
            
            <p>ويأتي هذا القرار ضمن سلسلة من الإجراءات الإدارية والتنظيمية الهادفة إلى تعزيز كفاءة العمل المؤسسي في الجالية، وضمان انسيابية التواصل وتنظيم المهام بشكل مهني ومنهجي يخدم المصلحة العامة.</p>
            `
            : `
            <p>Ketua Komunitas Yaman di Indonesia mengeluarkan keputusan administratif nomor (001/2025) yang menugaskan Profesor Abdurrahman Mohammed Qaid untuk melaksanakan tugas Sekretaris Jenderal Komunitas Yaman, berdasarkan keputusan Kementerian Hukum dan Hak Asasi Manusia Indonesia tentang organisasi amal, dan sistem komunitas yang resmi diadopsi.</p>
            
            <p>Penugasan ini datang berdasarkan:</p>
            <ul>
            <li>Keputusan Kementerian Hukum dan Hak Asasi Manusia Indonesia nomor AHU-0000041.AH.01.04 tahun 2024 tentang organisasi amal</li>
            <li>Keputusan Kementerian Hukum dan Hak Asasi Manusia nomor AHU-0000041.AH.01.12 tahun 2024</li>
            <li>Sistem dasar komunitas yang terdaftar di pemerintah Indonesia</li>
            </ul>
            
            <p>Pasal-pasal keputusan:</p>
            <ol>
            <li>Profesor Abdurrahman Qaid ditugaskan dengan pekerjaan Sekretaris Jenderal.</li>
            <li>Pihak-pihak terkait diberitahu untuk bekerja sesuai dengannya.</li>
            <li>Keputusan dipublikasikan di grup komunitas dan situs media sosialnya.</li>
            </ol>
            
            <p>Keputusan ini datang dalam serangkaian tindakan administratif dan organisasi yang bertujuan untuk meningkatkan efisiensi kerja institusional dalam komunitas, dan memastikan kelancaran komunikasi dan organisasi tugas secara profesional dan metodis yang melayani kepentingan umum.</p>
            `,
        date: language === "ar" ? "٢٠ مارس ٢٠٢٥" : "20 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-5.png",
      },
      "6": {
        title:
          language === "ar"
            ? "تكليف فاطمة السقاف مسؤولة للقطاع النسائي في الجالية اليمنية"
            : "Penugasan Fatimah Al-Saqqaf sebagai Penanggung Jawab Sektor Wanita Komunitas Yaman",
        content:
          language === "ar"
            ? `
            <p>في خطوة نوعية تعزز من تمكين المرأة اليمنية في المجتمع الإندونيسي، أصدر رئيس الجالية اليمنية في إندونيسيا القرار الإداري رقم (002/2025) بتاريخ 22 مارس 2025، القاضي بتكليف الأستاذة فاطمة علي عبدالقادر السقاف لتولي مسؤولية القطاع النسائي في الجالية.</p>
            
            <p>وقد جاء القرار استنادًا إلى الأنظمة واللوائح الرسمية المعتمدة للجمعيات الخيرية في إندونيسيا، والهيكل التنظيمي المعتمد للجالية.</p>
            
            <p>مواد القرار:</p>
            <ol>
            <li>تكليف الأستاذة فاطمة السقاف بمسؤولية القطاع النسائي.</li>
            <li>يتم إبلاغ الجهات المعنية للعمل بموجب القرار.</li>
            <li>يتم نشر القرار في مجموعة الجالية اليمنية ومواقع التواصل الاجتماعي الخاصة بها.</li>
            </ol>
            
            <p>ويُعد هذا التكليف نقلة مهمة في دعم العمل النسائي داخل الجالية، حيث تسعى القيادة الجديدة إلى تعزيز دور المرأة ومشاركتها في كافة الأنشطة الثقافية والاجتماعية والتعليمية، ضمن إطار مؤسسي فعّال يتيح للطاقات النسائية الإبداع والتأثير الإيجابي في المجتمع.</p>
            `
            : `
            <p>Dalam langkah kualitatif yang memperkuat pemberdayaan perempuan Yaman dalam masyarakat Indonesia, Ketua Komunitas Yaman di Indonesia mengeluarkan keputusan administratif nomor (002/2025) pada tanggal 22 Maret 2025, yang menugaskan Profesor Fatimah Ali Abdulqadir Al-Saqqaf untuk mengambil tanggung jawab sektor wanita dalam komunitas.</p>
            
            <p>Keputusan ini datang berdasarkan sistem dan peraturan resmi yang diadopsi untuk organisasi amal di Indonesia, dan struktur organisasi yang diadopsi untuk komunitas.</p>
            
            <p>Pasal-pasal keputusan:</p>
            <ol>
            <li>Profesor Fatimah Al-Saqqaf ditugaskan dengan tanggung jawab sektor wanita.</li>
            <li>Pihak-pihak terkait diberitahu untuk bekerja sesuai dengan keputusan.</li>
            <li>Keputusan dipublikasikan di grup Komunitas Yaman dan situs media sosialnya.</li>
            </ol>
            
            <p>Penugasan ini merupakan langkah penting dalam mendukung kerja wanita dalam komunitas, di mana kepemimpinan baru berusaha untuk memperkuat peran wanita dan partisipasinya dalam semua kegiatan budaya, sosial, dan pendidikan, dalam kerangka institusional yang efektif yang memungkinkan energi wanita untuk berkreasi dan berdampak positif dalam masyarakat.</p>
            `,
        date: language === "ar" ? "٢٢ مارس ٢٠٢٥" : "22 Maret 2025",
        location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
        author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
        image: "/images/news-6.png",
      },
    }
  }, [language])

  const article = articles[id as keyof typeof articles]

  if (!article) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">{language === "ar" ? "المقال غير موجود" : "Artikel tidak ditemukan"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{language === "ar" ? "الرئيسية" : "Beranda"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/media/news">{language === "ar" ? "الأخبار" : "Berita"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/media/news/${id}`} className="line-clamp-1 max-w-[200px]">
                {article.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="overflow-hidden border-0 shadow-md">
          {/* Article Header */}
          <div className="bg-muted p-6 md:p-8">
            <h1 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl leading-relaxed">{article.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{article.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="relative aspect-video w-full">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="prose max-w-none lg:prose-lg" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Back Button */}
          <div className="border-t p-6 md:p-8">
            <Button asChild variant="outline">
              <Link href="/media/news" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                {language === "ar" ? "العودة إلى الأخبار" : "Kembali ke Berita"}
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
