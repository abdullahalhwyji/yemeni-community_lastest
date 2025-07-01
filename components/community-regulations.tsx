"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CommunityRegulations() {
  const { t, language } = useLanguage()

  const regulations = [
    {
      title: language === "ar" ? "شروط الحصول على العضوية الرسمية" : "Persyaratan Keanggotaan Resmi",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">شروط الحصول على العضوية الرسمية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>أن يكون يمنياً مقيماً في إندونيسيا بإقامة نظامية.</li>
              <li>ألا يقل عمره عن 18 عاماً.</li>
              <li>تعبئة استمارة طلب الانتساب.</li>
              <li>الالتزام بكافة أنظمة ولوائح الجالية.</li>
              <li>دفع رسوم الانتساب والاشتراكات الشهرية المقدرة بـ (50,000 روبية).</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Persyaratan Keanggotaan Resmi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Harus warga negara Yaman yang tinggal di Indonesia dengan izin tinggal resmi.</li>
              <li>Berusia minimal 18 tahun.</li>
              <li>Mengisi formulir permohonan keanggotaan.</li>
              <li>Berkomitmen pada semua peraturan dan ketentuan komunitas.</li>
              <li>Membayar biaya pendaftaran dan iuran bulanan sebesar 50.000 rupiah.</li>
            </ul>
          </div>
        ),
    },
    {
      title: language === "ar" ? "حقوق العضو الرسمي" : "Hak Anggota Resmi",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">حقوق العضو الرسمي:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>الحق في إبداء الرأي وتقديم المشورة والنقد البناء.</li>
              <li>الحق في الحصول على الرعاية والمساعدة والاستفادة من خدمات الجالية.</li>
              <li>الحق في الانتخاب لاختيار الإدارة التنفيذية.</li>
              <li>الحق في الترشح لعضوية الإدارة التنفيذية عند توفر الشروط.</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Hak Anggota Resmi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hak untuk menyampaikan pendapat, memberikan saran, dan kritik yang membangun.</li>
              <li>Hak untuk mendapatkan perawatan, bantuan, dan memanfaatkan layanan komunitas.</li>
              <li>Hak untuk memilih dalam pemilihan pengurus eksekutif.</li>
              <li>Hak untuk mencalonkan diri sebagai anggota pengurus eksekutif jika memenuhi syarat.</li>
            </ul>
          </div>
        ),
    },
    {
      title: language === "ar" ? "واجبات العضو الرسمي" : "Kewajiban Anggota Resmi",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">واجبات العضو الرسمي:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>المشاركة الفعالة في أنشطة وبرامج الجالية.</li>
              <li>الالتزام بنظام الجالية وقراراتها ولوائحها الإدارية.</li>
              <li>الالتزام بقوانين جمهورية إندونيسيا، وعدم الانتماء للتيارات المعادية للبلدين.</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Kewajiban Anggota Resmi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Berpartisipasi aktif dalam kegiatan dan program komunitas.</li>
              <li>Mematuhi sistem, keputusan, dan peraturan administratif komunitas.</li>
              <li>Mematuhi hukum Republik Indonesia dan tidak bergabung dengan kelompok yang memusuhi kedua negara.</li>
            </ul>
          </div>
        ),
    },
    {
      title: language === "ar" ? "مجلس الأمناء" : "Dewan Pengawas",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">مجلس الأمناء:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>يتكون مجلس الأمناء من (7) أعضاء يختارهم المؤسسون.</li>
              <li>مدة صلاحية مجلس الأمناء تكون مساوية لمدة صلاحية الإدارة التنفيذية (سنتان).</li>
              <li>يتولى المجلس رسم السياسات والأهداف العامة للجالية ووضع التشريعات اللازمة.</li>
              <li>يشرف على الإدارة التنفيذية ويحاسبها، وله صلاحية التغيير فيها إذا لزم الأمر.</li>
              <li>يعقد اجتماعاً كل أربعة أشهر لمناقشة تقرير الإدارة التنفيذية.</li>
              <li>تُتخذ قراراته بأغلبية النصف + واحد.</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Dewan Pengawas:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dewan Pengawas terdiri dari 7 anggota yang dipilih oleh para pendiri.</li>
              <li>Masa jabatan Dewan Pengawas sama dengan masa jabatan pengurus eksekutif (2 tahun).</li>
              <li>
                Dewan bertugas merumuskan kebijakan dan tujuan umum komunitas serta menetapkan peraturan yang
                diperlukan.
              </li>
              <li>
                Mengawasi pengurus eksekutif dan meminta pertanggungjawaban, serta berwenang melakukan perubahan jika
                diperlukan.
              </li>
              <li>Mengadakan rapat setiap empat bulan untuk membahas laporan pengurus eksekutif.</li>
              <li>Keputusan diambil dengan mayoritas setengah plus satu.</li>
            </ul>
          </div>
        ),
    },
    {
      title: language === "ar" ? "الإدارة التنفيذية" : "Pengurus Eksekutif",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">الإدارة التنفيذية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>
                تتكون من ستة أفراد: رئيس الجالية، ونائبه، والمسؤول المالي، والمسؤول الثقافي والتعليمي، والمسؤول التجاري،
                ومسؤول العلاقات العامة والإعلام.
              </li>
              <li>نائب رئيس الجالية يتم تعيينه بالتوافق بين رئيس الجالية المنتخب ومجلس الأمناء.</li>
              <li>تتولى الإدارة تنفيذ قرارات وتوصيات مجلس الأمناء وتحقيق أهداف الجالية.</li>
              <li>تُعقد اجتماعات دورية كل شهر، واجتماعات طارئة عند الضرورة.</li>
              <li>تُتخذ القرارات بالأغلبية، وفي حال تساوي الأصوات، يُرجح الجانب الذي فيه الرئيس أو نائبه.</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Pengurus Eksekutif:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Terdiri dari enam orang: ketua komunitas, wakil ketua, penanggung jawab keuangan, penanggung jawab
                budaya dan pendidikan, penanggung jawab perdagangan, dan penanggung jawab hubungan masyarakat dan media.
              </li>
              <li>Wakil ketua komunitas ditunjuk berdasarkan kesepakatan antara ketua terpilih dan dewan pengawas.</li>
              <li>
                Pengurus bertugas melaksanakan keputusan dan rekomendasi dewan pengawas serta mencapai tujuan komunitas.
              </li>
              <li>Mengadakan rapat rutin setiap bulan dan rapat darurat jika diperlukan.</li>
              <li>
                Keputusan diambil dengan mayoritas, dan jika suara berimbang, pihak yang didukung ketua atau wakilnya
                yang menang.
              </li>
            </ul>
          </div>
        ),
    },
    {
      title: language === "ar" ? "لوائح خاصة بالانتخابات" : "Peraturan Khusus Pemilihan",
      content:
        language === "ar" ? (
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-primary mb-2">لجنة الإشراف على الانتخابات:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-sm">
                <li>يتم تشكيل لجنة من خمسة أفراد لإدارة الانتخابات قبل شهر من موعد إجرائها.</li>
                <li>
                  من مهام اللجنة: وضع برنامج زمني للانتخابات، استقبال طلبات الترشح والبت فيها، والإشراف على عملية
                  الاقتراع والفرز وإعلان النتائج.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">شروط الترشح للإدارة:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-sm">
                <li>أن يكون المرشح حاصلاً على عضوية رسمية.</li>
                <li>ألا يقل عمره عن 25 سنة.</li>
                <li>أن يكون مقيماً في جاكرتا، أو مستعداً للإقامة فيها بعد الفوز.</li>
                <li>أن يقدم سيرة ذاتية إلى لجنة الانتخابات.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">الدورة الانتخابية:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-sm">
                <li>مدة الدورة الانتخابية سنتان.</li>
                <li>لا يمكن لأعضاء الإدارة التنفيذية الترشح لأكثر من دورتين متتاليتين للمنصب نفسه.</li>
                <li>
                  في الظروف الاستثنائية، يمكن تمديد فترة الدورة الانتخابية لمدة لا تتجاوز 3 أشهر، بشرط موافقة أغلبية
                  مجلس الأمناء ومجلس الإدارة.
                </li>
                <li>يتم اعتماد المرشح الحاصل على أكبر عدد من الأصوات كرئيس للجالية.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-primary mb-2">Komite Pengawas Pemilihan:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>
                  Dibentuk komite yang terdiri dari lima orang untuk mengelola pemilihan satu bulan sebelum pelaksanaan.
                </li>
                <li>
                  Tugas komite: menyusun jadwal pemilihan, menerima dan memutuskan permohonan pencalonan, mengawasi
                  proses pemungutan suara, penghitungan, dan pengumuman hasil.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Syarat Pencalonan Pengurus:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Calon harus memiliki keanggotaan resmi.</li>
                <li>Berusia minimal 25 tahun.</li>
                <li>Tinggal di Jakarta atau bersedia tinggal di Jakarta setelah terpilih.</li>
                <li>Menyerahkan CV kepada komite pemilihan.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Periode Pemilihan:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Periode pemilihan adalah dua tahun.</li>
                <li>
                  Anggota pengurus eksekutif tidak dapat mencalonkan diri lebih dari dua periode berturut-turut untuk
                  posisi yang sama.
                </li>
                <li>
                  Dalam keadaan luar biasa, periode dapat diperpanjang maksimal 3 bulan dengan persetujuan mayoritas
                  dewan pengawas dan pengurus.
                </li>
                <li>Calon dengan suara terbanyak ditetapkan sebagai ketua komunitas.</li>
              </ul>
            </div>
          </div>
        ),
    },
    {
      title: language === "ar" ? "أحكام عامة" : "Ketentuan Umum",
      content:
        language === "ar" ? (
          <div className="space-y-3">
            <p className="font-semibold text-primary">أحكام عامة:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>لا يحق لأي جهة ممارسة أي نشاط باسم الجالية ما لم تكن مخولة بذلك رسمياً.</li>
              <li>يُحظر ممارسة أي أنشطة حزبية أو مناطقية أو طائفية في الجالية أو برامجها.</li>
              <li>تنتهي السنة المالية للجالية في 31 ديسمبر من كل عام.</li>
              <li>أي تعديل على هذا النظام الأساسي يجب أن يحصل على اعتماد أغلبية المجلس التأسيسي.</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-primary">Ketentuan Umum:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tidak ada pihak yang berhak melakukan kegiatan atas nama komunitas kecuali diberi wewenang resmi.</li>
              <li>Dilarang melakukan kegiatan politik, kedaerahan, atau sektarian dalam komunitas atau programnya.</li>
              <li>Tahun keuangan komunitas berakhir pada 31 Desember setiap tahun.</li>
              <li>Setiap perubahan pada peraturan dasar ini harus mendapat persetujuan mayoritas dewan pendiri.</li>
            </ul>
          </div>
        ),
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {language === "ar" ? "اللوائح التنظيمية للجالية" : "Peraturan Organisasi Komunitas"}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "القواعد والأنظمة المعتمدة التي تنظم عمل الجالية وتضمن الشفافية والمشاركة الفعالة لجميع الأعضاء"
              : "Aturan dan peraturan yang diadopsi yang mengatur kerja komunitas dan menjamin transparansi serta partisipasi aktif semua anggota"}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {regulations.map((regulation, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {regulation.title}
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">{regulation.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
