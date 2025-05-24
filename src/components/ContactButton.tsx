import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactButton = ({
  href,
  icon: Icon,
  className,
  label,
}: {
  href: string;
  className?: string;
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-full transition shadow-lg flex items-center gap-2 ${className}`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default ContactButton;
