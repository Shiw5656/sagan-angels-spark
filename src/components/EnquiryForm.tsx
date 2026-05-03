import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(255),
  cls: z.string().min(1, "Please select a class"),
  subject: z.string().trim().min(2, "Subject is required").max(150),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const initial = { name: "", phone: "", email: "", cls: "", subject: "", message: "" };

const EnquiryForm = () => {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handle = (k: keyof typeof initial, v: string) => {
    setData({ ...data, [k]: v });
    if (errors[k]) setErrors({ ...errors, [k]: "" });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the errors and try again.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Thank you! We've received your enquiry and will respond shortly.");
    setData(initial);
  };

  return (
    <form onSubmit={onSubmit} className="bg-card rounded-2xl shadow-card p-6 sm:p-8 space-y-5 border border-border">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={data.name} onChange={(e) => handle("name", e.target.value)} placeholder="Your full name" maxLength={100} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" value={data.phone} onChange={(e) => handle("phone", e.target.value)} placeholder="+91 98765 43210" maxLength={20} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" value={data.email} onChange={(e) => handle("email", e.target.value)} placeholder="you@example.com" maxLength={255} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cls">Class</Label>
          <Select value={data.cls} onValueChange={(v) => handle("cls", v)}>
            <SelectTrigger id="cls"><SelectValue placeholder="Select class" /></SelectTrigger>
            <SelectContent>
              {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8"].map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.cls && <p className="text-xs text-destructive">{errors.cls}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject of Query</Label>
        <Input id="subject" value={data.subject} onChange={(e) => handle("subject", e.target.value)} placeholder="e.g. Admission enquiry" maxLength={150} />
        {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} value={data.message} onChange={(e) => handle("message", e.target.value)} placeholder="Write your message here…" maxLength={1000} />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
        <Send className="h-4 w-4" /> {loading ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
};

export default EnquiryForm;
