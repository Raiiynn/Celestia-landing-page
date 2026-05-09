import { Bot, Sparkles, Shield, Zap, MessageSquare, Globe, Github, Twitter, Mail } from "lucide-react";
import prayagAvatar from "@/assets/prayag-avatar.jpg";

export const siteConfig = {
  bot: {
    name: "Celestia",
    tagline: "Advanced Moderation & Guild Management",
    description:
      "Celestia is a powerful Discord bot crafted for modern communities. Advanced moderation, guild management, automated protection, and comprehensive utilities — beautifully designed and lightning fast.",
    version: "v1.0.0",
    servers: "10",
    users: "2468",
    commands: 45,
    uptime: "99.99%",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1370677746233249875&permissions=0&integration_type=0&scope=bot",
    supportUrl: "https://discord.gg/celestia",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Commands", href: "/commands" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ],

  features: [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description:
        "Comprehensive ban, kick, and infraction tracking system. Every moderation action is logged for full transparency and audit trails.",
    },
    {
      icon: Sparkles,
      title: "AutoModeration",
      description:
        "Automated protection against spam, bad words, zalgo text, excessive caps, and mention spam. Keep your server clean 24/7.",
    },
    {
      icon: MessageSquare,
      title: "Guild Management",
      description:
        "Verification system, automatic role assignment, member tracking, and comprehensive server backup management.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Globally distributed infrastructure ensures every command responds instantly with sub-50ms latency.",
    },
    {
      icon: Globe,
      title: "Utility Commands",
      description:
        "Password generation, maintenance mode, embed creation, and comprehensive moderation logging capabilities.",
    },
    {
      icon: Bot,
      title: "Database Backed",
      description:
        "Powered by Supabase with 13+ tables for complete guild, user, and infraction management.",
    },
  ],

  commandCategories: [
    {
      name: "Moderation",
      icon: Shield,
      commands: [
        { name: "/ban", description: "Ban a user with optional message history deletion", usage: "/ban <user> [reason] [delete_messages]" },
        { name: "/kick", description: "Quick member removal from the server", usage: "/kick <user> [reason]" },
        { name: "/logging", description: "Configure moderation logs", usage: "/logging setup [mod_logs] [general_logs]" },
        { name: "/infractions", description: "View user moderation history", usage: "/infractions <user>" },
        { name: "/purge", description: "Bulk delete messages from a channel", usage: "/purge <amount>" },
      ],
    },
    {
      name: "Guild Management",
      icon: MessageSquare,
      commands: [
        { name: "/verification", description: "Setup member verification system", usage: "/verification setup [channel] [role]" },
        { name: "/autorole", description: "Automatic role assignment on join", usage: "/autorole add <role>" },
        { name: "/backup", description: "Create and manage server backups", usage: "/backup create" },
        { name: "/automod", description: "Configure automatic moderation", usage: "/automod spam|badwords|zalgo [enable]" },
        { name: "/tickets", description: "Setup support ticket system", usage: "/tickets setup" },
      ],
    },
    {
      name: "Configuration",
      icon: Zap,
      commands: [
        { name: "/password", description: "Generate secure random passwords", usage: "/password [length]" },
        { name: "/maintenance", description: "Toggle bot maintenance mode", usage: "/maintenance" },
        { name: "/settings", description: "View and manage guild settings", usage: "/settings" },
        { name: "/embed", description: "Create custom embeds", usage: "/embed create [title] [description]" },
        { name: "/stats", description: "View comprehensive statistics", usage: "/stats" },
      ],
    },
    {
      name: "Information",
      icon: Globe,
      commands: [
        { name: "/serverinfo", description: "Display detailed server statistics", usage: "/serverinfo" },
        { name: "/userinfo", description: "Display user information and roles", usage: "/userinfo <user>" },
        { name: "/membercount", description: "Get current member count", usage: "/membercount" },
        { name: "/ping", description: "Check bot latency", usage: "/ping" },
        { name: "/help", description: "View all available commands", usage: "/help [command]" },
      ],
    },
  ],

  team: [
    {
      name: "Raiiynn",
      role: "Founder & Lead Developer",
      bio: "Creator of Celestia, passionate about Discord bot development and community management tools.",
      avatar: prayagAvatar,
      socials: { github: "https://github.com/Raiiynn", twitter: "#" },
    },
    {
      name: "Community",
      role: "Community Manager",
      bio: "Dedicated to supporting and growing the Celestia community worldwide.",
      avatar: "",
      socials: { github: "#", twitter: "#" },
    },
  ],

  faqs: [
    {
      q: "Is Celestia free to use?",
      a: "Yes, all features are completely free and open-source. Celestia is built for community use with no premium tier or hidden charges.",
    },
    {
      q: "How do I add Celestia to my server?",
      a: "Click the Invite button, authorize the bot with the Administrator permission, and Celestia will be ready to manage your server.",
    },
    {
      q: "Does Celestia store my messages?",
      a: "No. We only store configuration data and moderation logs essential for commands. See our Privacy page for complete details.",
    },
    {
      q: "How do I configure moderation?",
      a: "Use /logging setup to configure mod logs, /automod to enable automatic protection, and /verification to setup member verification.",
    },
    {
      q: "Can I contribute to Celestia?",
      a: "Absolutely! Celestia is open-source on GitHub. Join our Discord community and check out the repository to contribute.",
    },
  ],

  contact: {
    email: "contact@celestiabot.com",
    discord: "https://discord.gg/celestia",
    github: "https://github.com/Raiiynn/Celestia-discord-bot",
    twitter: "https://twitter.com/celestiabot",
  },

  socials: [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "xyz@gmail.com", label: "Email" },
  ],

  privacy: {
    lastUpdated: "May 9 2026",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect minimal data required for the bot to function: server IDs, channel IDs, role IDs, user IDs, and configuration preferences. We never store message content unless explicitly enabled by a server administrator for logging features.",
      },
      {
        title: "How We Use Your Data",
        body: "Your data is used solely to provide bot functionality such as moderation logs, infraction tracking, server backups, and configuration settings. We do not sell, rent, or share your data with third parties.",
      },
      {
        title: "Data Retention",
        body: "Configuration data persists while the bot remains in your server. When Celestia is removed, all associated data is automatically purged from our Supabase database within 30 days.",
      },
      {
        title: "Your Rights",
        body: "You may request a full export or deletion of your data at any time by contacting our support team via email or Discord server.",
      },
    ],
  },

  terms: {
    sections: [
      {
        title: "Acceptable Use",
        body: "By using Celestia, you agree not to abuse the service, attempt to bypass rate limits, or use the bot for illegal activities. Violations may result in a permanent ban from the service.",
      },
      {
        title: "Service Availability",
        body: "While we target 99.99% uptime, Celestia is provided as-is. We are not liable for service interruptions, data loss, or damages arising from use of the bot.",
      },
      {
        title: "Changes to These Terms",
        body: "We may update these terms occasionally. Continued use after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
