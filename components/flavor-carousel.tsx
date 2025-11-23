'use client';

import { motion } from 'framer-motion';

interface FlavorItem {
    id: string;
    name: string;
    category: string;
    flavor: string;
    image: string;
    color: string;
}

interface FlavorGridProps {
    items: FlavorItem[];
}

export function FlavorCarousel({ items }: FlavorGridProps) {
    // Group items by category
    const groupedByCategory = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, FlavorItem[]>);

    // Define category order
    const categoryOrder = ['Whey Protein', 'Mass Gainer', 'Pre-Workout', 'BCAA'];
    const sortedCategories = categoryOrder.filter(cat => groupedByCategory[cat]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
    };

    return (
        <div className="space-y-10 md:space-y-16">
            {sortedCategories.map((category) => (
                <motion.div
                    key={category}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="space-y-5"
                >
                    {/* Category Title */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-3">
                            {category}
                        </h3>
                    </motion.div>

                    {/* Flavors List */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {groupedByCategory[category].map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="group will-change-transform"
                            >
                                <div className="flex items-center gap-2.5 p-2.5 md:p-3 rounded-lg border-2 border-gold/20 hover:border-gold/60 bg-white hover:bg-gold/5 transition-colors duration-200 cursor-pointer">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0"></div>
                                    <span className="text-sm md:text-base font-medium text-foreground group-hover:text-gold transition-colors duration-150 truncate">
                                        {item.flavor}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
