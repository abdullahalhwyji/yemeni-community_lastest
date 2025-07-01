"use client"

import { useLanguage } from "@/components/language-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Users, Crown, Shield, UserCheck, FileText, Award } from "lucide-react"

export function CommunityManagement() {
  const { language } = useLanguage()

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const teamStructure = {
    president: {
      name: language === "ar" ? "محمد حسن علي الجمري" : "MOHAMMED HASAN ALI ALGAMRI",
      role: language === "ar" ? "رئيس الجالية" : "Ketua Komunitas",
      image: "https://drive.google.com/uc?export=view&id=1F8R5wnoGFhiw39e09cUexmhEWKaDQmya",
      icon: Crown,
      description: language === "ar" ? "يقود الجالية اليمنية في إندونيسيا" : "Memimpin Komunitas Yaman di Indonesia",
    },
    vicePresident: {
      name: language === "ar" ? "محمد علي العيني" : "Mohammed Ali AL Aini",
      role: language === "ar" ? "نائب الرئيس" : "Wakil Ketua",
      image: null,
      icon: Shield,
      description: language === "ar" ? "يساعد في إدارة شؤون الجالية" : "Membantu mengelola urusan komunitas",
    },
    secretaryGeneral: {
      name: language === "ar" ? "عبد الرحمن قائد" : "ABDUL RAHMAN MOHAMMED QAID MOHAMMED",
      role: language === "ar" ? "الأمين العام للجالية" : "Sekretaris Jenderal Komunitas",
      image: "https://drive.google.com/uc?export=view&id=1HLphcACn1M03nbfEuNw8ytTAyqOQlUP8",
      icon: UserCheck,
      description:
        language === "ar" ? "ينسق الأنشطة والمراسلات الرسمية" : "Mengoordinasikan kegiatan dan korespondensi resmi",
    },
    departments: [
      {
        name: language === "ar" ? "محمد حسين باناجه" : "Mohammed Hussein Ba Naga",
        role:
          language === "ar" ? "مسؤول دائرة العلاقات العامة والإعلام" : "Penanggung Jawab Hubungan Masyarakat dan Media",
        image: "https://drive.google.com/uc?export=view&id=13MCM8GRDdcAMS6AfPpyucpcrOhD_LVwS",
        department: language === "ar" ? "العلاقات العامة" : "Hubungan Masyarakat",
      },
      {
        name: language === "ar" ? "يونس محمد مثنى المريسي" : "YUNES MOHAMMED MUTHANNA AL-MURISI",
        role: language === "ar" ? "مسؤول الدائرة المالية" : "Penanggung Jawab Keuangan",
        image: "https://drive.google.com/uc?export=view&id=1UwLDgr3lbVymKu9bwdfGhA1raHKcdOJA",
        department: language === "ar" ? "المالية" : "Keuangan",
      },
      {
        name: language === "ar" ? "سيف عبدالرحمن سيف العمري" : "Saif Abdulrahman Saif Alomari",
        role: language === "ar" ? "مسؤول الدائرة الثقافية" : "Penanggung Jawab Budaya",
        image: "https://drive.google.com/uc?export=view&id=1rLX2v6mDsSJjE5eujV6Mz4arUTAHZ_E9",
        department: language === "ar" ? "الثقافة" : "Budaya",
      },
      {
        name: language === "ar" ? "فاطمة علوي عبدالقادر السقاف" : "Fatima Alawi Abdulqader",
        role: language === "ar" ? "مسؤول القطاع النسائي" : "Penanggung Jawab Sektor Wanita",
        image: null,
        department: language === "ar" ? "القطاع النسائي" : "Sektor Wanita",
      },
      {
        name: language === "ar" ? "معتصم هادي علي الشاوش" : "Muatasem Hadi Ali Alshawesh",
        role: language === "ar" ? "مسؤول الدائرة الرياضية" : "Penanggung Jawab Olahraga",
        image: "https://drive.google.com/uc?export=view&id=1Q1tW0XpAKkGsQkCX5S0qV6AsSUTfSjEi",
        department: language === "ar" ? "الرياضة" : "Olahraga",
      },
    ],
  }

  const committees = [
    {
      id: "education",
      name: language === "ar" ? "لجنة التعليم والتدريب" : "Komite Pendidikan dan Pelatihan",
      description:
        language === "ar"
          ? "تهتم بتطوير البرامج التعليمية وتدريب أفراد الجالية"
          : "Mengembangkan program pendidikan dan pelatihan untuk anggota komunitas",
      members: [
        {
          name: language === "ar" ? "د. خالد الحميدي" : "Dr. Khalid Al-Hamidi",
          role: language === "ar" ? "رئيس اللجنة" : "Ketua Komite",
          image: null,
        },
        {
          name: language === "ar" ? "أ. سارة العمري" : "Prof. Sarah Al-Amri",
          role: language === "ar" ? "منسقة البرامج" : "Koordinator Program",
          image: null,
        },
        {
          name: language === "ar" ? "أ. ياسر الصلاحي" : "Prof. Yasser Al-Salahi",
          role: language === "ar" ? "مسؤول المناهج" : "Penanggung Jawab Kurikulum",
          image: null,
        },
      ],
    },
    {
      id: "public-relations",
      name: language === "ar" ? "لجنة العلاقات العامة والإعلام" : "Komite Hubungan Masyarakat dan Media",
      description:
        language === "ar"
          ? "تدير العلاقات الخارجية والأنشطة الإعلامية للجالية"
          : "Mengelola hubungan eksternal dan kegiatan media komunitas",
      members: [
        {
          name: language === "ar" ? "محمد حسين باناجه" : "Mohammed Hussein Ba Naga",
          role: language === "ar" ? "رئيس اللجنة" : "Ketua Komite",
          image: "https://drive.google.com/uc?export=view&id=1enjxzceZeIuoc61hvtYosBF-rhkAHf0U",
        },
        {
          name: language === "ar" ? "عبد الرحمن قائد" : "ABDUL RAHMAN MOHAMMED QAID MOHAMMED",
          role: language === "ar" ? "نائب رئيس اللجنة" : "Wakil Ketua Komite",
          image: "https://drive.google.com/uc?export=view&id=1HLphcACn1M03nbfEuNw8ytTAyqOQlUP8",
        },
        {
          name: language === "ar" ? "عبدالله محمد احمد الحويجي" : "Abdullah Mohammed Ahmed Alhwyji",
          role: language === "ar" ? "رئيس فريق الموقع الالكتروني" : "Ketua Tim Website",
          image: "https://drive.google.com/uc?export=view&id=16tgSUfONcOFZrtRxSDVV0xFhr4JS9jWq",
        },
        {
          name: language === "ar" ? "أمجد عارف عبدالرزاق درهم العامري" : "Amgad Aref Abdulrazzaq Al-Ameri",
          role:
            language === "ar" ? "إدارة السوشال ميديا + فريق الموقع الإلكتروني" : "Manajemen Media Sosial + Tim Website",
          image: "https://drive.google.com/uc?export=view&id=1fk2iNubJoenJKSkHP3xnX2Bxh55V_k-i",
        },
        {
          name: language === "ar" ? "عاصم أمين مهيوب قائد" : "ASEM AMEEN MAHYOUB QAID",
          role: language === "ar" ? "إدارة السوشال ميديا" : "Manajemen Media Sosial",
          image: "https://drive.google.com/uc?export=view&id=1JDWZ06IgYBMXw38_7YEOKLypldcBNH5X",
        },
        {
          name: language === "ar" ? "محمد عبد القوي محمد صالح ثابت" : "Mohammed Abdulqawi Mohammed Saleh THABIT",
          role: language === "ar" ? "فريق كتابة المحتوى" : "Tim Penulisan Konten",
          image: "https://drive.google.com/uc?export=view&id=1mSLXG-atz4R6cQJtQrnCd5iR0hawlPuA",
        },
        {
          name: language === "ar" ? "نائف طلال احمد علي الكباس" : "NAEF TALAL AHMED ALI ALKBAS",
          role: language === "ar" ? "فريق التصميم" : "Tim Desain",
          image: "https://drive.google.com/uc?export=view&id=1jBW1actQ4L56PitElLx5e5RltSuJqFkg",
        },
        {
          name: language === "ar" ? "مهند حميد محمد النامس" : "Mohanad Hamid Mohammed Al-Names",
          role: language === "ar" ? "إدارة السوشال ميديا" : "Manajemen Media Sosial",
          image: "https://drive.google.com/uc?export=view&id=1MkdK4Ke_xvdHOGRdEMHEYHp12KVwTJSe",
        },
        {
          name: language === "ar" ? "ناجي سالم دهشل الحارثي" : "Naji Salem Ali Dahshl Al-Harrthi",
          role: language === "ar" ? "فريق الموقع الإلكتروني" : "Tim Website",
          image: "https://drive.google.com/uc?export=view&id=1_m3OwgU6_n_32sc_O7n0gsWLIYft_vRF",
        },
        {
          name:
            language === "ar" ? "سليمان عبدالسلام محمد حسين النهام" : "Sulieman Abdulsalam Muhamed Husssien Alnaham",
          role: language === "ar" ? "فريق التصميم" : "Tim Desain",
          image: "https://drive.google.com/uc?export=view&id=1yJyY4dEGikpMRnx-EcQ3U3U-sBUHhUAp",
        },
      ],
    },
    {
      id: "activities",
      name: language === "ar" ? "لجنة الأنشطة والفعاليات" : "Komite Kegiatan dan Acara",
      description:
        language === "ar"
          ? "تنظم وتنسق جميع الأنشطة والفعاليات الثقافية والاجتماعية"
          : "Mengorganisir dan mengoordinasikan semua kegiatan budaya dan sosial",
      members: [
        {
          name: language === "ar" ? "أ. سمير الوصابي" : "Bpk. Samir Al-Wasabi",
          role: language === "ar" ? "رئيس اللجنة" : "Ketua Komite",
          image: null,
        },
        {
          name: language === "ar" ? "أ. ليلى الحداد" : "Ibu. Laila Al-Haddad",
          role: language === "ar" ? "منسقة الأنشطة" : "Koordinator Kegiatan",
          image: null,
        },
        {
          name: language === "ar" ? "أ. فؤاد العنسي" : "Bpk. Fuad Al-Ansi",
          role: language === "ar" ? "مسؤول التنظيم" : "Penanggung Jawab Organisasi",
          image: null,
        },
      ],
    },
    {
      id: "social-affairs",
      name: language === "ar" ? "لجنة الشؤون الاجتماعية" : "Komite Urusan Sosial",
      description:
        language === "ar"
          ? "تهتم بالخدمات الاجتماعية ومساعدة أفراد الجالية المحتاجين"
          : "Menangani layanan sosial dan membantu anggota komunitas yang membutuhkan",
      members: [
        {
          name: language === "ar" ? "أ. محمد الحضرمي" : "Bpk. Muhammad Al-Hadrami",
          role: language === "ar" ? "رئيس اللجنة" : "Ketua Komite",
          image: null,
        },
        {
          name: language === "ar" ? "أ. زينب الأهدل" : "Ibu. Zainab Al-Ahdal",
          role: language === "ar" ? "مسؤولة الخدمات" : "Penanggung Jawab Layanan",
          image: null,
        },
        {
          name: language === "ar" ? "أ. عبدالله الشامي" : "Bpk. Abdullah Al-Shami",
          role: language === "ar" ? "منسق المساعدات" : "Koordinator Bantuan",
          image: null,
        },
      ],
    },
  ]

  const renderExecutiveCard = (member: any, size = "normal") => {
    const IconComponent = member.icon
    return (
      <Card
        className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${size === "large" ? "border-2 border-yemen-accent bg-white" : "border border-yemen-accent/30 bg-white"}`}
      >
        <div className="absolute inset-0 bg-yemen-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="relative text-center pb-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar
                className={`${size === "large" ? "w-32 h-32" : "w-24 h-24"} border-4 border-yemen-accent/30 shadow-lg`}
              >
                <AvatarImage src={member.image || ""} alt={member.name} className="object-cover" />
                <AvatarFallback
                  className={`bg-yemen-primary text-white font-bold ${size === "large" ? "text-2xl" : "text-lg"}`}
                >
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              {IconComponent && (
                <div className="absolute -bottom-2 -right-2 bg-yemen-accent rounded-full p-3 shadow-lg">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative text-center space-y-3">
          <div>
            <CardTitle className={`text-yemen-primary mb-2 ${size === "large" ? "text-2xl" : "text-lg"}`}>
              {member.name}
            </CardTitle>
            <Badge variant="secondary" className="bg-yemen-accent/20 text-yemen-primary hover:bg-yemen-accent/30 mb-2">
              {member.role}
            </Badge>
            {member.description && <p className="text-sm text-muted-foreground mt-2">{member.description}</p>}
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderDepartmentCard = (member: any) => (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-yemen-accent/20 bg-white">
      <div className="absolute inset-0 bg-yemen-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative text-center pb-3">
        <Avatar className="w-20 h-20 mx-auto border-3 border-yemen-accent/20 shadow-md">
          <AvatarImage src={member.image || ""} alt={member.name} className="object-cover" />
          <AvatarFallback className="bg-yemen-primary text-white font-semibold">
            {getInitials(member.name)}
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="relative text-center space-y-2">
        <CardTitle className="text-yemen-primary text-base leading-tight">{member.name}</CardTitle>
        <Badge variant="outline" className="border-yemen-accent text-yemen-primary text-xs">
          {member.department}
        </Badge>
        <p className="text-xs text-muted-foreground leading-relaxed">{member.role}</p>
      </CardContent>
    </Card>
  )

  const renderCommitteeMemberCard = (member: any) => (
    <Card className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-yemen-accent/20 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-16 h-16 border-2 border-yemen-accent/20">
            <AvatarImage src={member.image || ""} alt={member.name} className="object-cover" />
            <AvatarFallback className="bg-yemen-primary text-white text-sm font-medium">
              {getInitials(member.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-yemen-primary text-sm leading-tight">{member.name}</CardTitle>
            <Badge variant="secondary" className="bg-yemen-accent/15 text-yemen-primary text-xs mt-1">
              {member.role}
            </Badge>
          </div>
        </div>
      </CardHeader>
    </Card>
  )

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yemen-primary rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yemen-primary mb-4">
            {language === "ar" ? "إدارة الجالية" : "Manajemen Komunitas"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "ar"
              ? "تعرف على القيادة والإدارة التي تقود الجالية اليمنية في إندونيسيا نحو التقدم والازدهار"
              : "Kenali kepemimpinan dan manajemen yang memimpin Komunitas Yaman di Indonesia menuju kemajuan dan kemakmuran"}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="team" className="mx-auto max-w-7xl">
          <TabsList className="grid w-full grid-cols-2 h-14 bg-white border border-yemen-accent/20 shadow-sm">
            <TabsTrigger
              value="team"
              className="text-base font-medium data-[state=active]:bg-yemen-primary data-[state=active]:text-white"
            >
              <Users className="w-5 h-5 mr-2" />
              {language === "ar" ? "الفريق القيادي" : "Tim Kepemimpinan"}
            </TabsTrigger>
            <TabsTrigger
              value="committees"
              className="text-base font-medium data-[state=active]:bg-yemen-primary data-[state=active]:text-white"
            >
              <FileText className="w-5 h-5 mr-2" />
              {language === "ar" ? "اللجان المتخصصة" : "Komite Khusus"}
            </TabsTrigger>
          </TabsList>

          {/* Team Tab */}
          <TabsContent value="team" className="mt-8">
            <div className="space-y-16">
              {/* Executive Level */}
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-yemen-primary mb-2 flex items-center justify-center gap-3">
                    <Crown className="w-7 h-7" />
                    {language === "ar" ? "القيادة التنفيذية" : "Kepemimpinan Eksekutif"}
                  </h2>
                  <div className="w-24 h-1 bg-yemen-accent mx-auto rounded-full" />
                </div>

                {/* President */}
                <div className="flex justify-center mb-12">
                  <div className="w-full max-w-md">{renderExecutiveCard(teamStructure.president, "large")}</div>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center mb-8">
                  <div className="w-px h-12 bg-yemen-accent rounded-full" />
                </div>

                {/* Vice President and Secretary General */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {renderExecutiveCard(teamStructure.vicePresident)}
                  {renderExecutiveCard(teamStructure.secretaryGeneral)}
                </div>
              </div>

              {/* Department Heads */}
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-yemen-primary mb-2 flex items-center justify-center gap-3">
                    <Award className="w-7 h-7" />
                    {language === "ar" ? "رؤساء الدوائر" : "Kepala Departemen"}
                  </h2>
                  <div className="w-24 h-1 bg-yemen-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {teamStructure.departments.map((member, index) => (
                    <div key={index}>{renderDepartmentCard(member)}</div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Committees Tab */}
          <TabsContent value="committees" className="mt-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-yemen-primary mb-2">
                {language === "ar" ? "اللجان المتخصصة" : "Komite Khusus"}
              </h2>
              <p className="text-muted-foreground">
                {language === "ar"
                  ? "لجان متخصصة تعمل على تطوير مختلف جوانب الجالية"
                  : "Komite khusus yang bekerja mengembangkan berbagai aspek komunitas"}
              </p>
              <div className="w-24 h-1 bg-yemen-accent mx-auto rounded-full mt-4" />
            </div>

            <Accordion type="multiple" className="space-y-6">
              {committees.map((committee, index) => (
                <AccordionItem
                  key={committee.id}
                  value={committee.id}
                  className="border border-yemen-accent/20 rounded-xl shadow-sm bg-white overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-yemen-accent/5 transition-colors">
                    <div className="flex items-center gap-6 w-full">
                      <div className="w-14 h-14 rounded-full bg-yemen-primary flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">{(index + 1).toString()}</span>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-xl font-bold text-yemen-primary mb-1">{committee.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{committee.description}</p>
                        <Badge variant="outline" className="mt-2 border-yemen-accent text-yemen-primary">
                          {committee.members.length} {language === "ar" ? "أعضاء" : "Anggota"}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 pb-8">
                    <div className="border-t border-yemen-accent/10 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {committee.members.map((member, idx) => (
                          <div key={idx}>{renderCommitteeMemberCard(member)}</div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
