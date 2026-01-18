"use client";

import { useEffect, useRef, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Home, Lightbulb, Gift, Phone } from "lucide-react";

const strategies = [
    {
        id: "identification",
        title: "Client Identification",
        icon: Home,
        color: "text-primary",
        bgColor: "bg-primary/10",
        description:
            "Home visits where VHTs and CRPs move door-to-door in target communities reviewing child immunization cards, identifying and registering eligible children (zero-dose and under-immunized). We use the snowball method and pay special attention to mothers who had self-assisted deliveries or were delivered by traditional birth attendants.",
    },
    {
        id: "awareness",
        title: "Awareness Creation",
        icon: Lightbulb,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        description:
            "One-on-one discussions with eligible caregivers to understand their individualized barriers to immunization service utilization, offering targeted health education at household level, emphasizing the importance of schedule adherence and completion, and suggesting strategies to navigate their barriers.",
    },
    {
        id: "incentives",
        title: "Incentives for Uptake",
        icon: Gift,
        color: "text-accent",
        bgColor: "bg-accent/10",
        description:
            "To boost vaccination numbers, cash or in-kind incentives are provided to facilitate and compel facility attendance after a verified immunization visit. Cash incentives are a proven strategy that helps overcome economic barriers to service uptake in developing countries.",
    },
    {
        id: "reminders",
        title: "Phone Call & SMS Reminders",
        icon: Phone,
        color: "text-primary",
        bgColor: "bg-primary/10",
        description:
            "Subsequent appointment dates for referred clients are noted and followed up with SMS messages and phone calls to remind them of their appointments, ensuring they don't miss critical vaccination schedules.",
    },
];

export function ApproachSection() {
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
        <section id="approach" ref={sectionRef} className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4 bg-primary text-white">Our Approach</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Strategic Approach to Health Equity
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our program strategies focus on boosting demand creation and
                        referrals through community-centered interventions.
                    </p>
                </div>

                <div
                    className={`max-w-4xl mx-auto ${isVisible ? "fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.2s" }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {strategies.map((strategy, index) => {
                            const Icon = strategy.icon;
                            return (
                                <AccordionItem
                                    key={strategy.id}
                                    value={strategy.id}
                                    className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                                >
                                    <div
                                        className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${strategy.color === "text-primary"
                                                ? "from-primary to-blue-600"
                                                : strategy.color === "text-secondary"
                                                    ? "from-secondary to-green-600"
                                                    : "from-accent to-orange-500"
                                            }`}
                                    />
                                    <AccordionTrigger className="hover:no-underline py-6 px-6">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="relative">
                                                <div
                                                    className={`flex-shrink-0 w-14 h-14 ${strategy.bgColor} rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <Icon className={`w-7 h-7 ${strategy.color}`} />
                                                </div>
                                                <div
                                                    className={`absolute inset-0 ${strategy.bgColor} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{strategy.title}</h3>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-6 px-6">
                                        <p className="text-muted-foreground leading-relaxed pl-16">
                                            {strategy.description}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
