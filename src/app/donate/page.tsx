"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Heart,
    Users,
    Stethoscope,
    Building,
    Check,
    ArrowRight,
} from "lucide-react";

const donationTiers = [
    {
        name: "Supporter",
        amount: "$25",
        icon: Heart,
        color: "bg-primary",
        benefits: [
            "Monthly newsletter updates",
            "Recognition on our website",
            "Tax deduction certificate",
        ],
        impact: "Provides vaccines for 2 children",
    },
    {
        name: "Champion",
        amount: "$100",
        icon: Users,
        color: "bg-secondary",
        popular: true,
        benefits: [
            "All Supporter benefits",
            "Quarterly impact reports",
            "Invitation to annual event",
            "Personal thank you letter",
        ],
        impact: "Supports a VHT for one month",
    },
    {
        name: "Guardian",
        amount: "$500",
        icon: Stethoscope,
        color: "bg-accent",
        benefits: [
            "All Champion benefits",
            "Visit to project site (virtual/in-person)",
            "Direct updates from field staff",
            "Advisory council membership",
        ],
        impact: "Covers SMS reminders for 1,000 families",
    },
    {
        name: "Partner",
        amount: "Custom",
        icon: Building,
        color: "bg-primary",
        benefits: [
            "All Guardian benefits",
            "Customized partnership package",
            "Logo on marketing materials",
            "Co-branded initiatives",
        ],
        impact: "Transform entire communities",
    },
];

const impactAreas = [
    {
        title: "Direct Healthcare",
        description: "Vaccines, medical supplies, and health worker support",
        icon: Stethoscope,
    },
    {
        title: "Community Training",
        description: "VHT and CRP capacity building programs",
        icon: Users,
    },
    {
        title: "Technology Innovation",
        description: "Vaxclue platform development and SMS systems",
        icon: Heart,
    },
];

export default function DonatePage() {
    const [customAmount, setCustomAmount] = useState("");
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,115,230,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(22,163,74,0.15),transparent_50%)]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Badge className="mb-4 bg-secondary text-white">
                        Make a Difference Today
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">
                        <span className="block text-foreground mb-2">Your Donation</span>
                        <span className="block bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                            Saves Lives
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Every contribution helps us reach zero-dose children and strengthen
                        community health systems in Uganda's most vulnerable areas.
                    </p>
                </div>
            </section>

            {/* Donation Tiers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Choose Your Impact Level</h2>
                        <p className="text-muted-foreground">
                            Select a donation tier that works for you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {donationTiers.map((tier) => {
                            const Icon = tier.icon;
                            return (
                                <Card
                                    key={tier.name}
                                    className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 ${selectedTier === tier.name
                                            ? "ring-2 ring-primary ring-offset-4 scale-105 shadow-xl"
                                            : "shadow-lg hover:scale-105"
                                        } ${tier.popular ? "ring-2 ring-accent ring-offset-2" : ""}`}
                                    onClick={() => setSelectedTier(tier.name)}
                                >
                                    {/* Gradient Top Border */}
                                    <div className={`absolute top-0 left-0 w-full h-1 ${tier.color === 'bg-primary' ? 'bg-gradient-to-r from-primary via-blue-600 to-primary' :
                                            tier.color === 'bg-secondary' ? 'bg-gradient-to-r from-secondary via-green-600 to-secondary' :
                                                'bg-gradient-to-r from-accent via-orange-500 to-accent'
                                        }`} />

                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10" />

                                    {tier.popular && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-orange-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg animate-pulse">
                                            ⭐ POPULAR
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-4 pt-6">
                                        <div className="relative mx-auto mb-4">
                                            <div
                                                className={`w-20 h-20 ${tier.color} rounded-full flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <div className={`absolute inset-0 ${tier.color} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                                        </div>
                                        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                                        <div className="text-5xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mt-3">
                                            {tier.amount}
                                        </div>
                                        {tier.amount !== "Custom" && (
                                            <div className="text-sm text-muted-foreground">/month</div>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                                            <p className="text-sm font-semibold text-secondary">
                                                {tier.impact}
                                            </p>
                                        </div>
                                        <ul className="space-y-2">
                                            {tier.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Custom Amount */}
                    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardHeader>
                            <CardTitle className="text-center">
                                Or Enter a Custom Amount
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                                    />
                                </div>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-blue-600 hover:shadow-xl"
                                >
                                    Donate ${customAmount || "0"}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Where Your Money Goes */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Where Your Money Goes</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            100% of donations go directly to program implementation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {impactAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <Card
                                    key={idx}
                                    className="text-center hover:shadow-lg transition-shadow"
                                >
                                    <CardHeader>
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{area.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{area.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Make an Impact?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Together, we can ensure that no vulnerable child is left behind.
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-accent to-orange-500 hover:shadow-2xl text-lg px-12 py-6"
                    >
                        <Heart className="mr-2 w-5 h-5" fill="currentColor" />
                        Donate Now
                    </Button>
                    <p className="text-sm text-muted-foreground mt-6">
                        All donations are tax-deductible. You will receive a receipt via email.
                    </p>
                </div>
            </section>
        </main>
    );
}
