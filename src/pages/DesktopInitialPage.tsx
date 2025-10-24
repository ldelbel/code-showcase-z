import Button from "@/shared/Button";
import GradientText from "@/shared/GradientText";
import WhatsAppIcon from "@/shared/Icons/WhatsAppIcon";

const DesktopInitialPage = () => {
  const handleSendWhatsAppLink = () => {
    const currentUrl = window.location.origin;
    const message = `Olha que incrível! Descobri este universo astral personalizado: ${currentUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-5 bg-[radial-gradient(ellipse_at_top,_#1e1e1e_75%,_#111_100%)]">
      <div
        className={`max-w-[1300px] min-w-[750px] w-[55vw] h-[55dvh] mx-auto overflow-visible bg-[url(/zodic-initial-desktop.png)] bg-cover bg-center`}
      >
      </div>
      <div className="bg-golden-gradient w-[700px] p-[2px] rounded-md mx-auto">
        <div className="bg-[#181818] rounded-md p-4 text-center flex flex-col items-center gap-2">
          <div className="relative mb-5">
            <GradientText text="Este universo foi cuidadosamente desenhado para oferecer uma " fontSize="18px" />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full">
              <GradientText text="experiência completa em dispositivos móveis." fontSize="18px" />
            </div>
          </div>
          <p className="text-[#C6C6C6] text-lg font-bold" style={{ filter: 'drop-shadow(0px 3px 2px #00000099)' }}>Por enquanto, recomendamos que acesse o site pelo celular para explorar seus arquétipos, descobrir seus símbolos e mergulhar no seu mapa interior com total imersão.</p>
          <span className="text-[#FFD87C] text-lg font-bold" style={{ textShadow: '2px 0 0 #000000, -2px 0 0 #000000, 0 2px 0 #000000, 0 -2px 0 #000000, 1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000', filter: 'drop-shadow(0px 3px 2px #00000099)' }}>Em breve, uma versão para computadores estará disponível.</span>
          <div className="mt-10">
            <Button 
              variant="free" 
              base="golden" 
              text="ENVIAR LINK" 
              icon={<WhatsAppIcon />} 
              iconPosition="left" 
              onClick={handleSendWhatsAppLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopInitialPage;