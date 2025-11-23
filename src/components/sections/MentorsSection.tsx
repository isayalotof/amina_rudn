import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Building2, Briefcase } from 'lucide-react';

const MentorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mentors = [
    {
      name: 'Олег Ястребов',
      position: 'Ректор РУДН',
      category: 'Государственные деятели',
      icon: Award,
    },
    {
      name: 'Петр Кучеренко',
      position: 'Заместитель Министра науки и высшего образования РФ',
      category: 'Государственные деятели',
      icon: Award,
    },
    {
      name: 'Борис Чернышов',
      position: 'Заместитель председателя Государственной Думы',
      category: 'Государственные деятели',
      icon: Award,
    },
    {
      name: 'Анна Островская',
      position: 'Директор высшей школы промышленной политики и предпринимательства РУДН',
      category: 'Бизнес и предпринимательство',
      icon: Building2,
    },
    {
      name: 'Борис Башилов',
      position: 'Основатель юридической фирмы «Башилов, Носков и Партнеры»',
      category: 'Бизнес и предпринимательство',
      icon: Briefcase,
    },
    {
      name: 'Илья Добрынин',
      position: 'Руководитель организации «КИТЮР — Юристы в Китае»',
      category: 'Специализированные отрасли',
      icon: Briefcase,
    },
    {
      name: 'Артур Саруханов',
      position: 'Руководитель отдела маркетинговых коммуникаций АО «ВТБ лизинг»',
      category: 'Специализированные отрасли',
      icon: Building2,
    },
    {
      name: 'Оксана Прохоренко',
      position: 'Руководитель молодёжных программ VK',
      category: 'Специализированные отрасли',
      icon: Building2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="mentors" className="section bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
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
              Наши <span className="text-gradient-rainbow">менторы</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Профессионалы своего дела из топовых компаний и государственных
              структур
            </p>
          </motion.div>

          {/* Mentors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mentors.map((mentor, index) => {
              const Icon = mentor.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card-hover p-6 group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {mentor.position}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-xs font-medium text-primary-700 dark:text-primary-300">
                    {mentor.category}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Полный список менторов смотрите в группе ВКонтакте
            </p>
            <motion.a
              href="https://vk.com/prometorrudn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Перейти в сообщество
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorsSection;
