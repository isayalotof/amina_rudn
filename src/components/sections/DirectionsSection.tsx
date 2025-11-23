import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FolderKanban,
  TrendingUp,
  BarChart3,
  Megaphone,
  Scale,
  Palette,
  Code,
  Brain,
  GraduationCap,
  FileText,
  Sparkles,
  Users,
} from 'lucide-react';

const DirectionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = [
    {
      icon: FolderKanban,
      title: 'Управление проектами',
      color: 'from-blue-500 to-blue-700',
      iconColor: 'text-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Маркетинг',
      color: 'from-purple-500 to-purple-700',
      iconColor: 'text-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Бизнес-анализ',
      color: 'from-green-500 to-green-700',
      iconColor: 'text-green-500',
    },
    {
      icon: Megaphone,
      title: 'Публичные выступления и презентации',
      color: 'from-pink-500 to-pink-700',
      iconColor: 'text-pink-500',
    },
    {
      icon: Scale,
      title: 'Юриспруденция',
      color: 'from-indigo-500 to-indigo-700',
      iconColor: 'text-indigo-500',
    },
    {
      icon: Sparkles,
      title: 'Реклама',
      color: 'from-orange-500 to-orange-700',
      iconColor: 'text-orange-500',
    },
    {
      icon: Users,
      title: 'Пиар (PR)',
      color: 'from-cyan-500 to-cyan-700',
      iconColor: 'text-cyan-500',
    },
    {
      icon: Palette,
      title: 'Креативные индустрии',
      color: 'from-rose-500 to-rose-700',
      iconColor: 'text-rose-500',
    },
    {
      icon: Code,
      title: 'IT и технологии',
      color: 'from-teal-500 to-teal-700',
      iconColor: 'text-teal-500',
    },
    {
      icon: Brain,
      title: 'Психология и психотерапия',
      color: 'from-violet-500 to-violet-700',
      iconColor: 'text-violet-500',
    },
    {
      icon: GraduationCap,
      title: 'Преподавание',
      color: 'from-amber-500 to-amber-700',
      iconColor: 'text-amber-500',
    },
    {
      icon: FileText,
      title: 'Создание текстов (копирайтинг)',
      color: 'from-lime-500 to-lime-700',
      iconColor: 'text-lime-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="directions" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Направления <span className="text-gradient-rainbow">менторства</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Выберите сферу развития и найдите своего ментора среди
              профессионалов различных индустрий
            </p>
          </motion.div>

          {/* Directions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {directions.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group"
                >
                  <div className="card p-6 text-center h-full flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${direction.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${direction.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                      {direction.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Info */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Не нашли свое направление? Мы поможем подобрать ментора
              индивидуально
            </p>
            <motion.a
              href="#apply"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Подать заявку
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectionsSection;
