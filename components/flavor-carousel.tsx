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
    const categoryOrder = ['Whey Protein', 'Mass Gainer', 'Pre-Workout'];
    const sortedCategories = categoryOrder.filter(cat => groupedByCategory[cat]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
    };

    return (
        <div className="space-y-12 md:space-y-16">
            {sortedCategories.map((category) => (
                <motion.div
                    key={category}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-6"
                >
                    {/* Category Title */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
                            {category}
                        </h3>
                    </motion.div>

                    {/* Flavors List */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {groupedByCategory[category].map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ x: 6 }}
                                className="group"
                            >
                                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg border-2 border-gold/20 hover:border-gold/60 bg-white hover:bg-gold/5 transition-all duration-300 cursor-pointer">
                                    <div className={`w-3 h-3 rounded-full bg-linear-to-r from-yellow-400 to-yellow-600 flex-shrink-0`}></div>
                                    <span className="text-base md:text-lg font-medium text-foreground group-hover:text-gold transition-colors">
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
