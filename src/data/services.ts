import {
  Info, Phone, Stethoscope, Droplets, Shield, Ambulance,
  Users, Pill, Zap, Flame, Bus, GraduationCap,
  Umbrella, Briefcase, Scale, ShoppingBag, Lightbulb, UsersRound,
  UserCheck, ShoppingCart, KeyRound, Headphones, Landmark, FileText,
  Image, BookOpen, MapPin, Package
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  status: "active" | "coming_soon";
  headerColor: string; // CSS hsl color for the header
  pastelBg: string; // tailwind class
  iconColor: string; // tailwind text color class
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
  { id: 14, title: "চাকরি", slug: "jobs", icon: Briefcase, description: "চাকরির তথ্য", status: "active", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 15, title: "আইনি সাহায্য", slug: "legal", icon: Scale, description: "আদালত ও আইনজীবী", status: "active", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 16, title: "দোকান", slug: "shops", icon: ShoppingBag, description: "দোকানপাট ও বাজার", status: "active", headerColor: "hsl(340, 70%, 55%)", pastelBg: "bg-[hsl(var(--pastel-pink))]", iconColor: "text-[hsl(340,70%,55%)]" },
  { id: 17, title: "উদ্যোক্তা", slug: "entrepreneurs", icon: Lightbulb, description: "স্থানীয় উদ্যোক্তা", status: "active", headerColor: "hsl(45, 80%, 45%)", pastelBg: "bg-[hsl(var(--pastel-yellow))]", iconColor: "text-[hsl(45,80%,45%)]" },
  { id: 18, title: "সংগঠন", slug: "organizations", icon: UsersRound, description: "সামাজিক সংগঠন", status: "active", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 19, title: "আমাদের টিম", slug: "team", icon: UserCheck, description: "আমাদের টিম মেম্বার", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 20, title: "ডিজিটাল মার্কেট", slug: "digital-market", icon: ShoppingCart, description: "অনলাইন মার্কেটপ্লেস", status: "active", headerColor: "hsl(270, 50%, 55%)", pastelBg: "bg-[hsl(var(--pastel-purple))]", iconColor: "text-[hsl(270,50%,55%)]" },
  { id: 21, title: "প্রাইভেসি পলিসি", slug: "privacy", icon: KeyRound, description: "গোপনীয়তা নীতি", status: "active", headerColor: "hsl(152, 60%, 42%)", pastelBg: "bg-[hsl(var(--pastel-green))]", iconColor: "text-[hsl(152,60%,42%)]" },
  { id: 22, title: "সাপোর্ট সিস্টেম", slug: "support", icon: Headphones, description: "সাপোর্ট ও সহায়তা", status: "active", headerColor: "hsl(220, 15%, 45%)", pastelBg: "bg-[hsl(var(--pastel-gray))]", iconColor: "text-[hsl(220,15%,45%)]" },
  { id: 23, title: "ব্যাংক", slug: "bank", icon: Landmark, description: "ব্যাংক ও আর্থিক প্রতিষ্ঠান", status: "active", headerColor: "hsl(180, 55%, 42%)", pastelBg: "bg-[hsl(var(--pastel-teal))]", iconColor: "text-[hsl(180,55%,42%)]" },
  { id: 24, title: "শর্তাবলী", slug: "terms", icon: FileText, description: "ব্যবহারের শর্তাবলী", status: "active", headerColor: "hsl(210, 70%, 50%)", pastelBg: "bg-[hsl(var(--pastel-blue))]", iconColor: "text-[hsl(210,70%,50%)]" },
];

// Sample detail items for service pages
export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  address?: string;
  phone?: string;
  category?: string;
  icon?: LucideIcon;
}

export const serviceItems: Record<string, ServiceItem[]> = {
  "emergency-call": [
    { id: 1, name: "জাতীয় জরুরি সেবা", description: "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স", phone: "999" },
    { id: 2, name: "জাতীয় তথ্য বাতায়ন", description: "সরকারি তথ্য ও সেবা", phone: "333" },
    { id: 3, name: "নারী ও শিশু নির্যাতন", description: "নারী ও শিশু নির্যাতন প্রতিরোধ", phone: "10921" },
    { id: 4, name: "দুদক হটলাইন", description: "দুর্নীতি সংক্রান্ত অভিযোগ", phone: "106" },
    { id: 5, name: "স্বাস্থ্য বাতায়ন", description: "স্বাস্থ্য সেবা তথ্য", phone: "16263" },
  ],
  "hospital": [
    { id: 1, name: "রামগঞ্জ সৌদি প্রবাসী হাসপাতাল", description: "হাসপাতাল সড়ক", phone: "01711-000001", category: "বেসরকারি" },
    { id: 2, name: "মেডিকেয়ার", description: "কেন্দ্রীয় জামে মসজিদের সামনে, হসপিটাল সড়ক", phone: "01711-000002", category: "বেসরকারি" },
    { id: 3, name: "রামগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", description: "উপজেলা পরিষদ সড়ক", phone: "01711-000003", category: "সরকারি" },
    { id: 4, name: "স্কয়ার ডায়াগনস্টিক", description: "সিনিয়র জুডিশিয়াল ম্যাজিস্ট্রেট কোর্ট গেটের সামনে", phone: "01711-000004", category: "বেসরকারি" },
  ],
  "police": [
    { id: 1, name: "রামগঞ্জ থানা", description: "রামগঞ্জ উপজেলা সদর", phone: "01711-000010" },
    { id: 2, name: "তেলিপাড়া পুলিশ ফাঁড়ি", description: "তেলিপাড়া বাজার", phone: "01711-000011" },
  ],
  "blood": [
    { id: 1, name: "মোঃ রাজা", description: "কালমেঘা, কাঞ্চুর বাজার।", phone: "01711-000020", category: "A+" },
    { id: 2, name: "Md Ebrahim Hosen", description: "রামগঞ্জ উপজেলা ওয়ার্ড নং ১", phone: "01711-000021", category: "A+" },
    { id: 3, name: "MD Isha", description: "বিএম কলেজ, বরিশাল", phone: "01711-000022", category: "O+" },
    { id: 4, name: "তাহসিন আজাদ", description: "রামগঞ্জ এক নং ওয়ার্ড", phone: "01711-000023", category: "B+" },
  ],
};
