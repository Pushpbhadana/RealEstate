"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Mail, Phone, User } from "lucide-react";
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  compact?: boolean;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_65syihu", 
  TEMPLATE_ID: "template_hw5cec2", 
  PUBLIC_KEY: "oiZ77Da9QKuRl-j_y", 
};

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        mobile: data.mobile,
        message: data.message,
        to_name: "Real Estate Advisor",
        reply_to: data.email,
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Message Sent Successfully!
        </h2>
        <p className="text-gray-200 mb-6 text-sm">
          Thank you for reaching out. We'll get back to you soon.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          className="bg-white text-gray-800 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg border border-gray-300 hover:border-black px-6 py-2"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      {/* Header for standalone form - hidden when compact */}
      {!compact && (
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            Get Early Access
          </h1>
          <p className="text-gray-200 text-sm">
            Be the first to know about our new projects and exclusive offers.
          </p>
        </div>
      )}

      <Card className="border-0 shadow-xl bg-white/5 backdrop-blur-md">
        <CardContent className={compact ? "p-4" : "p-6"}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={compact ? "space-y-4" : "space-y-5"}>
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white text-sm">
                      <User className="w-4 h-4" />
                      Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-10 text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white text-sm">
                      <Mail className="w-4 h-4" />
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email address" 
                        type="email"
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-10 text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Mobile Field */}
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-white text-sm">
                      <Phone className="w-4 h-4" />
                      Mobile *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your mobile number" 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-10 text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your requirements..." 
                        {...field} 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[80px] text-sm resize-none"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-white text-gray-800 text-sm font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white hover:border-black flex items-center justify-center gap-2 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {compact ? "SUBMIT" : "GET EARLY ACCESS"}
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Contact Info - Only show in compact mode */}
      {compact && (
        <div className="text-center pt-4">
          <p className="text-gray-200 text-xs">
            We respect your privacy. Your information is safe with us.
          </p>
        </div>
      )}
    </div>
  );
}