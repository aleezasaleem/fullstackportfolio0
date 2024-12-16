import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <title>Aleeza Saleem</title>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
