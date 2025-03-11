const nameOptions = {
    tech: [
        "NextGen Solutions", "CyberLink", "Quantum Innovations", "Byte Masters", "NeonTech",
        "Infinity AI", "Code Matrix", "Tech Nexus", "Skyware Systems", "Titan Cloud",
        "Smart Circuit", "InnovateX", "HyperLoop Tech", "Virtual Vision", "Synapse AI",
        "CyberForge", "AI Pioneers", "Logic Leap", "Code Catalyst", "Future Bytes",
        "CloudSphere", "PixelTech", "NanoSoft", "Quantum Code", "AI Dynamics",
        "Neural Wave", "Infinity Hub", "CoreX Technologies", "Visionary Labs", "ByteVerse",
        "Future Logic", "Digital Flow", "SyncSoft", "Innovators Inc", "EchoTech",
        "Blue Chip Systems", "AI Infinity", "NextGen Networks", "Code Sphere", "Edge Computing",
        "Titan AI", "TechFlow", "Cyber Elite", "Meta Nexus", "Smart Circuit Labs",
        "Data Vault", "Skyline Systems", "Synapse Tech", "Tech Mavericks", "Quantum Edge",
        "UltraTech", "Pioneer AI", "Elite Cyber", "InfiniSoft", "CyberLogic"
    ],
    fashion: [
        "Vogue Vibes", "Chic Trends", "Runway Royale", "Haute Styles", "Urban Elegance",
        "Modish Wear", "Glam Essence", "Couture House", "Silk & Satin", "Trend Envy",
        "Velvet Luxe", "Stellar Styles", "Royal Threads", "Sassy Apparel", "Fashion Fusion",
        "Divine Styles", "Chic Couture", "Elite Fashion", "Urban Vogue", "Runway Rebel",
        "Fashion Empire", "Majestic Looks", "Modish Hub", "Glamour Bloom", "Trendsetters",
        "Modern Essence", "Pinnacle Styles", "Haute Mode", "Luxe Attire", "Fabulous Drapes",
        "Prestige Fashion", "Elite Wear", "Classy Trends", "Iconic Threads", "Dream Couture",
        "Opulent Wear", "Bold Chic", "Luxury Stitches", "Trend Realm", "Fashion Maven"
    ],
    finance: [
        "Prime Wealth", "Capital Core", "Smart Invest", "Gold Reserve", "Alpha Capital",
        "Secure Funds", "WealthGrow", "Pioneer Finance", "Trust Bankers", "Elite Financials",
        "Vault Securities", "Global Assets", "Investor's Edge", "Fortune Planners", "Money Maven",
        "Capital Shield", "Future Bankers", "Smart Portfolio", "Strategic Assets", "Wise Investors",
        "Fortune Forward", "Secure Savings", "Elite Traders", "Wealth Engine", "Money Managers",
        "FinTech Hub", "Smart Securities", "Legacy Capital", "Innovate Finance", "Financial Titans"
    ],
    food: [
    "Savory Bites", "Gourmet Delights", "Tasty Heaven", "Spice & Spoon", "Sweet Bliss",
        "Urban Kitchen", "Flavor Fusion", "Zesty Eats", "Sizzling Flavors", "Yummy Junction",
        "Golden Crust", "Dine Divine", "The Food Hub", "Chef’s Choice", "Bite & Smile",
        "Spoon & Fork", "Tasty Corner", "Fusion Feast", "Zestful Bites", "Delightful Plates",
        "Euphoria Bites", "Sizzling Street", "Epicurean Feast", "Tasty Avenue", "Hearty Meals",
        "Spicy Treats", "Dine & Shine", "Happy Fork", "Crispy Crust", "Feast Express",
        "Flavor Bazaar", "The Tasty Spoon", "Golden Bites", "Flavors of Joy", "Crave Kitchen"
    ],
    health: [
       "Pure Wellness", "Vital Balance", "Fit & Thrive", "Zen Health", "Holistic Care",
        "Energetic Living", "Fresh Vitality", "Wellness Path", "Mind & Body", "Natural Glow",
        "Core Strength", "Revitalize Life", "Healthy Horizons", "Active Essence", "Peak Fitness",
        "Mindful Balance", "Holistic Fitness", "Tranquil Life", "Ultimate Wellness", "Elite Health",
        "Organic Living", "Vital Spark", "Whole Body Health", "Optimal Wellness", "Serene Soul",
        "Vibrant Living", "Balance Haven", "Essential Care", "Body & Soul Wellness", "Infinity Health",
        "Zen Therapy", "Natural Boost", "Wellness Sphere", "Lush Health", "Tranquility Fit"
    ]
};

function generateName() {
    const preference = document.getElementById("preference").value;
    const names = nameOptions[preference];
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("output").textContent = randomName;
}