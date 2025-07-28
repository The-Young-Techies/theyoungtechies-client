export interface ApproachStep {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
}

export const steps: ApproachStep[] = [
    {
        icon: 'step 1',
        title: "Discovery",
        description: "We begin by understanding your business goals and audience to craft a smart, custom strategy.",
        bgColor: "#7cdff8bf"
    },
    {
        icon: "step 2",
        title: "Design & Development",
        description: "Our team creates stunning, responsive designs and builds high-performance websites that deliver.",
        bgColor: "#bd3dce9b"
    },
    {
        icon: "step 3",
        title: "Delivery & Support",
        description: "We launch your website and provide ongoing support to keep it optimized, secure, and up to date.",
        bgColor: "#eca542cb"
    }
];

