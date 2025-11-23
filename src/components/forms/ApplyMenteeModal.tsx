import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ApplyMenteeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyMenteeModal = ({ isOpen, onClose }: ApplyMenteeModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Личные данные
    fullName: '',
    faculty: '',
    course: '',
    direction: '',
    groupNumber: '',
    studentId: '',
    photo: '',
    vkLink: '',
    telegramLink: '',

    // Мотивационные вопросы
    whyJoin: '',
    whyTrack: '',
    interestingFact: '',
    whyNeedProgram: '',

    // Дополнительно
    videoLink: '',
    motivationLetter: '',
    portfolio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setStep(1);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
                    Заявка менти
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Шаг {step} из 3
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Личные данные */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold mb-4">Личные данные</h3>

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
                            Факультет/Институт <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="faculty"
                            value={formData.faculty}
                            onChange={handleChange}
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Курс <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="input"
                            required
                          >
                            <option value="">Выберите курс</option>
                            <option value="1">1 курс</option>
                            <option value="2">2 курс</option>
                            <option value="3">3 курс</option>
                            <option value="4">4 курс</option>
                            <option value="5">5 курс</option>
                            <option value="6">6 курс</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Направление <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="direction"
                            value={formData.direction}
                            onChange={handleChange}
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Номер группы <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="groupNumber"
                            value={formData.groupNumber}
                            onChange={handleChange}
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Номер студенческого билета <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Ссылка на фото (облако)
                          </label>
                          <input
                            type="url"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="input"
                            placeholder="https://"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ВКонтакте <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="url"
                            name="vkLink"
                            value={formData.vkLink}
                            onChange={handleChange}
                            className="input"
                            placeholder="https://vk.com/..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Telegram <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="telegramLink"
                            value={formData.telegramLink}
                            onChange={handleChange}
                            className="input"
                            placeholder="@username"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Мотивационные вопросы */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold mb-4">Мотивационные вопросы</h3>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Почему ты хочешь попасть в программу? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="whyJoin"
                          value={formData.whyJoin}
                          onChange={handleChange}
                          className="textarea"
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Почему выбрал именно этот трек и какая твоя цель на сезон? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="whyTrack"
                          value={formData.whyTrack}
                          onChange={handleChange}
                          className="textarea"
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Интересный факт о себе, связанный с данным треком
                        </label>
                        <textarea
                          name="interestingFact"
                          value={formData.interestingFact}
                          onChange={handleChange}
                          className="textarea"
                          rows={3}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Для чего тебе нужна программа менторства? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="whyNeedProgram"
                          value={formData.whyNeedProgram}
                          onChange={handleChange}
                          className="textarea"
                          rows={4}
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Видео и портфолио */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold mb-4">Видеовизитка и портфолио</h3>

                      <div className="card-glass p-6 mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Upload className="w-5 h-5 text-secondary-500" />
                          Требования к видеовизитке
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
                          <li>Хронометраж: не более 1,5 минуты</li>
                          <li>Расскажи о себе</li>
                          <li>Почему выбрал именно этот трек и ментора</li>
                          <li>Интересный факт о себе</li>
                          <li>Для чего тебе нужна программа</li>
                        </ul>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Ссылка на видеовизитку <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          name="videoLink"
                          value={formData.videoLink}
                          onChange={handleChange}
                          className="input"
                          placeholder="https://drive.google.com/..."
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Загрузите видео на облако и вставьте ссылку
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Мотивационное письмо <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="motivationLetter"
                          value={formData.motivationLetter}
                          onChange={handleChange}
                          className="textarea"
                          rows={6}
                          placeholder="Расскажи о своей мотивации участия в проекте, желании развиваться в рамках трека..."
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Портфолио (опционально)
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="input"
                          placeholder="Ссылка на портфолио, резюме или презентацию"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Приложите проекты, кейсы, курсы, олимпиады и другие достижения
                        </p>
                      </div>
                    </motion.div>
                  )}
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
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {!isSubmitted && (
              <div className="sticky bottom-0 glass-strong border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn-outline"
                    >
                      Назад
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary ml-auto"
                    >
                      Далее
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn-primary ml-auto"
                    >
                      Отправить заявку
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyMenteeModal;
