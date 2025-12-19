import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const questions = [
  {
    id: 1,
    question: "What type of automation do you need?",
    options: [
      { id: "workflow", label: "Workflow Automation", description: "Automate repetitive tasks" },
      { id: "customer", label: "Customer Engagement", description: "WhatsApp, chatbots, CRM" },
      { id: "data", label: "Data & Analytics", description: "Dashboards and reporting" },
      { id: "custom", label: "Custom Development", description: "Tailored solutions" }
    ]
  },
  {
    id: 2,
    question: "What's your industry?",
    options: [
      { id: "healthcare", label: "Healthcare", description: "Medical & wellness" },
      { id: "education", label: "Education", description: "Schools & edtech" },
      { id: "retail", label: "Retail & E-commerce", description: "Online & offline stores" },
      { id: "other", label: "Other Industry", description: "Tell us more" }
    ]
  },
  {
    id: 3,
    question: "What's your team size?",
    options: [
      { id: "small", label: "1-10 employees", description: "Startup / Small business" },
      { id: "medium", label: "11-50 employees", description: "Growing company" },
      { id: "large", label: "51-200 employees", description: "Mid-size enterprise" },
      { id: "enterprise", label: "200+ employees", description: "Large organization" }
    ]
  }
];

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("primevista_questionnaire_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("primevista_questionnaire_seen", "true");
  };

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("primevista_questionnaire_answers", JSON.stringify(answers));
    handleClose();
  };

  if (!isOpen) return null;

  const question = questions[currentQuestion];
  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative glass-card p-8 max-w-lg w-full animate-scale-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Prime Vista"
            className="w-16 h-16 mx-auto mb-4 drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">Let's Get Started</span>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-6">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full transition-all ${
                i < currentQuestion ? 'bg-primary' : i === currentQuestion ? 'bg-primary/50' : 'bg-muted'
              }`} 
            />
          ))}
        </div>

        {!isComplete ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-foreground">
              {question.question}
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    answers[currentQuestion] === option.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      answers[currentQuestion] === option.id ? 'border-primary bg-primary' : 'border-muted-foreground'
                    }`}>
                      {answers[currentQuestion] === option.id && (
                        <Check className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{option.label}</p>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
              >
                Back
              </button>
              <p className="text-xs text-muted-foreground">
                {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-3 text-foreground">
              Thank You! <span className="gradient-text">We've Got Your Needs</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Based on your answers, we'll recommend the best solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" asChild onClick={handleComplete}>
                <Link to="/products">
                  View Recommended Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild onClick={handleComplete}>
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Skip anytime • No commitment required
        </p>
      </div>
    </div>
  );
}
