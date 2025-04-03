
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Navbar from "../components/layout/Navbar";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Phone, ArrowRight, Lock, User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneOtpForm from "@/components/forms/PhoneOtpForm";
import { useAuth } from "@/hooks/useAuth";

// Form schema with phone validation
const formSchema = z.object({
  phone: z.string().min(8, {
    message: "Le numéro de téléphone doit contenir au moins 8 chiffres",
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmitPhone = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would call an API to send an OTP
      console.log("Sending OTP to:", data.phone);
      
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store phone number and move to OTP step
      setPhoneNumber(data.phone);
      setStep("otp");
      toast.success("Code envoyé avec succès!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Erreur lors de l'envoi du code");
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOtp = async (otp: string) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would verify the OTP with an API
      console.log("Verifying OTP:", otp, "for phone:", phoneNumber);
      
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful authentication
      signIn({
        id: "123",
        phone: phoneNumber,
        role: "household", // This would be returned from the server in real app
        name: "Utilisateur Fertiloop",
      });
      
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Code incorrect. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-fertiloop-beige-light">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Connexion
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Accédez à votre compte Fertiloop
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="rounded-xl bg-white shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://placehold.co/300x200/e2f2d5/1f7532?text=Fertiloop" 
                    alt="Fertiloop" 
                    className="w-24 h-24 object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    Connectez-vous pour
                  </h2>
                  <p className="text-sm text-gray-500">
                    Accéder à vos services Fertiloop personnalisés
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ scale: 1.02 }}
                  className="flex p-3 bg-fertiloop-green/5 rounded-lg hover:bg-fertiloop-green/10 transition-colors"
                >
                  <svg
                    className="h-6 w-6 text-fertiloop-green flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Suivi des collectes</span>
                    <p className="text-sm text-gray-500 mt-1">Programmez et suivez vos collectes de biodéchets</p>
                  </div>
                </motion.li>
                <motion.li 
                  whileHover={{ scale: 1.02 }}
                  className="flex p-3 bg-fertiloop-blue/5 rounded-lg hover:bg-fertiloop-blue/10 transition-colors"
                >
                  <svg
                    className="h-6 w-6 text-fertiloop-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Commandes d'engrais</span>
                    <p className="text-sm text-gray-500 mt-1">Accédez au catalogue d'engrais et passez commande</p>
                  </div>
                </motion.li>
              </ul>

              <motion.div 
                whileHover={{ backgroundColor: "#F5F3E6" }}
                className="mt-8 p-4 bg-fertiloop-beige rounded-lg border border-fertiloop-beige-dark/20"
              >
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="h-5 w-5 text-fertiloop-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pas encore inscrit?{" "}
                  <Link to="/register" className="text-fertiloop-blue font-medium hover:underline hover:text-fertiloop-blue-dark transition-colors ml-1">
                    S'inscrire
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <motion.div 
              className="max-w-md w-full mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {step === "phone" ? (
                <>
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className="bg-fertiloop-blue text-white p-3 rounded-full" 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400, 
                          damping: 10,
                          delay: 0.2
                        }}
                      >
                        <Phone className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <h2 className="text-center text-2xl font-bold text-gray-900">
                      Connexion par téléphone
                    </h2>
                    <p className="text-center text-gray-600 mt-1">
                      Saisissez votre numéro pour recevoir un code
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitPhone)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de téléphone</FormLabel>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                              </div>
                              <FormControl>
                                <motion.div whileFocus={{ scale: 1.01 }}>
                                  <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Entrez votre numéro"
                                    className="pl-10"
                                    autoComplete="tel"
                                  />
                                </motion.div>
                              </FormControl>
                            </div>
                            <FormDescription>
                              Nous vous enverrons un code de vérification par SMS
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-fertiloop-green hover:bg-fertiloop-green-dark text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              Envoi en cours...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center">
                              Recevoir un code
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <motion.div 
                        className="bg-fertiloop-green text-white p-3 rounded-full" 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400, 
                          damping: 10,
                          delay: 0.2
                        }}
                      >
                        <Lock className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <h2 className="text-center text-2xl font-bold text-gray-900">
                      Vérification
                    </h2>
                    <p className="text-center text-gray-600 mt-1">
                      Saisissez le code envoyé au {phoneNumber}
                    </p>
                  </div>

                  <PhoneOtpForm onVerify={verifyOtp} isVerifying={isSubmitting} onResend={() => {
                    toast.info("Un nouveau code a été envoyé");
                  }} />
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
