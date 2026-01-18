import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Donate | Thrive Health Link",
    description: "Support our mission to ensure universal access to child healthcare in Uganda. Every donation helps reach zero-dose children.",
};

export default function DonateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
