import { NextResponse } from "next/server";

export async function GET() {
  const consultations = [
    {
      id: 1,
      name: "Hassan Akbar",
      phone: "03998765213",
      email: "akbarhassan918@gmail.com",
      practice_area: "Civil & Commercial Litigation",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-18",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/xyz-law-apex",
      urgency: "Standard",
      created_at: "2026-11-16",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      phone: "+1 555-987-6543",
      email: "sarah.jenkins@example.com",
      practice_area: "Corporate & Commercial Law",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-25",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/ucy-sixf-xee",
      urgency: "Urgent",
      created_at: "2026-11-16",
    },
    {
      id: 3,
      name: "ali akbar",
      phone: "03098866301",
      email: "ali234@gmail.com",
      practice_area: "Corporate & Commercial Law",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-20",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/jtl-ppiw-ohm",
      urgency: "Standard",
      created_at: "2026-11-16",
    },
    {
      id: 4,
      name: "Ali Raza",
      phone: "+92 300 1234567",
      email: "aliraza@example.com",
      practice_area: "General Legal Inquiry",
      consultation_mode: "message",
      preferred_date: "Flexible Intake",
      preferred_time: "Office Hours",
      meeting_link: null,
      urgency: "Standard",
      created_at: "2026-11-17",
    },
  ];

  return NextResponse.json({
    success: true,
    count: consultations.length,
    data: consultations,
  });
}
