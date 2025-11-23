import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FileText,
  MessageCircle,
  Users,
  Sparkles,
  AlertCircle,
  BookOpen,
  Code,
  Award,
} from 'lucide-react';

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineSteps = [
    {
      icon: FileText,
      title: 'Подача заявки',
      description:
        'Студенты заполняют анкету в официальном сообществе Менторского отдела ProMentor RUDN — отвечают на вопросы о себе, профессиональной цели, способностях и ожидаемых результатах.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: MessageCircle,
      title: 'Собеседования',
      description:
        'Собеседования проводят с членами команды менторского отдела очно или онлайн. Кандидаты рассказывают о мотивации, личных предпочтениях и качествах. Результат: формирование «Резюме менти» для менторов.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Users,
      title: 'Формирование пар',
      description:
        'По окончании собеседований менторский отдел составляет резюме менти, которые отправляют менторам для формирования и согласования менторских пар. Список пар публикуется в группе ВКонтакте.',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: Sparkles,
      title: 'Торжественное открытие',
      description:
        'Официальная часть программы, кофе-брейк и неформальное знакомство, фотозона, презентация программы ProMentor RUDN 3.0.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: AlertCircle,
      title: '"Красная зона"',
      description:
        'Период, когда менторы могут отказаться от работы с выбранными подопечными, а менти сменить наставника или покинуть программу. Длительность: 2-3 недели.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: BookOpen,
      title: 'Базовое обучение',
      description:
        'Менти получает базовые знания по выбранному направлению, формирует цели и задачи на предстоящую работу и делает первые шаги в реализации проекта.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Code,
      title: 'Разработка проекта',
      description:
        'Разработка проекта, решение кейсов менти под руководством ментора, предоставление практики от ментора или участие во внешних грантовых конкурсах и проектных работах.',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: Award,
      title: 'Завершение программы',
      description:
        'Завершение работы менторских пар в рамках проекта ProMentor RUDN с возможным продолжением сотрудничества. Защита проектов, получение сертификатов и рекомендательных писем.',
      color: 'from-yellow-500 to-yellow-700',
    },
  ];

  return (
    <section id="timeline" className="section relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-rainbow">Этапы программы</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Пошаговый путь от подачи заявки до получения сертификата и
            рекомендательных писем
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                    }`}
                  >
                    <motion.div
                      className="card-hover p-6 md:p-8 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                    >
                      <span className="text-lg font-bold text-primary-600">
                        {index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Spacer for even/odd layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Duration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block card-glass px-8 py-4">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Общая длительность программы:{' '}
              <span className="text-gradient-secondary text-2xl">6.5 месяцев</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
