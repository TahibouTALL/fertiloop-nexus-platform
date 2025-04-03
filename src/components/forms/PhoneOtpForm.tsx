
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface PhoneOtpFormProps {
  onVerify: (otp: string) => void;
  isVerifying: boolean;
  onResend: () => void;
}

const PhoneOtpForm = ({ onVerify, isVerifying, onResend }: PhoneOtpFormProps) => {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleResend = () => {
    onResend();
    setResendTimer(60);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      onVerify(otp);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="gap-2"
              disabled={isVerifying}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </motion.div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button 
            type="button" 
            className="w-full bg-fertiloop-green hover:bg-fertiloop-green-dark text-white"
            onClick={handleVerify}
            disabled={otp.length < 6 || isVerifying}
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Vérification...
              </span>
            ) : (
              "Vérifier"
            )}
          </Button>
        </motion.div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">
          {resendTimer > 0 
            ? `Renvoyer le code dans ${resendTimer} secondes` 
            : "Vous n'avez pas reçu de code ?"}
        </p>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-fertiloop-blue hover:text-fertiloop-blue-dark"
          onClick={handleResend}
          disabled={resendTimer > 0}
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          Renvoyer le code
        </Button>
      </div>
    </div>
  );
};

export default PhoneOtpForm;
