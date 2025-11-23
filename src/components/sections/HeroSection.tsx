import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface HeroSectionProps {
  onOpenMenteeModal: () => void;
  onOpenMentorModal: () => void;
}

const HeroSection = ({ onOpenMenteeModal, onOpenMentorModal }: HeroSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 5, label: 'Сезонов программы', suffix: '' },
    { value: 120, label: 'Успешных менти', suffix: '+' },
    { value: 50, label: 'Профессиональных менторов', suffix: '' },
    { value: 100, label: 'Рекомендательных писем', suffix: '+' },
    { value: 250, label: 'Заявок на участие', suffix: '' },
    { value: 6.5, label: 'Месяцев программы', suffix: '', decimals: 1 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-primary-950 dark:to-secondary-950" />

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container-custom pt-24 pb-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-secondary-200 dark:border-secondary-800">
              <Sparkles className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-semibold text-gradient-secondary">
                5-й сезон уже скоро!
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient-rainbow">
              5 сезон программы менторства
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              отличный повод вспомнить всё
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Успехи менти, приобретенные связи, достижения проекта, вклад
            организаторов и множество построенных карьер
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            В 5 сезоне проекта менторы и менти будут осуществлять работу по 3
            векторам: <span className="font-semibold text-primary-600">образовательному</span>,{' '}
            <span className="font-semibold text-secondary-600">проектному</span> и{' '}
            <span className="font-semibold text-accent-600">карьерному</span>. Так у каждой
            менторской пары появится возможность грамотнее и точнее поставить цель и
            выстроить план работы
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.button
              onClick={onOpenMenteeModal}
              className="btn-primary flex items-center gap-2 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Подать заявку менти
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={onOpenMentorModal}
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Стать ментором
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-glass p-6 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <motion.div
            className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
