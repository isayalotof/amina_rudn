import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Что такое <span className="text-gradient-rainbow">ProMentor RUDN</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              ProMentor RUDN — уникальный проект Студенческого совета РУДН им. Патриса
              Лумумбы, который направлен на помощь студентам в создании собственной
              карьерной траектории под руководством профессионалов своего дела.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="card-hover p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Миссия проекта
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Помочь студентам найти свой путь в профессии через наставничество
                опытных специалистов и создание реальных карьерных возможностей.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-hover p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Цель программы
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Создание профессионального сообщества, где студенты получают не только
                знания, но и практический опыт работы над реальными проектами.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-hover p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Достижения
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                За 4 сезона программу успешно завершили 120+ менти, получено 100+
                рекомендательных писем от крупных компаний и организаций.
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="card-glass p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-200/30 to-accent-200/30 dark:from-secondary-900/20 dark:to-accent-900/20 rounded-full blur-3xl -z-10" />
              <div className="text-6xl text-secondary-500 opacity-20 mb-4">"</div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                Открытие сезона — это, наверное, самое важное мероприятие нашей
                программы. Кнопку "СТАРТ" нажимают наши менти и менторы, которые
                предвкушают совместную работу. Очень трепетно видеть, как оживленно шёл
                диалог в менторских парах, сколько искренних улыбок и горящих глаз
                озаряли зал
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500" />
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">
                    Виктория Бирюкова
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Руководитель проекта «ProMentor RUDN»
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
