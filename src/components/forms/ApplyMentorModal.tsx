import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ApplyMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyMentorModal = ({ isOpen, onClose }: ApplyMentorModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    expertise: '',
    direction: '',
    timeCommitment: '',
    about: '',
    linkedin: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mentor form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const directions = [
    'Управление проектами',
    'Маркетинг',
    'Бизнес-анализ',
    'Публичные выступления',
    'Юриспруденция',
    'Реклама',
    'Пиар (PR)',
    'Креативные индустрии',
    'IT и технологии',
    'Психология',
    'Преподавание',
    'Копирайтинг',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl glass-strong shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 glass-strong border-b border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Заявка ментора
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Поделитесь опытом и помогите студентам развиваться
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Личные данные */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          ФИО <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          LinkedIn (опционально)
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          className="input"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Профессиональная информация */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Профессиональная информация</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Компания/Организация <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Должность <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Опыт работы <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="">Выберите опыт</option>
                          <option value="1-3">1-3 года</option>
                          <option value="3-5">3-5 лет</option>
                          <option value="5-10">5-10 лет</option>
                          <option value="10+">Более 10 лет</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Направление менторства <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="direction"
                          value={formData.direction}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="">Выберите направление</option>
                          {directions.map((dir) => (
                            <option key={dir} value={dir}>
                              {dir}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">
                        Сфера экспертизы <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                        className="textarea"
                        rows={3}
                        placeholder="Опишите ваши ключевые навыки и области экспертизы..."
                        required
                      />
                    </div>
                  </div>

                  {/* О себе */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Дополнительная информация</h3>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Готовность уделять время (часов в неделю) <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="timeCommitment"
                        value={formData.timeCommitment}
                        onChange={handleChange}
                        className="input"
                        required
                      >
                        <option value="">Выберите время</option>
                        <option value="2-4">2-4 часа</option>
                        <option value="4-6">4-6 часов</option>
                        <option value="6-8">6-8 часов</option>
                        <option value="8+">Более 8 часов</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        О себе и мотивация <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="textarea"
                        rows={6}
                        placeholder="Расскажите о себе, своем опыте и почему вы хотите стать ментором..."
                        required
                      />
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="card-glass p-6">
                    <h4 className="font-semibold mb-3 text-primary-600 dark:text-primary-400">
                      Что вы получите как ментор:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Возможность поделиться опытом и развивать профессиональное сообщество</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Сертификат ментора по окончании программы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Доступ к талантливым студентам для потенциального найма</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Networking с другими менторами и экспертами</span>
                      </li>
                    </ul>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {!isSubmitted && (
              <div className="sticky bottom-0 glass-strong border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-outline"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyMentorModal;
