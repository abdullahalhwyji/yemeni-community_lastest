"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, History, Target, MessageCircle, Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export function AboutCommunity() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const contentSections = [
    {
      id: "who-we-are",
      title: language === "ar" ? "من نحن" : "Siapa Kami",
      content:
        language === "ar"
          ? "الجالية اليمنية في إندونيسيا هي مجتمع متنوع ونشط يضم آلاف الأفراد والعائلات اليمنية المقيمة في مختلف أنحاء إندونيسيا. نحن نعمل على تعزيز الروابط الثقافية والاجتماعية بين أفراد الجالية وتقديم الدعم والمساعدة للمحتاجين."
          : "Komunitas Yaman di Indonesia adalah komunitas yang beragam dan aktif yang terdiri dari ribuan individu dan keluarga Yaman yang tinggal di berbagai wilayah Indonesia. Kami bekerja untuk memperkuat ikatan budaya dan sosial antar anggota komunitas serta memberikan dukungan dan bantuan kepada yang membutuhkan.",
      icon: Users,
    },
    {
      id: "history",
      title: language === "ar" ? "تاريخ الجالية" : "Sejarah Komunitas",
      content:
        language === "ar"
          ? "تأسست الجالية اليمنية في إندونيسيا منذ عقود طويلة، حيث بدأت الهجرة اليمنية إلى إندونيسيا في أوائل القرن العشرين. على مر السنين، نمت الجالية وتطورت لتصبح جزءاً لا يتجزأ من النسيج الاجتماعي الإندونيسي، مع الحفاظ على هويتها الثقافية اليمنية الأصيلة."
          : "Komunitas Yaman di Indonesia didirikan sejak beberapa dekade yang lalu, dimana migrasi Yaman ke Indonesia dimulai pada awal abad ke-20. Selama bertahun-tahun, komunitas ini tumbuh dan berkembang menjadi bagian integral dari masyarakat Indonesia, sambil mempertahankan identitas budaya Yaman yang autentik.",
      icon: History,
    },
    {
      id: "vision",
      title: language === "ar" ? "رؤيتنا" : "Visi Kami",
      content:
        language === "ar"
          ? "أن نكون جالية يمنية متماسكة ومؤثرة في إندونيسيا، تساهم في التنمية الاجتماعية والاقتصادية والثقافية، وتحافظ على التراث اليمني الأصيل وتنقله للأجيال القادمة، مع تعزيز التفاهم والتعاون بين الثقافات المختلفة."
          : "Menjadi komunitas Yaman yang solid dan berpengaruh di Indonesia, berkontribusi pada pembangunan sosial, ekonomi, dan budaya, serta melestarikan warisan Yaman yang autentik dan meneruskannya kepada generasi mendatang, sambil memperkuat pemahaman dan kerjasama antar budaya.",
      icon: Target,
    },
    {
      id: "mission",
      title: language === "ar" ? "رسالتنا" : "Misi Kami",
      content:
        language === "ar"
          ? "تقديم الخدمات والدعم لأفراد الجالية اليمنية في إندونيسيا، وتنظيم الأنشطة الثقافية والاجتماعية والتعليمية، وبناء جسور التواصل مع المجتمع الإندونيسي والمؤسسات الحكومية، وتعزيز دور الجالية في التنمية المستدامة."
          : "Memberikan layanan dan dukungan kepada anggota komunitas Yaman di Indonesia, menyelenggarakan kegiatan budaya, sosial, dan pendidikan, membangun jembatan komunikasi dengan masyarakat Indonesia dan lembaga pemerintah, serta memperkuat peran komunitas dalam pembangunan berkelanjutan.",
      icon: MessageCircle,
    },
  ]

  return (
    <div className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-yemen-primary">
            {language === "ar" ? "عن الجالية" : "Tentang Komunitas"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "تعرف على الجالية اليمنية في إندونيسيا وتاريخها العريق ورؤيتها المستقبلية"
              : "Pelajari tentang Komunitas Yaman di Indonesia, sejarah yang kaya, dan visi masa depan"}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* First Row: من نحن and Photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yemen-accent/20">
                    <Users className="h-6 w-6 text-yemen-primary" />
                  </div>
                  <CardTitle className="text-xl text-yemen-primary">{contentSections[0].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-muted-foreground leading-relaxed">{contentSections[0].content}</p>
              </CardContent>
            </Card>

            {/* Community Logo Photo */}
            <div className="relative rounded-lg overflow-hidden bg-white p-8 flex items-center justify-center shadow-lg">
              <img
                src="/images/logo.png"
                alt={language === "ar" ? "شعار الجالية اليمنية" : "Logo Komunitas Yaman"}
                className="max-w-full max-h-64 object-contain"
              />
            </div>
          </div>

          {/* Second Row: Video and تاريخ الجالية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video shadow-lg group">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/yemeni-indonesian-gathering.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls={false}
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm"
                  type="video/webm"
                />
                {language === "ar" ? "متصفحك لا يدعم تشغيل الفيديو" : "Browser Anda tidak mendukung video"}
              </video>

              {/* Custom Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <Button
                  size="lg"
                  onClick={handleVideoToggle}
                  className="bg-white/90 hover:bg-white text-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">{language === "ar" ? "إيقاف الفيديو" : "Jeda Video"}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">
                        {language === "ar" ? "شاهد الفيديو" : "Tonton Video"}
                      </span>
                    </>
                  )}
                </Button>
              </div>

              {/* Video Controls (show when playing) */}
              {isPlaying && (
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <div className="bg-black/70 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-white text-xs md:text-sm">
                      <span>{language === "ar" ? "فيديو تعريفي عن الجالية" : "Video Pengenalan Komunitas"}</span>
                      <button
                        onClick={handleVideoToggle}
                        className="bg-white/20 hover:bg-white/30 rounded px-2 md:px-3 py-1 transition-colors text-xs"
                      >
                        {isPlaying ? (language === "ar" ? "إيقاف" : "Jeda") : language === "ar" ? "تشغيل" : "Putar"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yemen-accent/20">
                    <History className="h-6 w-6 text-yemen-primary" />
                  </div>
                  <CardTitle className="text-xl text-yemen-primary">{contentSections[1].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-muted-foreground leading-relaxed">{contentSections[1].content}</p>
              </CardContent>
            </Card>
          </div>

          {/* Third Row: رؤيتنا and رسالتنا */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yemen-accent/20">
                    <Target className="h-6 w-6 text-yemen-primary" />
                  </div>
                  <CardTitle className="text-xl text-yemen-primary">{contentSections[2].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-muted-foreground leading-relaxed">{contentSections[2].content}</p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yemen-accent/20">
                    <MessageCircle className="h-6 w-6 text-yemen-primary" />
                  </div>
                  <CardTitle className="text-xl text-yemen-primary">{contentSections[3].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-muted-foreground leading-relaxed">{contentSections[3].content}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
