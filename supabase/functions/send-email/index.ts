import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: "contact" | "career";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  // Career specific fields
  position?: string;
  experience?: string;
  skills?: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received email request");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: EmailRequest = await req.json();
    console.log("Email data:", { type: data.type, name: data.name, email: data.email });

    let subject: string;
    let htmlContent: string;

    if (data.type === "contact") {
      subject = `New Contact Form Submission from ${data.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${data.message}</p>
      `;
    } else {
      subject = `New Career Application: ${data.position} - ${data.name}`;
      htmlContent = `
        <h2>New Career Application</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <h3>Professional Details</h3>
        <p><strong>Position Applied:</strong> ${data.position}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin || "Not provided"}</p>
        <p><strong>Portfolio:</strong> ${data.portfolio || "Not provided"}</p>
        <h3>Cover Letter:</h3>
        <p>${data.coverLetter || "Not provided"}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Prime Vista <onboarding@resend.dev>",
      to: ["prakash7418r@gmail.com"],
      subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation to the applicant/contact
    await resend.emails.send({
      from: "Prime Vista <onboarding@resend.dev>",
      to: [data.email],
      subject: data.type === "contact" 
        ? "Thank you for contacting Prime Vista!" 
        : "Application Received - Prime Vista",
      html: data.type === "contact"
        ? `
          <h2>Thank you for reaching out, ${data.name}!</h2>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>Best regards,<br>The Prime Vista Team</p>
        `
        : `
          <h2>Thank you for your application, ${data.name}!</h2>
          <p>We have received your application for the <strong>${data.position}</strong> position.</p>
          <p>Our team will review your application and get back to you soon.</p>
          <p>Best regards,<br>The Prime Vista Team</p>
        `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
