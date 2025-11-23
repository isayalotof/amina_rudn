import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Rocket, TrendingUp } from 'lucide-react';

const VectorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const vectors = [
    {
      icon: BookOpen,
      title: 'Образовательный',
      color: 'from-primary-500 to-primary-700',
      bgColor: 'from-primary-500/10 to-primary-700/10',
      iconColor: 'text-primary-500',
      features: [
        'Получение базовых теоретических знаний по выбранному направлению',
        'Формирование целей и задач на предстоящую работу',
        'Первые шаги в реализации проекта',
      ],
    },
    {
      icon: Rocket,
      title: 'Проектный',
      color: 'from-secondary-500 to-secondary-700',
      bgColor: 'from-secondary-500/10 to-secondary-700/10',
      iconColor: 'text-secondary-500',
      features: [
        'Разработка проекта под руководством ментора',
        'Решение реальных кейсов',
        'Участие во внешних грантовых конкурсах',
        'Практическая работа',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Карьерный',
      color: 'from-accent-500 to-accent-700',
      bgColor: 'from-accent-500/10 to-accent-700/10',
      iconColor: 'text-accent-600',
      features: [
        'Составление профессионального резюме',
        'Прохождение стажировок',
        'Содействие в трудоустройстве',
        'Получение рекомендательных писем',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-rainbow">Три вектора</span> работы программы
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Комплексный подход к развитию студентов через образование, практику и
              карьерный рост
            </p>
          </motion.div>

          {/* Vectors Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {vectors.map((vector, index) => {
              const Icon = vector.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="card p-8 h-full relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${vector.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${vector.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                      {vector.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {vector.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + idx * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${vector.iconColor} mt-2 flex-shrink-0`} />
                          <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-2xl font-bold ${vector.iconColor}`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Готовы начать свой путь развития?
            </p>
            <motion.a
              href="#apply"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Присоединиться к программе
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VectorsSection;
