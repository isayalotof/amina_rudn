import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'ВКонтакте',
      href: 'https://vk.com/prometorrudn',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Telegram',
      href: '#',
      color: 'hover:text-blue-400',
    },
  ];

  const quickLinks = [
    { name: 'О программе', href: '#about' },
    { name: 'Этапы', href: '#timeline' },
    { name: 'Менторы', href: '#mentors' },
    { name: 'Направления', href: '#directions' },
    { name: 'Результаты', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer id="contacts" className="relative overflow-hidden bg-gray-900 text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-gray-900 to-secondary-900 opacity-90" />

      <div className="relative container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-4 text-gradient-rainbow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ProMentor RUDN
            </motion.h3>
            <p className="text-gray-400 mb-6">
              Менторский центр Студенческого совета РУДН им. Патриса Лумумбы
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg glass-light ${social.color} transition-colors flex items-center gap-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Российский университет дружбы народов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-1" />
                <a
                  href="mailto:prometor@rudn.ru"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  prometor@rudn.ru
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold mb-4">Присоединяйтесь</h4>
            <p className="text-gray-400 mb-6">
              Станьте частью профессионального сообщества
            </p>
            <motion.a
              href="#apply"
              className="btn-primary block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Подать заявку
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ProMentor RUDN. Все права защищены.
            </p>
            <p className="text-gray-400 text-sm">
              Создано с ❤️ студентами РУДН
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
    </footer>
  );
};

export default Footer;
