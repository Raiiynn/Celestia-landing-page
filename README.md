# 🌟 Celestia Discord Bot - Landing Page

Landing page for **Celestia**, an advanced Discord bot focused on moderation, guild management, and automated protection.

## 📋 About Celestia

Celestia is a powerful Discord bot crafted for modern communities. It provides:

- **Advanced Moderation** - Comprehensive ban, kick, and infraction tracking system
- **AutoModeration** - Automated protection against spam, bad words, zalgo text, excessive caps, and mention spam
- **Guild Management** - Verification system, automatic role assignment, member tracking, and server backups
- **Configuration Tools** - Password generation, maintenance mode, embed creation, and logging
- **Information Commands** - Server/user info, member count, ping, and help system

## 🎨 Design & Colors

This landing page uses a beautiful **Purple/Indigo color scheme** that reflects the "Celestia" celestial theme:

- **Primary Color**: `262 80% 50%` (Rich Indigo)
- **Secondary Color**: `280 85% 45%` (Purple)
- **Accent Color**: `263 70% 60%` (Light Indigo)
- **Dark Mode**: Optimized with light indigo accents for better visibility

The color scheme provides a premium, sophisticated feel perfect for an admin/moderation bot.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components with Radix UI
- **Styling**: Tailwind CSS with custom purple/indigo theme
- **Animations**: Framer Motion & GSAP
- **Build Tool**: Vite
- **Forms**: React Hook Form + Zod validation
- **Data Display**: Recharts, Embla Carousel
- **Icons**: Lucide React

## 📦 Commands

The landing page showcases **4 command categories**:

### Moderation
- `/ban` - Ban a user with optional message history deletion
- `/kick` - Quick member removal
- `/logging` - Configure moderation logs
- `/infractions` - View user moderation history
- `/purge` - Bulk delete messages

### Guild Management
- `/verification` - Setup member verification
- `/autorole` - Automatic role assignment
- `/backup` - Create and manage backups
- `/automod` - Configure automatic moderation
- `/tickets` - Setup support ticket system

### Configuration
- `/password` - Generate secure passwords
- `/maintenance` - Toggle maintenance mode
- `/settings` - Manage guild settings
- `/embed` - Create custom embeds
- `/stats` - View statistics

### Information
- `/serverinfo` - Display server statistics
- `/userinfo` - Display user information
- `/membercount` - Get member count
- `/ping` - Check bot latency
- `/help` - View all commands

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

The project uses Vite as the build tool and includes:
- Tailwind CSS with custom theme configuration
- PostCSS for autoprefixing
- ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── sections/              # Page sections
│   ├── reactbits/             # Custom animations
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── config/
│   └── site.ts               # Main configuration (name, commands, features, etc.)
├── pages/
│   ├── Index.tsx
│   ├── Commands.tsx
│   ├── About.tsx
│   ├── Privacy.tsx
│   └── NotFound.tsx
├── App.tsx
├── main.tsx
└── index.css                 # Tailwind config with purple/indigo theme
```

## 🎯 Key Features

- ✨ **Beautiful UI** - Purple/Indigo color scheme with glass morphism effects
- 🚀 **Fast Performance** - Optimized with Vite and React
- 📱 **Responsive Design** - Works on all device sizes
- 🌙 **Dark Mode** - Full dark mode support with smooth transitions
- ⚡ **Smooth Animations** - Framer Motion & GSAP animations
- 🎨 **Customizable** - Easy to modify colors and content in `src/config/site.ts`

## 📝 Configuration

All site content is centralized in `src/config/site.ts`:

```typescript
export const siteConfig = {
  bot: {
    name: "Celestia",
    tagline: "Advanced Moderation & Guild Management",
    description: "...",
    // ... other settings
  },
  features: [...],
  commandCategories: [...],
  team: [...],
  faqs: [...],
  contact: {...},
  privacy: {...},
};
```

## 🔗 Links

- **Discord Community**: https://discord.gg/celestia
- **GitHub Repository**: https://github.com/Raiiynn/Celestia-discord-bot
- **Email**: contact@celestiabot.com

## 📄 License

This project is open-source and available under the MIT License.

## 👤 Author

- **Created by**: Raiiynn
- **Bot Repository**: [Celestia Discord Bot](https://github.com/Raiiynn/Celestia-discord-bot)

---

Built with ❤️ for the Discord community. Perfect for servers that need advanced moderation and guild management.
