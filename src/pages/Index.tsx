import { useState } from "react";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import ChatWidget from "@/components/ChatWidget";
import UserInfoModal from "@/components/UserInfoModal";

const Index = () => {
  const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);

  const handleUserInfoSubmit = (name: string, phone: string) => {
    setUserInfo({ name, phone });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <FAQSection />
      </main>
      
      <UserInfoModal 
        isOpen={!userInfo} 
        onSubmit={handleUserInfoSubmit}
      />
      
      {userInfo && (
        <ChatWidget 
          userName={userInfo.name}
          userPhone={userInfo.phone}
        />
      )}
    </div>
  );
};

export default Index;
