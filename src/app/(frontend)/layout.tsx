
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Frontend</h1>
      {children}
    </>
  );
}
