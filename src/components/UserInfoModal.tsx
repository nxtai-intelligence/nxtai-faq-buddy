import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface UserInfoModalProps {
  isOpen: boolean;
  onSubmit: (name: string, phone: string) => void;
}

const UserInfoModal = ({ isOpen, onSubmit }: UserInfoModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e celular.",
        variant: "destructive",
      });
      return;
    }

    if (phone.replace(/\D/g, "").length < 11) {
      toast({
        title: "Celular inválido",
        description: "Por favor, insira um número de celular válido.",
        variant: "destructive",
      });
      return;
    }

    onSubmit(name, phone);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl">Bem-vindo à Demo NxtAI!</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Para começar a testar nosso agente de FAQ, precisamos de algumas informações:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Celular *</Label>
            <Input
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          <Button type="submit" className="w-full gradient-primary">
            Iniciar Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoModal;