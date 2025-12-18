import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X, Loader2, Send, Briefcase } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CareerApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  position: string;
}

export function CareerApplicationForm({ isOpen, onClose, position }: CareerApplicationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: {
          type: "career",
          position,
          ...formData,
        },
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        skills: "",
        linkedin: "",
        portfolio: "",
        coverLetter: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Form Modal */}
      <div className="relative glass-card p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Apply for {position}</h2>
            <p className="text-sm text-muted-foreground">Fill in your details below</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone *</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience *</label>
              <Input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 3 years"
                required
                className="bg-secondary/50 border-border/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Skills *</label>
            <Input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., React, Node.js, Python, AI/ML"
              required
              className="bg-secondary/50 border-border/50"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
              <Input
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="bg-secondary/50 border-border/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Portfolio / GitHub</label>
              <Input
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://github.com/username"
                className="bg-secondary/50 border-border/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Cover Letter</label>
            <Textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you'd be a great fit for this role..."
              rows={4}
              className="bg-secondary/50 border-border/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
