"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const supporters = [
    {
        name: "D-Prize",
        url: "https://d-prize.org/",
        description: "Supporting poverty alleviation through distributed entrepreneurship",
    },
    {
        name: "FASI Uganda",
        url: "https://www.fasiuganda.org/",
        description: "Foundation for Advanced Studies & Innovation",
    },
];

export function SupportersSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4">Our Partners</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Proudly Supported By
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Together with our partners, we're building a healthier future for
                        Uganda's most vulnerable communities
                    </p>
                </div>

                <div
                    className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isVisible ? "fade-in" : "opacity-0"
                        }`}
                    style={{ animationDelay: "0.2s" }}
                >
                    {supporters.map((supporter, index) => (
                        <Card
                            key={supporter.name}
                            className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                            <CardContent className="p-8 text-center">
                                <a
                                    href={supporter.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors mb-3">
                                        {supporter.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {supporter.description}
                                    </p>
                                    <span className="text-sm text-primary font-semibold mt-4 inline-block group-hover:underline">
                                        Learn More →
                                    </span>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Community Impact Images */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 ${isVisible ? "fade-in" : "opacity-0"
                        }`}
                    style={{ animationDelay: "0.4s" }}
                >
                    {[7, 8, 9, 10].map((num) => (
                        <div
                            key={num}
                            className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={`/thrive-images/image${num}.jpeg`}
                                alt={`Community impact ${num}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
