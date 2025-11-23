import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Для менти',
      questions: [
        {
          q: 'Кто может стать менти?',
          a: 'Любой студент РУДН младших курсов с мотивацией к развитию, готовностью к активной работе и четкой профессиональной целью.',
        },
        {
          q: 'Сколько длится программа?',
          a: 'Программа длится 6,5 месяцев — от подачи заявки до торжественного закрытия сезона.',
        },
        {
          q: 'Нужно ли платить за участие?',
          a: 'Нет, участие в программе ProMentor RUDN полностью бесплатное для всех студентов РУДН.',
        },
        {
          q: 'Могу ли я выбрать ментора?',
          a: 'Пары формируются менторским отделом на основе ваших резюме, целей и предпочтений. Менторы выбирают менти из списка.',
        },
        {
          q: 'Что я получу по окончании программы?',
          a: 'Сертификат о прохождении программы, практические навыки, готовый проект, возможность получить рекомендательное письмо и связи в профессиональной среде.',
        },
        {
          q: 'Как часто проходят встречи с ментором?',
          a: 'Частоту встреч вы определяете вместе с ментором в зависимости от целей и задач. Рекомендуется встречаться минимум раз в неделю.',
        },
        {
          q: 'Можно ли совмещать программу с учебой?',
          a: 'Да, программа специально разработана для студентов и учитывает учебный график.',
        },
      ],
    },
    {
      category: 'Для менторов',
      questions: [
        {
          q: 'Сколько времени нужно уделять менти?',
          a: 'Рекомендуется уделять 2-4 часа в неделю для встреч, консультаций и проверки работы менти.',
        },
        {
          q: 'Какие обязанности у ментора?',
          a: 'Помощь в профессиональном развитии, консультации по проектам, содействие в построении карьеры, обмен опытом.',
        },
        {
          q: 'Могу ли я быть ментором удаленно?',
          a: 'Да, многие менторы работают с подопечными онлайн через видеозвонки и мессенджеры.',
        },
        {
          q: 'Получу ли я сертификат как ментор?',
          a: 'Да, по окончании сезона все менторы получают благодарственные письма и сертификаты.',
        },
      ],
    },
  ];

  return (
    <section id="faq" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Часто задаваемые <span className="text-gradient-rainbow">вопросы</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ответы на популярные вопросы о программе менторства
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 100 + index;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1 }}
                        className="card overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <span className="font-semibold text-gray-800 dark:text-gray-200 pr-4">
                            {faq.q}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Не нашли ответ на свой вопрос?
            </p>
            <motion.a
              href="https://vk.com/prometorrudn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Задать вопрос в сообществе
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
