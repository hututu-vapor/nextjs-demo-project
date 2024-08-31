import { Inter, Roboto_Mono, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
