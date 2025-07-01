"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function RegisterForm() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    nationality: "",
    residenceType: "",
    address: "",
    occupation: "",
    interests: [] as string[],
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "agreeTerms") {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      // Handle interests array
      setFormData((prev) => ({
        ...prev,
        interests: checked ? [...prev.interests, name] : prev.interests.filter((interest) => interest !== name),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      toast({
        title: language === "ar" ? "خطأ" : "Error",
        description:
          language === "ar" ? "يجب الموافقة على الشروط والأحكام" : "Anda harus menyetujui syarat dan ketentuan",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Registration submitted:", formData)

    // Show success message
    toast({
      title: language === "ar" ? "تم التسجيل بنجاح!" : "Pendaftaran berhasil!",
      description:
        language === "ar"
          ? "شكرًا لانضمامك إلى الجالية اليمنية في إندونيسيا"
          : "Terima kasih telah bergabung dengan Komunitas Yaman di Indonesia",
    })

    // Reset form (in a real application, you might redirect to another page)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      birthDate: "",
      nationality: "",
      residenceType: "",
      address: "",
      occupation: "",
      interests: [],
      agreeTerms: false,
    })
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle>{t("new_membership")}</CardTitle>
            <CardDescription>
              {language === "ar"
                ? "يرجى ملء النموذج أدناه للانضمام إلى الجالية اليمنية في إندونيسيا"
                : "Silakan isi formulir di bawah ini untuk bergabung dengan Komunitas Yaman di Indonesia"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{language === "ar" ? "المعلومات الشخصية" : "Informasi Pribadi"}</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{language === "ar" ? "الاسم الأول" : "Nama Depan"}</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{language === "ar" ? "الاسم الأخير" : "Nama Belakang"}</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>{language === "ar" ? "الجنس" : "Jenis Kelamin"}</Label>
                    <RadioGroup
                      onValueChange={(value) => handleSelectChange("gender", value)}
                      value={formData.gender}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">{language === "ar" ? "ذكر" : "Laki-laki"}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">{language === "ar" ? "أنثى" : "Perempuan"}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">{language === "ar" ? "تاريخ الميلاد" : "Tanggal Lahir"}</Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  {language === "ar" ? "معلومات الإقامة" : "Informasi Tempat Tinggal"}
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nationality">{language === "ar" ? "الجنسية" : "Kewarganegaraan"}</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("nationality", value)}
                      value={formData.nationality}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "ar" ? "اختر الجنسية" : "Pilih kewarganegaraan"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yemen">{language === "ar" ? "يمني" : "Yaman"}</SelectItem>
                        <SelectItem value="indonesia">{language === "ar" ? "إندونيسي" : "Indonesia"}</SelectItem>
                        <SelectItem value="dual">{language === "ar" ? "مزدوج" : "Ganda"}</SelectItem>
                        <SelectItem value="other">{language === "ar" ? "أخرى" : "Lainnya"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="residenceType">{language === "ar" ? "نوع الإقامة" : "Jenis Izin Tinggal"}</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("residenceType", value)}
                      value={formData.residenceType}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={language === "ar" ? "اختر نوع الإقامة" : "Pilih jenis izin tinggal"}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">{language === "ar" ? "طالب" : "Pelajar"}</SelectItem>
                        <SelectItem value="work">{language === "ar" ? "عمل" : "Kerja"}</SelectItem>
                        <SelectItem value="family">{language === "ar" ? "عائلية" : "Keluarga"}</SelectItem>
                        <SelectItem value="permanent">{language === "ar" ? "دائمة" : "Permanen"}</SelectItem>
                        <SelectItem value="other">{language === "ar" ? "أخرى" : "Lainnya"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">{language === "ar" ? "العنوان في إندونيسيا" : "Alamat di Indonesia"}</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">{language === "ar" ? "معلومات إضافية" : "Informasi Tambahan"}</h3>

                <div className="space-y-2">
                  <Label htmlFor="occupation">
                    {language === "ar" ? "المهنة / التخصص" : "Pekerjaan / Spesialisasi"}
                  </Label>
                  <Input id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label>{language === "ar" ? "المجالات التي تهمك" : "Bidang yang Anda Minati"}</Label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="business"
                        checked={formData.interests.includes("business")}
                        onCheckedChange={(checked) => handleCheckboxChange("business", checked as boolean)}
                      />
                      <Label htmlFor="business">
                        {language === "ar" ? "الأعمال والتجارة" : "Bisnis dan Perdagangan"}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="education"
                        checked={formData.interests.includes("education")}
                        onCheckedChange={(checked) => handleCheckboxChange("education", checked as boolean)}
                      />
                      <Label htmlFor="education">
                        {language === "ar" ? "التعليم والبحث العلمي" : "Pendidikan dan Penelitian"}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="culture"
                        checked={formData.interests.includes("culture")}
                        onCheckedChange={(checked) => handleCheckboxChange("culture", checked as boolean)}
                      />
                      <Label htmlFor="culture">{language === "ar" ? "الثقافة والفنون" : "Budaya dan Seni"}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="social"
                        checked={formData.interests.includes("social")}
                        onCheckedChange={(checked) => handleCheckboxChange("social", checked as boolean)}
                      />
                      <Label htmlFor="social">{language === "ar" ? "الأنشطة الاجتماعية" : "Kegiatan Sosial"}</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  {language === "ar"
                    ? "أوافق على الشروط والأحكام وسياسة الخصوصية"
                    : "Saya setuju dengan syarat dan ketentuan serta kebijakan privasi"}
                </Label>
              </div>

              <Button type="submit" className="w-full">
                {language === "ar" ? "إرسال الطلب" : "Kirim Permohonan"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
