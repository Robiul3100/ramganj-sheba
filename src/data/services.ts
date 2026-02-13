import {
  Building2, GraduationCap, Stethoscope, Scale, Bus, ShoppingBag,
  Landmark, Phone, Flame, Droplets, Zap, Wifi, Utensils, Shirt,
  Hammer, Bike, BookOpen, Heart, Shield, MapPin, Users, Briefcase,
  Camera, Music
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  status: "active" | "coming_soon";
  category: string;
  pastelClass: string;
}

export const services: Service[] = [
  { id: 1, title: "হাসপাতাল", slug: "hospital", icon: Stethoscope, description: "রামগঞ্জের সকল হাসপাতালের তথ্য", status: "active", category: "health", pastelClass: "pastel-red" },
  { id: 2, title: "শিক্ষা প্রতিষ্ঠান", slug: "education", icon: GraduationCap, description: "স্কুল, কলেজ ও মাদ্রাসার তালিকা", status: "active", category: "education", pastelClass: "pastel-blue" },
  { id: 3, title: "সরকারি অফিস", slug: "government", icon: Landmark, description: "সরকারি দপ্তরসমূহের তথ্য", status: "active", category: "government", pastelClass: "pastel-green" },
  { id: 4, title: "আইন সেবা", slug: "legal", icon: Scale, description: "আদালত ও আইনজীবীদের তথ্য", status: "active", category: "legal", pastelClass: "pastel-purple" },
  { id: 5, title: "পরিবহন", slug: "transport", icon: Bus, description: "বাস, ট্রেন ও যানবাহনের তথ্য", status: "active", category: "transport", pastelClass: "pastel-orange" },
  { id: 6, title: "বাজার", slug: "market", icon: ShoppingBag, description: "বাজার ও দোকানপাটের তথ্য", status: "active", category: "market", pastelClass: "pastel-pink" },
  { id: 7, title: "ব্যাংক", slug: "bank", icon: Building2, description: "ব্যাংক ও আর্থিক প্রতিষ্ঠান", status: "active", category: "finance", pastelClass: "pastel-teal" },
  { id: 8, title: "জরুরি সেবা", slug: "emergency", icon: Phone, description: "ফায়ার সার্ভিস, পুলিশ, অ্যাম্বুলেন্স", status: "active", category: "emergency", pastelClass: "pastel-red" },
  { id: 9, title: "গ্যাস সেবা", slug: "gas", icon: Flame, description: "গ্যাস সংযোগ ও সেবা কেন্দ্র", status: "active", category: "utility", pastelClass: "pastel-orange" },
  { id: 10, title: "পানি সেবা", slug: "water", icon: Droplets, description: "ওয়াসা ও পানি সরবরাহ", status: "active", category: "utility", pastelClass: "pastel-blue" },
  { id: 11, title: "বিদ্যুৎ সেবা", slug: "electricity", icon: Zap, description: "বিদ্যুৎ অফিস ও সেবা কেন্দ্র", status: "active", category: "utility", pastelClass: "pastel-yellow" },
  { id: 12, title: "ইন্টারনেট", slug: "internet", icon: Wifi, description: "ISP ও ইন্টারনেট সেবা প্রদানকারী", status: "active", category: "tech", pastelClass: "pastel-purple" },
  { id: 13, title: "রেস্টুরেন্ট", slug: "restaurant", icon: Utensils, description: "রেস্টুরেন্ট ও খাবারের দোকান", status: "active", category: "food", pastelClass: "pastel-orange" },
  { id: 14, title: "পোশাক", slug: "clothing", icon: Shirt, description: "পোশাকের দোকান ও টেইলর্স", status: "coming_soon", category: "shopping", pastelClass: "pastel-pink" },
  { id: 15, title: "মেরামত সেবা", slug: "repair", icon: Hammer, description: "ইলেকট্রনিক্স ও গৃহ মেরামত", status: "coming_soon", category: "service", pastelClass: "pastel-teal" },
  { id: 16, title: "কুরিয়ার সেবা", slug: "courier", icon: Bike, description: "কুরিয়ার ও ডেলিভারি সেবা", status: "coming_soon", category: "logistics", pastelClass: "pastel-green" },
  { id: 17, title: "লাইব্রেরি", slug: "library", icon: BookOpen, description: "পাঠাগার ও বইয়ের দোকান", status: "active", category: "education", pastelClass: "pastel-blue" },
  { id: 18, title: "এনজিও", slug: "ngo", icon: Heart, description: "এনজিও ও স্বেচ্ছাসেবী সংস্থা", status: "active", category: "social", pastelClass: "pastel-pink" },
  { id: 19, title: "থানা", slug: "police", icon: Shield, description: "থানা ও পুলিশ ফাঁড়ি", status: "active", category: "security", pastelClass: "pastel-green" },
  { id: 20, title: "পর্যটন", slug: "tourism", icon: MapPin, description: "দর্শনীয় স্থান ও পর্যটন কেন্দ্র", status: "coming_soon", category: "tourism", pastelClass: "pastel-yellow" },
];
