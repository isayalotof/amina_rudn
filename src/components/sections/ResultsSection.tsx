import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Award, Users, FileCheck, Briefcase, Calendar, Star } from 'lucide-react';

const ResultsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Calendar,
      value: 5,
      label: 'Сезонов программы',
      suffix: '',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Users,
      value: 120,
      label: 'Успешных менти',
      suffix: '+',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Award,
      value: 50,
      label: 'Профессиональных менторов',
      suffix: '',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: FileCheck,
      value: 100,
      label: 'Рекомендательных писем',
      suffix: '+',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Briefcase,
      value: 250,
      label: 'Заявок на участие',
      suffix: '',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: Star,
      value: 6.5,
      label: 'Месяцев программы',
      suffix: '',
      decimals: 1,
      color: 'from-yellow-500 to-yellow-700',
    },
  ];

  const achievements = [
    {
      title: 'Трудоустройство',
      description:
        'Более 60% выпускников программы успешно трудоустроились в крупные компании или получили стажировки',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Рекомендательные письма',
      description:
        '100+ рекомендательных писем от менторов из топовых компаний России и международных корпораций',
      icon: FileCheck,
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Реализованные проекты',
      description:
        'Более 80 проектов успешно разработано и внедрено в различных сферах бизнеса и социальной деятельности',
      icon: Award,
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Профессиональные связи',
      description:
        'Каждый участник программы получает доступ к сети профессионалов и возможность развития карьеры',
      icon: Users,
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="results" className="section relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

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
              Результаты и <span className="text-gradient-rainbow">достижения</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Конкретные результаты нашей работы за 5 сезонов программы
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="card-glass p-6 text-center group relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                  />

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Value */}
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

                  {/* Label */}
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements Grid */}
          <motion.div variants={containerVariants} className="mb-16">
            <motion.h3
              variants={cardVariants}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Ключевые <span className="text-gradient-secondary">достижения</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="card p-8 group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center">
            <div className="card-glass inline-block px-8 py-6 max-w-2xl">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Станьте частью успешной истории ProMentor RUDN
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Присоединяйтесь к программе и получите поддержку от
                профессионалов своего дела
              </p>
              <motion.a
                href="#apply"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Подать заявку сейчас
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
