import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Thrive Health Link",
    description: "Explore our journey of transforming child health outcomes across Uganda's most vulnerable communities through powerful images.",
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
