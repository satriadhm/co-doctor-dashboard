import PublicLayout from "@/components/templates/PublicLayout";

export default function PublicLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayout>{children}</PublicLayout>;
}
