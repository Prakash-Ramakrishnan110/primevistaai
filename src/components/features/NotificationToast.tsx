import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Zap, Bell } from "lucide-react";

const notifications = [
  {
    title: "New AI Features Available!",
    description: "Explore our latest chatbot and automation capabilities.",
    icon: Sparkles,
    delay: 8000,
  },
  {
    title: "Free Consultation",
    description: "Book a free 30-minute consultation with our experts.",
    icon: Zap,
    delay: 20000,
  },
  {
    title: "Career Opportunities",
    description: "We're hiring! Check out our open positions.",
    icon: Bell,
    delay: 35000,
  },
];

export function NotificationToast() {
  const { toast } = useToast();

  useEffect(() => {
    // Check if notifications have been shown in this session
    const shownNotifications = sessionStorage.getItem("primevista_notifications");
    if (shownNotifications) return;

    const timers: NodeJS.Timeout[] = [];

    notifications.forEach((notification, index) => {
      const timer = setTimeout(() => {
        toast({
          title: notification.title,
          description: notification.description,
        });
      }, notification.delay);
      timers.push(timer);
    });

    // Mark notifications as shown
    sessionStorage.setItem("primevista_notifications", "true");

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [toast]);

  return null;
}
