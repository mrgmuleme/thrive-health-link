import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/logo.jpeg"
                                alt="Thrive Health Link Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="text-xl font-bold text-white">
                                Thrive Health Link
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            A youth-led initiative optimizing child health among
                            underserved communities in Uganda through immunization services
                            and community-facility linkages.
                        </p>
                        <Button
                            asChild
                            size="sm"
                            className="bg-accent hover:bg-accent/90"
                        >
                            <a href="#contact">Support Our Mission</a>
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-primary transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#approach"
                                    className="hover:text-primary transition-colors"
                                >
                                    Our Approach
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#innovation"
                                    className="hover:text-primary transition-colors"
                                >
                                    Innovation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#mission"
                                    className="hover:text-primary transition-colors"
                                >
                                    Mission & Values
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Rubaga Road</li>
                            <li>Kampala, Uganda</li>
                            <li>
                                <a
                                    href="tel:+256784267680"
                                    className="hover:text-secondary transition-colors"
                                >
                                    +256 784 267 680
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/109986222/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-secondary transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>
                        © {currentYear} Thrive Health Link. All rights reserved.
                    </p>
                    <p className="text-gray-400">
                        Ensuring universal access to care for every child
                    </p>
                </div>
            </div>
        </footer>
    );
}
