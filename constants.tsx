
import React from 'react';
import type { SkillCategory, ExperienceItem, Project, Certification, EducationItem } from './types';

export const personalInfo = {
    name: "Sumit Kumawat",
    title: "IT Infrastructure & Cybersecurity Engineer",
    location: "Pune, India",
    email: "kumawatsumit45@gmail.com",
    phone: "+91 750 751 2005",
    linkedin: "https://www.linkedin.com/in/sumit-kumawat-infosec/",
    github: "https://github.com/sumit-kumawat",
    imageUrl: "https://cdn.conzex.com/files/profile-icon/1721097078045.jpeg",
    summary: "IT Infrastructure & Cybersecurity Engineer with 4+ years of experience in system administration, virtualization, cloud, and security operations. Skilled in Windows Server, Linux, VMware, Hyper-V, Nutanix, SIEM, endpoint security, and cloud platforms. Experienced in incident response, threat monitoring, log analysis, regex parsers, and IT automation.",
};

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Icons = {
  Email: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>,
  Phone: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
  LinkedIn: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.48 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>,
  GitHub: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  Location: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
  Briefcase: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Check: ({ className = 'h-5 w-5 text-primary' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  Security: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Networking: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18" /></svg>,
  Server: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
  Code: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  Cloud: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  Signature: ({ className = 'w-48 text-secondary' }: { className?: string }) => <div className={`font-signature text-6xl ${className}`}>Sumit K.</div>
};


export const skillCategories: SkillCategory[] = [
    {
        title: "Security & Threat Management",
        icon: Icons.Security,
        skills: [
            { name: "CrowdStrike Falcon" }, { name: "AlienVault OSSIM" }, { name: "Wazuh SIEM" },
            { name: "Incident Response" }, { name: "Threat Detection" }, { name: "Regex Parsers" },
            { name: "Vulnerability Assessment" }
        ],
    },
    {
        title: "Networking & Security Tools",
        icon: Icons.Networking,
        skills: [
            { name: "pfSense" }, { name: "KerioControl" }, { name: "Cisco Switches" },
            { name: "VPN" }, { name: "VLAN" }, { name: "NAT" }, { name: "SSL/TLS Hardening" },
            { name: "Reverse Proxy" }, { name: "FTP/HTTP/SSH/SMB/LDAP" }
        ],
    },
    {
        title: "Systems & Virtualization",
        icon: Icons.Server,
        skills: [
            { name: "Windows Server 2012–2025" }, { name: "Active Directory" }, { name: "Exchange 2016/2019" },
            { name: "Failover Clusters" }, { name: "VMware vSphere/ESXi/vCenter" }, { name: "Nutanix AHV & Prism" },
            { name: "Hyper-V" }, { name: "Linux" }
        ],
    },
    {
        title: "Automation & Development",
        icon: Icons.Code,
        skills: [
            { name: "PowerShell" }, { name: "PowerCLI" }, { name: "Shell Scripting" }, { name: "Docker" },
            { name: "Docker-Compose" }, { name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "PHP" }
        ],
    },
    {
        title: "Cloud Platforms",
        icon: Icons.Cloud,
        skills: [
            { name: "AWS (EC2, IAM, S3, RDS, VPC, Lambda)" }, { name: "Azure (VMs, AD, NSG, Monitoring)" },
            { name: "IIS" }, { name: "Apache" }, { name: "Tomcat" }, { name: "WHM/cPanel" }
        ],
    },
];

export const experience: ExperienceItem[] = [
    {
        company: "BMC Software Inc.",
        location: "Pune, India",
        role: "Associate Platform System Administrator",
        period: "Jan 2022 – Present",
        points: [
            "Deployed and maintained enterprise security tools, firewalls, and endpoint protection in collaboration with SOC.",
            "Automated VM lifecycle operations (deployments, snapshots, migrations, NIC configs) using PowerShell & PowerCLI, reducing manual work by >50%.",
            "Managed and secured Windows Server, AD, Exchange, DNS/LDAP, Failover Clusters across hybrid environments.",
            "Implemented log monitoring, custom regex parsers, alerts, and dashboards in SIEM platforms to detect and respond to threats.",
            "Configured and hardened IIS, Apache, and Docker environments with SSL/TLS and reverse proxy.",
            "Participated in incident response & break/fix situations, analyzing root cause and implementing preventive measures.",
            "Developed internal dashboards and security automation scripts (HTML, CSS, JS, PHP) improving operational visibility."
        ]
    },
    {
        company: "Biz Secure Labs Pvt. Ltd.",
        location: "Pune, India",
        role: "System Administrator",
        period: "Jul 2021 – Dec 2021",
        points: [
            "Administered AlienVault OSSIM for threat detection and log analysis.",
            "Managed firewalls and VPNs (KerioControl, pfSense).",
            "Maintained Windows Server, Exchange, IIS, and backups using Veeam.",
            "Managed Hyper-V environments for virtual machine deployment."
        ]
    }
];

export const education: EducationItem[] = [
    {
        institution: "D.Y. Patil International University",
        location: "Pune, India",
        degree: "BCA – Cloud Computing & Information Security",
        period: "2018 – 2021",
        cgpa: "7.6"
    }
];

export const projects: Project[] = [
    {
        title: "Automated Docker Installation Scripts",
        description: "Developed scripts for automated Docker installation on both Windows & Linux servers, streamlining environment setup."
    },
    {
        title: "Custom SIEM Parsers & Alerts",
        description: "Built custom SIEM parsers and security alerts for enhanced threat monitoring and faster detection."
    },
    {
        title: "BMC R&R Awards: FY25-Q2 & FY23-Q3",
        description: "Recognized for outstanding contributions to IT automation infrastructure management."
    },
    {
        title: "Security Research: Net Protector Antivirus",
        description: "Identified and reported XSS vulnerability in 2021 and an SQL Injection vulnerability in Admin Console in 2023."
    },
    {
        title: "Security Flaw Discovery",
        description: "Discovered and reported a security flaw in the Pune Police website in 2020, contributing to public digital safety."
    }
];

export const certifications: Certification[] = [
    { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "Dec 20, 2024" },
    { title: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: 2022 },
    { title: "Burp Suite Web Application Security Testing", issuer: "Burp Suite", year: 2023 },
    { title: "Cyber Hygiene Practice", issuer: "ISEA", year: 2021 }
];
