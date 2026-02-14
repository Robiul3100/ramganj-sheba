import {
  Info, Phone, Stethoscope, Droplets, Shield, Ambulance,
  Users, Pill, Zap, Flame, Bus, GraduationCap,
  Umbrella, Briefcase, Scale, ShoppingBag, Lightbulb, UsersRound,
  UserCheck, ShoppingCart, KeyRound, Headphones, Landmark, FileText,
  Heart, Code, Smartphone, Wifi, Camera, Palette,
  MapPin, Package, Clock, Building
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  status: "active" | "coming_soon";
  headerColor: string;
  pastelBg: string;
  iconColor: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  address?: string;
  phone?: string;
  category?: string;
  owner?: string;
  date?: string;
  price?: string;
  details?: string;
  icon?: LucideIcon;
}

export const services: Service[] = [
  { id: 1, title: "রামগঞ্জ সম্পর্কে", slug: "about-ramganj", icon: Info, description: "রামগঞ্জ উপজেলার তথ্য", status: "active", headerColor: "hsl(210, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(210,70%,50%)]" },
  { id: 2, title: "জরুরি কল", slug: "emergency-call", icon: Phone, description: "জরুরি হটলাইন নম্বর", status: "active", headerColor: "hsl(0, 75%, 55%)", pastelBg: "bg-[hsl(var(--pastel-red))]", iconColor: "text-[hsl(0,75%,55%)]" },
  { id: 3, title: "হাসপাতাল", slug: "hospital", icon: Stethoscope, description: "হাসপাতাল ও ক্লিনিক", status: "active", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
  { id: 4, title: "রক্ত", slug: "blood", icon: Droplets, description: "ব্লাড ব্যাংক ও ডোনার", status: "active", headerColor: "hsl(0, 75%, 55%)", pastelBg: "bg-[hsl(var(--pastel-red))]", iconColor: "text-[hsl(0,75%,55%)]" },
  { id: 5, title: "পুলিশ", slug: "police", icon: Shield, description: "থানা ও পুলিশ ফাঁড়ি", status: "active", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 6, title: "অ্যাম্বুলেন্স", slug: "ambulance", icon: Ambulance, description: "অ্যাম্বুলেন্স সেবা", status: "active", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
  { id: 7, title: "ডাক্তার তালিকা", slug: "doctors", icon: Users, description: "ডাক্তারদের তালিকা", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 8, title: "ফার্মেসি", slug: "pharmacy", icon: Pill, description: "ফার্মেসি ও ওষুধের দোকান", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 9, title: "বিদ্যুৎ অফিস", slug: "electricity", icon: Zap, description: "বিদ্যুৎ অফিস ও সেবা", status: "active", headerColor: "hsl(45, 80%, 45%)", pastelBg: "bg-[hsl(var(--pastel-yellow))]", iconColor: "text-[hsl(45,80%,45%)]" },
  { id: 10, title: "ফায়ার সার্ভিস", slug: "fire-service", icon: Flame, description: "ফায়ার সার্ভিস ও উদ্ধার", status: "active", headerColor: "hsl(25, 90%, 55%)", pastelBg: "bg-[hsl(var(--pastel-orange))]", iconColor: "text-[hsl(25,90%,55%)]" },
  { id: 11, title: "যাতায়াত", slug: "transport", icon: Bus, description: "পরিবহন ও যানবাহন", status: "active", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 12, title: "শিক্ষা", slug: "education", icon: GraduationCap, description: "শিক্ষা প্রতিষ্ঠান", status: "active", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
  { id: 13, title: "পর্যটন", slug: "tourism", icon: Umbrella, description: "দর্শনীয় স্থান", status: "active", headerColor: "hsl(210, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(210,70%,50%)]" },
  { id: 14, title: "চাকরি", slug: "jobs", icon: Briefcase, description: "চাকরির বিজ্ঞপ্তি", status: "active", headerColor: "hsl(225, 70%, 55%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(225,70%,55%)]" },
  { id: 15, title: "আইনি সাহায্য", slug: "legal", icon: Scale, description: "আদালত ও আইনজীবী", status: "active", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 16, title: "দোকান ও ব্যবসা", slug: "shops", icon: ShoppingBag, description: "দোকানপাট ও বাজার", status: "active", headerColor: "hsl(25, 90%, 55%)", pastelBg: "bg-[hsl(var(--pastel-orange))]", iconColor: "text-[hsl(25,90%,55%)]" },
  { id: 17, title: "উদ্যোক্তা কর্নার", slug: "entrepreneurs", icon: Lightbulb, description: "স্থানীয় উদ্যোক্তা", status: "active", headerColor: "hsl(0, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-red))]", iconColor: "text-[hsl(0,70%,50%)]" },
  { id: 18, title: "সংগঠন তালিকা", slug: "organizations", icon: UsersRound, description: "সামাজিক সংগঠন", status: "active", headerColor: "hsl(165, 55%, 40%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(165,55%,40%)]" },
  { id: 19, title: "আমাদের টিম", slug: "team", icon: UserCheck, description: "আমাদের টিম মেম্বার", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 20, title: "মার্কেটপ্লেস", slug: "marketplace", icon: ShoppingCart, description: "ডিজিটাল পণ্য কেনা-বেচা", status: "active", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 21, title: "রামগঞ্জ হাট", slug: "local-market", icon: Package, description: "স্থানীয় হাট-বাজার", status: "active", headerColor: "hsl(25, 90%, 55%)", pastelBg: "bg-[hsl(var(--pastel-orange))]", iconColor: "text-[hsl(25,90%,55%)]" },
  { id: 22, title: "ব্যাংক", slug: "bank", icon: Landmark, description: "ব্যাংক ও আর্থিক প্রতিষ্ঠান", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 23, title: "সাপোর্ট", slug: "support", icon: Headphones, description: "সাপোর্ট ও সহায়তা", status: "active", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 24, title: "অনুদান", slug: "donation", icon: Heart, description: "আমাদের পাশে দাঁড়ান", status: "active", headerColor: "hsl(340, 70%, 55%)", pastelBg: "bg-[hsl(var(--pastel-pink))]", iconColor: "text-[hsl(340,70%,55%)]" },
  // Coming soon
  { id: 25, title: "ডেভেলপার তথ্য", slug: "developer", icon: Code, description: "ডেভেলপার সেবা", status: "coming_soon", headerColor: "hsl(25, 90%, 55%)", pastelBg: "bg-[hsl(var(--pastel-orange))]", iconColor: "text-[hsl(25,90%,55%)]" },
  { id: 26, title: "মোবাইল রিচার্জ", slug: "recharge", icon: Smartphone, description: "মোবাইল রিচার্জ সেবা", status: "coming_soon", headerColor: "hsl(210, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(210,70%,50%)]" },
  { id: 27, title: "ইন্টারনেট", slug: "internet", icon: Wifi, description: "ইন্টারনেট সেবা প্রদানকারী", status: "coming_soon", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 28, title: "ফটোগ্রাফি", slug: "photography", icon: Camera, description: "ফটোগ্রাফি সেবা", status: "coming_soon", headerColor: "hsl(340, 70%, 55%)", pastelBg: "bg-[hsl(var(--pastel-pink))]", iconColor: "text-[hsl(340,70%,55%)]" },
  { id: 29, title: "গ্রাফিক ডিজাইন", slug: "graphics", icon: Palette, description: "গ্রাফিক ডিজাইন সেবা", status: "coming_soon", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
  { id: 30, title: "প্রাইভেসি পলিসি", slug: "privacy", icon: KeyRound, description: "গোপনীয়তা নীতি", status: "coming_soon", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 31, title: "শর্তাবলী", slug: "terms", icon: FileText, description: "ব্যবহারের শর্তাবলী", status: "coming_soon", headerColor: "hsl(210, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(210,70%,50%)]" },
  { id: 32, title: "সরকারি অফিস", slug: "govt-office", icon: Building, description: "সরকারি অফিস তথ্য", status: "coming_soon", headerColor: "hsl(45, 80%, 45%)", pastelBg: "bg-[hsl(var(--pastel-yellow))]", iconColor: "text-[hsl(45,80%,45%)]" },
  { id: 33, title: "কৃষি সেবা", slug: "agriculture", icon: Umbrella, description: "কৃষি পরামর্শ ও সেবা", status: "coming_soon", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
];

// Sample detail items for service pages
export const serviceItems: Record<string, ServiceItem[]> = {
  "emergency-call": [
    { id: 1, name: "জাতীয় জরুরি সেবা", description: "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স", phone: "999" },
    { id: 2, name: "জাতীয় তথ্য বাতায়ন", description: "সরকারি তথ্য ও সেবা", phone: "333" },
    { id: 3, name: "নারী ও শিশু নির্যাতন", description: "নারী ও শিশু নির্যাতন প্রতিরোধ", phone: "10921" },
    { id: 4, name: "দুদক হটলাইন", description: "দুর্নীতি সংক্রান্ত অভিযোগ", phone: "106" },
    { id: 5, name: "স্বাস্থ্য বাতায়ন", description: "স্বাস্থ্য সেবা তথ্য", phone: "16263" },
    { id: 6, name: "ফায়ার সার্ভিস", description: "অগ্নি নির্বাপণ ও উদ্ধার", phone: "16163" },
    { id: 7, name: "বিদ্যুৎ বিভাগ", description: "বিদ্যুৎ সমস্যা ও অভিযোগ", phone: "16979" },
  ],
  "hospital": [
    { id: 1, name: "রামগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", description: "সরকারি হাসপাতাল", address: "উপজেলা পরিষদ সড়ক", phone: "01711-000003", category: "সরকারি" },
    { id: 2, name: "রামগঞ্জ সৌদি প্রবাসী হাসপাতাল", description: "বেসরকারি হাসপাতাল", address: "হাসপাতাল সড়ক", phone: "01711-000001", category: "বেসরকারি" },
    { id: 3, name: "মেডিকেয়ার ক্লিনিক", description: "বেসরকারি ক্লিনিক", address: "কেন্দ্রীয় জামে মসজিদের সামনে", phone: "01711-000002", category: "বেসরকারি" },
    { id: 4, name: "স্কয়ার ডায়াগনস্টিক সেন্টার", description: "ডায়াগনস্টিক সেন্টার", address: "কোর্ট গেটের সামনে", phone: "01711-000004", category: "বেসরকারি" },
    { id: 5, name: "রামগঞ্জ মা ও শিশু কল্যাণ কেন্দ্র", description: "সরকারি স্বাস্থ্য কেন্দ্র", address: "উপজেলা সদর", phone: "01711-000005", category: "সরকারি" },
  ],
  "police": [
    { id: 1, name: "রামগঞ্জ থানা", description: "উপজেলা থানা", address: "রামগঞ্জ উপজেলা সদর", phone: "01711-000010" },
    { id: 2, name: "তেলিপাড়া পুলিশ ফাঁড়ি", description: "পুলিশ ফাঁড়ি", address: "তেলিপাড়া বাজার", phone: "01711-000011" },
    { id: 3, name: "রামগঞ্জ হাইওয়ে পুলিশ", description: "হাইওয়ে ট্রাফিক", address: "রামগঞ্জ হাইওয়ে", phone: "01711-000012" },
  ],
  "blood": [
    { id: 1, name: "মোঃ রাজা মিয়া", description: "সর্বশেষ রক্তদান: ১ মাস আগে", address: "কালমেঘা, কাঞ্চুর বাজার", phone: "01711-000020", category: "A+" },
    { id: 2, name: "Md Ebrahim Hosen", description: "সর্বশেষ রক্তদান: ৩ মাস আগে", address: "রামগঞ্জ ওয়ার্ড নং ১", phone: "01711-000021", category: "A+" },
    { id: 3, name: "MD Isha Khan", description: "সর্বশেষ রক্তদান: ২ মাস আগে", address: "বিএম কলেজ, বরিশাল", phone: "01711-000022", category: "O+" },
    { id: 4, name: "তাহসিন আজাদ", description: "সর্বশেষ রক্তদান: ৫ মাস আগে", address: "রামগঞ্জ এক নং ওয়ার্ড", phone: "01711-000023", category: "B+" },
    { id: 5, name: "সাকিব হাসান", description: "সর্বশেষ রক্তদান: ৪ মাস আগে", address: "রামগঞ্জ বাজার", phone: "01711-000024", category: "AB+" },
    { id: 6, name: "রফিকুল ইসলাম", description: "সর্বশেষ রক্তদান: ৬ মাস আগে", address: "রামগঞ্জ সদর", phone: "01711-000025", category: "O-" },
  ],
  "shops": [
    { id: 1, name: "সোহেল টেইলার্স", description: "দর্জি (পাঞ্জাবির জন্য নির্ভরযোগ্য প্রতিষ্ঠান।)", address: "পাল পড়ি মদনমোহন বস্ত্রালয়ের সামনে।", phone: "01711-000030", category: "তৈরী পোশাক" },
    { id: 2, name: "সোহেল টেইলার্স (শাখা-২)", description: "দর্জি ও পোশাক", address: "পালপড়ি, মদন মোহনের বিপরীতে", phone: "01711-000031", category: "তৈরী পোশাক" },
    { id: 3, name: "দি বিউটি মার্ক", description: "জেন্টস পার্লার", address: "রামগঞ্জ উপজেলা গেট এর সামনে", phone: "01711-000032", category: "জেন্টস পার্লার" },
    { id: 4, name: "স্বপ্নপূরণ", description: "সুপার শপ", address: "গোলচত্বর সংলগ্ন সদর রোড, রামগঞ্জ", phone: "01711-000033", category: "সুপার শপ" },
    { id: 5, name: "সততা এন্টারপ্রাইজ", description: "ইলেক্ট্রনিক্স ও হার্ডওয়্যার", address: "রামগঞ্জ সদর বাজার", phone: "01711-000034", category: "ইলেক্ট্রনিক্স" },
  ],
  "entrepreneurs": [
    { id: 1, name: "রামগঞ্জ আইটি সলিউশন", description: "আমি একজন পেশাদার ওয়েব ডেভেলপার। আধুনিক ও রেসপন্সিভ ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট সেবা প্রদান করি।", owner: "মোঃ ইব্রাহিম হোসেন", address: "রামগঞ্জ হসপিটাল রোড", phone: "01711-000040", category: "আইটি ও ফ্রিল্যান্সিং", details: "আমার সেবাসমূহ:\n• বিজনেস ওয়েবসাইট ডেভেলপমেন্ট\n• ই-কমার্স ওয়েবসাইট\n• পার্সোনাল ও পোর্টফোলিও ওয়েবসাইট\n• WordPress কাস্টমাইজেশন\n• Website Speed & Security Optimization\n• ডোমেইন ও হোস্টিং সেটআপ" },
  ],
  "organizations": [
    { id: 1, name: "রামগঞ্জ আইটি সলিউশন", description: "প্রযুক্তি সেবা সংগঠন", address: "রামগঞ্জ হসপিটাল রোড", phone: "01711-000050", category: "অন্যান্য" },
    { id: 2, name: "তারুণ্যের বাংলাদেশ (TBYO)", description: "স্বেচ্ছাসেবী সংগঠন", address: "রামগঞ্জ উপজেলা", phone: "01711-000051", category: "স্বেচ্ছাসেবী সংগঠন" },
    { id: 3, name: "রামগঞ্জ যুব সংঘ", description: "যুব উন্নয়ন সংগঠন", address: "রামগঞ্জ সদর", phone: "01711-000052", category: "যুব সংগঠন" },
  ],
  "jobs": [
    { id: 1, name: "অভিজ্ঞ PHP ওয়েবসাইট ডেভেলপার", description: "আমাদের প্রতিষ্ঠানের জন্য একজন অভিজ্ঞ ও দক্ষ PHP ওয়েবসাইট ডেভেলপার নিয়োগ করা হবে...", owner: "রামগঞ্জ শপ", phone: "01711-000060", category: "বেসরকারি", date: "31 Jan, 2026", details: "বিবরণ ও যোগ্যতা:\n• PHP, MySQL, JavaScript এ অভিজ্ঞতা\n• Laravel ফ্রেমওয়ার্ক জানা থাকতে হবে\n• কমপক্ষে ২ বছরের অভিজ্ঞতা" },
    { id: 2, name: "অভিজ্ঞ অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপার", description: "আমাদের প্রতিষ্ঠানের জন্য একজন অভিজ্ঞ ও দক্ষ অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপার নিয়োগ...", owner: "রামগঞ্জ শপ", phone: "01711-000061", category: "বেসরকারি", date: "31 Jan, 2026", details: "• Kotlin/Java তে দক্ষতা\n• Android Studio ব্যবহারে অভিজ্ঞ\n• REST API ইন্টিগ্রেশন" },
    { id: 3, name: "গ্রাফিক ডিজাইনার নিয়োগ", description: "সৃজনশীল ও দক্ষ গ্রাফিক ডিজাইনার খুঁজছি...", owner: "ক্রিয়েটিভ স্টুডিও", phone: "01711-000062", category: "বেসরকারি", date: "15 Feb, 2026" },
  ],
  "ambulance": [
    { id: 1, name: "রামগঞ্জ অ্যাম্বুলেন্স সেবা", description: "২৪/৭ জরুরি অ্যাম্বুলেন্স", address: "রামগঞ্জ সদর", phone: "01711-000070" },
    { id: 2, name: "রেড ক্রিসেন্ট অ্যাম্বুলেন্স", description: "জরুরি সেবা", address: "রামগঞ্জ হাসপাতাল রোড", phone: "01711-000071" },
    { id: 3, name: "উপজেলা স্বাস্থ্য কমপ্লেক্স অ্যাম্বুলেন্স", description: "সরকারি অ্যাম্বুলেন্স", address: "উপজেলা পরিষদ", phone: "01711-000072" },
  ],
  "doctors": [
    { id: 1, name: "ডাঃ মোঃ আব্দুল করিম", description: "মেডিসিন বিশেষজ্ঞ", address: "রামগঞ্জ স্বাস্থ্য কমপ্লেক্স", phone: "01711-000080", category: "মেডিসিন" },
    { id: 2, name: "ডাঃ ফাতেমা খানম", description: "গাইনি বিশেষজ্ঞ", address: "মেডিকেয়ার ক্লিনিক", phone: "01711-000081", category: "গাইনি" },
    { id: 3, name: "ডাঃ মাহমুদ হাসান", description: "শিশু বিশেষজ্ঞ", address: "রামগঞ্জ সদর হাসপাতাল", phone: "01711-000082", category: "শিশু" },
    { id: 4, name: "ডাঃ সাইফুল ইসলাম", description: "চক্ষু বিশেষজ্ঞ", address: "স্কয়ার ডায়াগনস্টিক", phone: "01711-000083", category: "চক্ষু" },
  ],
  "pharmacy": [
    { id: 1, name: "লাজফার্মা", description: "সকল ধরনের ওষুধ পাওয়া যায়", address: "রামগঞ্জ বাজার", phone: "01711-000090" },
    { id: 2, name: "ইবনে সিনা ফার্মেসি", description: "২৪ ঘন্টা ওষুধ সেবা", address: "হাসপাতাল রোড", phone: "01711-000091" },
    { id: 3, name: "নিউ লাইফ ফার্মেসি", description: "ওষুধ ও স্বাস্থ্য সামগ্রী", address: "রামগঞ্জ সদর", phone: "01711-000092" },
  ],
  "education": [
    { id: 1, name: "রামগঞ্জ সরকারি কলেজ", description: "উচ্চ মাধ্যমিক শিক্ষা প্রতিষ্ঠান", address: "রামগঞ্জ সদর", phone: "01711-000100", category: "কলেজ" },
    { id: 2, name: "রামগঞ্জ পাইলট উচ্চ বিদ্যালয়", description: "মাধ্যমিক বিদ্যালয়", address: "উপজেলা সদর", phone: "01711-000101", category: "বিদ্যালয়" },
    { id: 3, name: "রামগঞ্জ বালিকা উচ্চ বিদ্যালয়", description: "বালিকা বিদ্যালয়", address: "রামগঞ্জ সদর", phone: "01711-000102", category: "বিদ্যালয়" },
    { id: 4, name: "রামগঞ্জ কারিগরি কলেজ", description: "কারিগরি শিক্ষা", address: "রামগঞ্জ বাসস্ট্যান্ড", phone: "01711-000103", category: "কারিগরি" },
  ],
  "bank": [
    { id: 1, name: "সোনালী ব্যাংক রামগঞ্জ শাখা", description: "সরকারি ব্যাংক", address: "রামগঞ্জ সদর বাজার", phone: "01711-000110", category: "সরকারি" },
    { id: 2, name: "জনতা ব্যাংক", description: "সরকারি ব্যাংক", address: "রামগঞ্জ বাজার", phone: "01711-000111", category: "সরকারি" },
    { id: 3, name: "ইসলামী ব্যাংক রামগঞ্জ শাখা", description: "ইসলামী ব্যাংকিং", address: "রামগঞ্জ সদর", phone: "01711-000112", category: "বেসরকারি" },
  ],
  "transport": [
    { id: 1, name: "রামগঞ্জ-লক্ষ্মীপুর বাস সার্ভিস", description: "প্রতিদিন সকাল ৬টা - রাত ৯টা", address: "রামগঞ্জ বাসস্ট্যান্ড", phone: "01711-000120" },
    { id: 2, name: "রামগঞ্জ-ঢাকা বাস", description: "রাত ৮টায় ছাড়ে", address: "রামগঞ্জ বাসস্ট্যান্ড", phone: "01711-000121" },
    { id: 3, name: "সিএনজি স্ট্যান্ড", description: "লোকাল সিএনজি সেবা", address: "রামগঞ্জ মোড়", phone: "01711-000122" },
  ],
  "fire-service": [
    { id: 1, name: "রামগঞ্জ ফায়ার সার্ভিস স্টেশন", description: "অগ্নি নির্বাপণ ও উদ্ধার সেবা", address: "উপজেলা পরিষদ সংলগ্ন", phone: "01711-000130" },
  ],
  "electricity": [
    { id: 1, name: "রামগঞ্জ পল্লী বিদ্যুৎ অফিস", description: "বিদ্যুৎ সংযোগ ও বিল পরিশোধ", address: "উপজেলা সদর", phone: "01711-000140" },
    { id: 2, name: "পিবিএস কাস্টমার কেয়ার", description: "বিদ্যুৎ সমস্যা ও অভিযোগ", phone: "16979" },
  ],
  "legal": [
    { id: 1, name: "রামগঞ্জ সিনিয়র জুডিশিয়াল ম্যাজিস্ট্রেট কোর্ট", description: "বিচারিক আদালত", address: "রামগঞ্জ সদর", phone: "01711-000150" },
    { id: 2, name: "অ্যাডভোকেট মোঃ করিম", description: "আইনজীবী", address: "কোর্ট বিল্ডিং", phone: "01711-000151", category: "আইনজীবী" },
  ],
  "tourism": [
    { id: 1, name: "রামগঞ্জ জমিদার বাড়ি", description: "ঐতিহাসিক জমিদার বাড়ি। অপরূপ স্থাপত্যশৈলীতে নির্মিত।", address: "রামগঞ্জ সদর" },
    { id: 2, name: "হরিণঘাটা বন", description: "অপরূপ সৌন্দর্যে ঘেরা প্রাকৃতিক বন", address: "হরিণঘাটা, রামগঞ্জ" },
  ],
  "marketplace": [
    { id: 1, name: "ফেসবুক পেজ মনিটাইজেশন সার্ভিস (১০০% সেফ ও নির্ভরযোগ্য)", description: "আমরা ফেসবুক পেজ মনিটাইজেশন সংক্রান্ত সম্পূর্ণ ও প্রফেশনাল সেবা প্রদান করে থাকি।", owner: "Md Ebrahim Hosen", phone: "01711-000160", price: "৳1,020" },
    { id: 2, name: "ওয়েবসাইট ডেভেলপমেন্ট অ্যাডভান্স কোর্স", description: "এই ওয়েবসাইট ডেভেলপমেন্ট অ্যাডভান্স কোর্সটি এমনভাবে ডিজাইন করা হয়েছে যাতে একজন শিক্ষার্থী...", owner: "Md Ebrahim Hosen", phone: "01711-000161", price: "৳7,600" },
    { id: 3, name: "IPhone 7 sell hoba", description: "Iphone 7, 128 gb", owner: "Md.Milon", phone: "01711-000162", price: "৳6,000" },
  ],
  "local-market": [
    { id: 1, name: "HP ProBook 440 G5 ল্যাপটপ", description: "পুরাতন ল্যাপটপ, ভালো কন্ডিশন", address: "রামগঞ্জ", phone: "01711-000170", price: "৳ 22,000", category: "পুরাতন" },
  ],
};
