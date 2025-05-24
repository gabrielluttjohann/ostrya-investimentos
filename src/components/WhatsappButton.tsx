import Link from "next/link";

const WhatsappButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="Botão flutuante"
        className="w-24"
      />
    </Link>
  );
};

export default WhatsappButton;
